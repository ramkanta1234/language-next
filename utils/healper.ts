import { jwtDecode } from "jwt-decode";


// utils/getCookies.ts
export async function getCookies(cookieNames: string[]) {
  const res = await fetch("/api/get-cookie-data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cookieNames }),
  });

  if (!res.ok) throw new Error("Failed to fetch cookies");

  const result = await res.json();
  return result.data; // returns: { accessToken: "...", userData: "..." }
}

export async function setCookie(name: string, data: string) {
  const res = await fetch("/api/set-cookie-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, data }),
  });

  if (!res.ok) throw new Error("Failed to set cookie");

  const result = await res.json();
  return result.success; // or result.message if your API returns a message
}

export function redirectToDashboard(router: any, role: any,userData: any) {
  console.log("role---------------", role,);

  role = role.split(',')
  const isAffiliate = userData?.custom_attributes?.['custom:is_affiliate'] === '1';
  
  console.log("Roles array:", role);
  console.log("Is affiliate:", isAffiliate);


  // Role-based dashboard navigation
 if (role.includes("admin")) {
    router.push("/dashboard-admin");
  } else if (isAffiliate || role.includes("affiliate")) {
    router.push("/affiliate-dashboard");
  } else {
    router.push("/dashboard");
  }


}



// Custom attributes and claims that might exist in the decoded token
interface CustomAttributes {
  "cognito:user_status": string;
  "custom:phoneNumber": string;
  "custom:role": string;
  "custom:userName": string;
  "custom:additionalClaim"?: string; // optional custom claim
}

export interface DecodedAccessToken {
  email: string;
  sub: string;
  username: string;
  custom_attributes: CustomAttributes;
  token_use: string;
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  scope: string;
  auth_time: number;
  event_id: string;
  client_id: string;
}

// Function to decode the access token
export function decodeAccessToken(token: string): DecodedAccessToken | null {
  try {
    const decoded = jwtDecode<DecodedAccessToken>(token);
    return decoded;
  } catch (error) {
    console.error("Failed to decode access token:", error);
    return null;
  }
}

