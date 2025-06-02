"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "@tanstack/react-form";
import {
  Box,
  TextField,
  LinearProgress,
  Button,
  Snackbar,
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormControlLabel,
  FormHelperText,
  Checkbox,
  Paper,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  InputAdornment,
  IconButton,
} from "@mui/material";

import styled from "styled-components";
import api from "@/utils/api"; // Import the global API function
import CircularProgress from "@mui/material/CircularProgress";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useParams } from "next/navigation";

// Define the schema for form validation
const PreEnrollmentSchema = z.object({
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  firstName: z
    .string()
    .min(1, "First Name is required")
    .regex(/^[A-Za-z\s]+$/, "First Name must contain only letters"),
  lastName: z
    .string()
    .min(1, "Last Name is required")
    .regex(/^[A-Za-z\s]+$/, "Last Name must contain only letters"),
  // main_content_type: z
  //   .array(z.string().min(1, "Content type is required"))
  //   .min(1, "Select at least one content type"),
  // type_of_artist: z.enum(["Artist", "Founder", "Other"], {
  //   required_error: "Select a content type",
  // }),
  userName: z.string().min(4, "userName must be at least 4 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
  confirm_password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
  consent_checkbox: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive email updates",
  }),
});

type PreEnrollmentFormValues = z.infer<typeof PreEnrollmentSchema> & {
  role: string;
};

// Define audience size options with string values
interface AudienceSizeOption {
  value: string;
  label: string;
}

const contentTypeOptions = ["Artist", "Founder", "Other"];

export default function PreEnrollmentForm({
  mainDivRef2,
  campaignDetails,
  ref,
}: any) {
  const { uniqueId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [openThankYouModal, setOpenThankYouModal] = useState(false);

  const addConversion = async (dataset: any) => {
    try {
      const response = await api.post(
        "campaigns/click-conversion-add",
        dataset
      );
      if (response.data.status == "success") {
        sessionStorage.removeItem("uuid");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const form = useForm<PreEnrollmentFormValues>({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      role: "user",
      userName: "",
      consent_checkbox: false,
      password: "",
      confirm_password: "",
    },
    onSubmit: async ({ value }) => {
      setIsLoading(true);
      try {
        const rawPhone = value.phoneNumber.replace(/\D/g, "");
        // Format the data for API submission
        const submissionData = {
          ...value,
          phoneNumber: rawPhone,
          // Ensure main_content_type is always an array
          from_landingPage: true,
          opportunity_Slug: "sociClipFounder",
          campaign_id: campaignDetails?.campaign_id,
          affiliate_id: campaignDetails?.affiliate_id,
          main_content_type: ["Artist", "Founder"],
        };

        // Send data to API
        const response = await api.post(
          "user-management/user-signup",
          submissionData
        );

        // Handle success
        setIsLoading(false);
        setIsFormSubmitted(true);
        setOpenThankYouModal(true);

        if (sessionStorage.getItem("uuid")) {
          const response = await fetch(
            "https://ipinfo.io/?token=f6a654e584dda4"
          );
          const data = await response.json();
          const dataset = {
            ip_info: data,
            campaignUniqueId: uniqueId,
            // uuid: JSON.parse(sessionStorage.getItem("uuid")),
            conversion: true,
          };
          await addConversion(dataset);
        }

        // Reset form after successful submission
        form.reset();
      } catch (error) {
        console.error("Form submission error:", error);
        setSnackbarMessage(
          "This email already exists. Try with another email."
        );
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
        setIsLoading(false);
      }
    },
  });

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <StyledContainer>
      <StyledPaper elevation={3} ref={mainDivRef2}>
        <ContentWrapper>
          {/* <HeaderSection>
            <Typography variant="h1">
              Be First in Line for SociClip!
            </Typography>
            
            <Typography variant="body1">
              Pre-enroll now to get exclusive updates, early access opportunities, and help shape the future of creator monetization. We're building SociClip *for you*, and we want you involved from the start. Secure your spot for our 2025 launch!
            </Typography>
          </HeaderSection> */}

          <FormWrapper ref={ref} className="pre-enrollment-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
            >
              <Grid container spacing={1}>
                {/* First Name */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <form.Field
                    name="firstName"
                    validators={{
                      onSubmit: ({ value }) => {
                        if (!value) return "First Name is required";
                        if (!/^[A-Za-z\s'.-]+$/.test(value))
                          return "Letters and special characters allowed";
                        return undefined;
                      },
                    }}
                  >
                    {(field) => (
                      <TextField
                        label="First Name"
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        error={field.state.meta.errors.length > 0}
                        helperText={field.state.meta.errors.join(", ")}
                        fullWidth
                        margin="normal"
                      />
                    )}
                  </form.Field>
                </Grid>

                {/* Last Name */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <form.Field
                    name="lastName"
                    validators={{
                      onSubmit: ({ value }) => {
                        if (!value) return "Last Name is required";
                        if (!/^[A-Za-z\s'.-]+$/.test(value))
                          return "Letters and special characters allowed";
                        return undefined;
                      },
                    }}
                  >
                    {(field) => (
                      <TextField
                        label="Last Name"
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        error={field.state.meta.errors.length > 0}
                        helperText={field.state.meta.errors.join(", ")}
                        fullWidth
                        margin="normal"
                      />
                    )}
                  </form.Field>
                </Grid>

                {/* Email Address */}
                <Grid size={{ xs: 12 }}>
                  <form.Field
                    name="email"
                    validators={{
                      onSubmit: ({ value }) => {
                        if (!value) return "Email is required";
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailRegex.test(value))
                          return "Please enter a valid email address";
                        return undefined;
                      },
                    }}
                  >
                    {(field) => (
                      <TextField
                        label="Your Email"
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value.toLowerCase())}
                        error={field.state.meta.errors.length > 0}
                        helperText={field.state.meta.errors.join(", ")}
                        fullWidth
                        margin="normal"
                        autoComplete="off"
                      />
                    )}
                  </form.Field>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <form.Field
                    name="phoneNumber"
                    validators={{
                      onSubmit: ({ value }) => {
                        const digitsOnly = value.replace(/\D/g, "");
                        if (!digitsOnly) return "Phone Number is required";
                        if (digitsOnly.length !== 10)
                          return "Invalid phone number";
                        return undefined;
                      },
                    }}
                  >
                    {(field) => {
                      const formatPhone = (value: string) => {
                        const digits = value.replace(/\D/g, "").slice(0, 10);
                        if (digits.length <= 3) return `(${digits}`;
                        if (digits.length <= 6)
                          return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
                        return `(${digits.slice(0, 3)}) ${digits.slice(
                          3,
                          6
                        )}-${digits.slice(6)}`;
                      };

                      const handleChange = (value: string) => {
                        const formatted = formatPhone(value);
                        field.handleChange(formatted);
                      };

                      return (
                        <TextField
                          label="Phone Number"
                          name={field.name}
                          value={field.state.value}
                          onChange={(e) => handleChange(e.target.value)}
                          error={field.state.meta.errors.length > 0}
                          helperText={field.state.meta.errors.join(", ")}
                          fullWidth
                          margin="normal"
                          placeholder="(123) 456-7890"
                        />
                      );
                    }}
                  </form.Field>
                </Grid>

                {/* userName */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <form.Field
                    name="userName"
                    validators={{
                      onSubmit: ({ value }) => {
                        if (!value) return "User Name is required";
                        if (value.length < 4)
                          return "userName must be at least 4 characters";
                        return undefined;
                      },
                    }}
                  >
                    {(field) => (
                      <TextField
                        label="User Name"
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        error={field.state.meta.errors.length > 0}
                        helperText={field.state.meta.errors.join(", ")}
                        fullWidth
                        margin="normal"
                      />
                    )}
                  </form.Field>
                </Grid>

                {/* Password */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <form.Field
                    name="password"
                    validators={{
                      onSubmit: ({ value }) => {
                        if (!value) return "Password is required";
                        if (value.length < 8)
                          return "Password must be at least 8 characters";
                        if (!/[a-z]/.test(value))
                          return "Must contain a lowercase letter";
                        if (!/[A-Z]/.test(value))
                          return "Must contain an uppercase letter";
                        if (!/[0-9]/.test(value))
                          return "Must contain a number";
                        if (!/[^a-zA-Z0-9]/.test(value))
                          return "Must contain a special character";
                        return undefined;
                      },
                    }}
                  >
                    {(field) => (
                      <TextField
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        error={field.state.meta.errors.length > 0}
                        helperText={field.state.meta.errors.join(", ")}
                        fullWidth
                        margin="normal"
                        autoComplete="new-password"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                className="eyeButton"
                                onClick={() => setShowPassword((prev) => !prev)}
                                edge="end"
                                aria-label="toggle password visibility"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  </form.Field>
                </Grid>

                {/* Confirm Password */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <form.Field
                    name="confirm_password"
                    validators={{
                      onSubmit: ({ value, fieldApi }) => {
                        if (!value) return "Confirm Password is required";
                        if (value !== fieldApi.form.getFieldValue("password")) {
                          return "Passwords do not match";
                        }
                        return undefined;
                      },
                    }}
                  >
                    {(field) => (
                      <TextField
                        label="Confirm Password"
                        type={showConfirmPassword ? "text" : "password"}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        error={field.state.meta.errors.length > 0}
                        helperText={field.state.meta.errors.join(", ")}
                        fullWidth
                        margin="normal"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                className="eyeButton"
                                onClick={() =>
                                  setShowConfirmPassword((prev) => !prev)
                                }
                                edge="end"
                                aria-label="toggle password visibility"
                              >
                                {showConfirmPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  </form.Field>
                </Grid>

                {/* type of artist */}

                {/* <form.Field
                  name="type_of_artist"
                  validators={{
                    onSubmit: ({ value }) => {
                      if (!value) return "You must select the type of artist";
                      return undefined;
                    },
                  }}
                >
                  {(field) => (
                    <FormControl
                      fullWidth
                      margin="normal"
                      className="lrg_fld"
                      error={field.state.meta.errors.length > 0}
                    >
                      <InputLabel id="type-of-artist-label">
                        What type of artist are you?
                      </InputLabel>
                      <Select
                        labelId="type-of-artist-label"
                        id="type-of-artist"
                        name={field.name}
                        value={field.state.value || ""}
                        onChange={(e) => field.handleChange(e.target.value)}
                        label="What type of artist are you?"
                      >
                        {contentTypeOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {field.state.meta.errors.length > 0 && (
                        <FormHelperText>
                          {field.state.meta.errors.join(", ")}
                        </FormHelperText>
                      )}
                    </FormControl>
                  )}
                </form.Field> */}

                {/* Consent Checkbox */}
                <Grid size={{ xs: 12 }}>
                  <form.Field
                    name="consent_checkbox"
                    validators={{
                      onSubmit: ({ value }) =>
                        value !== true
                          ? "You must agree to receive email updates"
                          : undefined,
                    }}
                  >
                    {(field) => (
                      <>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name={field.name}
                              checked={field.state.value ?? false}
                              onChange={(e) =>
                                field.handleChange(e.target.checked)
                              }
                              color="primary"
                            />
                          }
                          label={
                            <span style={{ fontSize: "14px", color: "#333" }}>
                              I agree to receive email updates about SociClip's
                              launch and development.{" "}
                              <a
                                href="/privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "#1976d2",
                                  textDecoration: "underline",
                                }}
                              >
                                Privacy Policy
                              </a>{" "}
                              /{" "}
                              <a
                                href="/terms-and-conditions"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "#1976d2",
                                  textDecoration: "underline",
                                }}
                              >
                                Terms and Conditions
                              </a>
                            </span>
                          }
                        />
                        {field.state.meta.errors.length > 0 && (
                          <FormHelperText
                            error
                            style={{ marginLeft: "14px", marginTop: "-8px" }}
                          >
                            {field.state.meta.errors.join(", ")}
                          </FormHelperText>
                        )}
                      </>
                    )}
                  </form.Field>
                </Grid>
              </Grid>

              {/* Submit Button */}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isLoading}
                fullWidth
                size="large"
                sx={{ mt: 3, mb: 2 }}
              >
                {isLoading ? (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: "white",
                    }}
                  />
                ) : (
                  "Become A Founder Now"
                )}
              </Button>
              {isLoading && (
                <LinearProgress
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#fe4264",
                    },
                  }}
                />
              )}
            </form>
          </FormWrapper>
        </ContentWrapper>
      </StyledPaper>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <Dialog
        open={openThankYouModal}
        onClose={() => setOpenThankYouModal(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: { borderRadius: 3 },
        }}
        terms-and-conditions
      >
        <DialogTitle
          sx={{
            backgroundColor: "#9370DB", // Deep purple
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          🎉 You're In! Welcome, SociClip Founding Artist!
        </DialogTitle>

        <DialogContent>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Congratulations! You've successfully secured your spot as one of the
            first 5,000 Founding Creators at SociClip.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            We're incredibly excited to welcome an artist with your vision to
            our inner circle. You'll not only get a head start on monetizing
            your content but also have a unique opportunity to help shape the
            tools and features for our entire community.
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>
            Stay tuned – we'll be in touch soon with exclusive updates and next
            steps. We can't wait to see what you'll create!
          </Typography>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button
            onClick={() => setOpenThankYouModal(false)}
            variant="contained"
            sx={{
              backgroundColor: "#40E0D0",
              color: "#fff",
              px: 4,
              py: 1,
              fontWeight: "bold",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "#36cfc9",
              },
            }}
          >
            GOT IT!
          </Button>
        </DialogActions>
      </Dialog>
    </StyledContainer>
  );
}

// Styled components
const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  // max-width: 1200px;
  // margin: 4rem auto;
  // padding: 0 1rem;
  position: relative;

  @media (max-width: 768px) {
    // margin: 2rem auto;
    padding: 0 0.5rem;
  }
`;

const StyledPaper = styled(Paper)`
  width: 100%;
  // max-width: 1200px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    border-radius: 12px;
  }
`;

const ContentWrapper = styled(Box)`
  padding: 0;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// const HeaderSection = styled(Box)`
//   background: linear-gradient(to bottom, indigo, mediumslateblue);
//   color:  ${({ theme }) => theme.colors.onlyWhiteText};
//   padding: 1rem;
//   text-align: center;
//   // width: 50%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media (max-width: 768px) {
//     width: 100%;
//     padding: 2rem 1.5rem;
//   }

//   h1 {
//     font-size: 2rem;
//     font-weight: 700;
//     margin-bottom: 0.5rem;
//     line-height: 1.2;

//     @media (max-width: 768px) {
//       font-size: 1.5rem;
//     }
//   }

//   h2 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     margin-bottom: 1.5rem;
//     color: #E0E7FF;

//     @media (max-width: 768px) {
//       font-size: 1.2rem;
//       margin-bottom: 1rem;
//     }
//   }

//   p {
//     font-size: 1rem;
//     line-height: 1.6;
//     max-width: 600px;
//     margin: 0 auto;

//     @media (max-width: 768px) {
//       font-size: 0.9rem;
//     }
//   }
// `;

const FormWrapper = styled(Box)`
  padding: 1.5rem;
  background: white;
  width: auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem 1rem 0.5rem;
  }

  .formfieldWrpr .MuiFormControl-root {
    margin-bottom: 5px !important;
    flex: 1 0 45%;
    margin-top: 0 !important;
  }

  .formfieldWrpr .lrg_fld.MuiFormControl-root {
    flex: 1 0 100%;
  }

  .MuiButton-containedPrimary {
    background: linear-gradient(
      180deg,
      rgba(249, 64, 98, 1) 0%,
      rgba(249, 34, 73, 1) 100%
    );
    color: white;
    padding: 10px 20px;
    font-size: 36px;
    line-height: 42px;
    font-weight: 600;
    text-transform: none;
    border-radius: 8px;

    &:hover {
      background: linear-gradient(to bottom, indigo, mediumslateblue);
    }

    @media (max-width: 1499px) {
      padding: 0.6rem 15px;
      font-size: 30px;
      line-height: 36px;
    }

    @media (max-width: 768px) {
      padding: 0.6rem 0;
      font-size: 1rem;
    }
  }

  .formfieldWrpr {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    @media (max-width: 576px) {
      flex-direction: column;
    }
  }

  .formfieldWrpr .MuiFormControlLabel-root {
    margin-right: 0;
  }

  .formfieldWrpr .MuiFormControlLabel-root .MuiCheckbox-root {
    margin-top: -17px;
  }
`;
