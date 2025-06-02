import React, { forwardRef } from "react";
import styled from "styled-components";

import Image from "next/image";
import PreEnrollmentForm from "../pre-enrollment/pre-enrollment";

const BeTheFirstInSC = forwardRef(({campaignDetails}: any, ref) => {
  return (
    <>
      <BeTheFirstInSCMain>
        <CommonWidth>
          <BeTheFirstInSCInnr>
            <FINSCleft>
              <LeftTopHeader className="lefttopheader">
                <h1>Be First in Line for SociClip!</h1>
              </LeftTopHeader>
              <LeftMdlTxt>
                <p>
                  Pre-enroll now to get exclusive updates, early access
                  opportunities, and help shape the future of creator
                  monetization. We're building SociClip <span>*for you*</span>, and we want
                  you involved from the start. Secure your spot for our 2025
                  launch!
                </p>
              </LeftMdlTxt>

              <div className="color_height"></div>
            </FINSCleft>

            <FINSCrght>
              <PreEnrollmentForm campaignDetails={campaignDetails} ref={ref} />
            </FINSCrght>
          </BeTheFirstInSCInnr>
        </CommonWidth>
        <Image
          className="abs_img_befirst_Sc"
          src="/image/image_abs_befrstinsc_img.webp"
          width={686}
          height={793}
          alt="Image"
        />
      </BeTheFirstInSCMain>
    </>
  );
});

export default BeTheFirstInSC;

const BeTheFirstInSCMain = styled.div`
  background: url(/image/befirstinSC_main_bg.webp);
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 70px 0;
  position: relative;

  .abs_img_befirst_Sc {
    position: absolute;
    width: 25%;
    bottom: 0;
    left: 47%;
    transform: translateX(-50%);
  }

  @media only screen and (max-width:1366px){
    padding: 50px 0;
   }

   @media only screen and (max-width:1199px){

    padding: 30px 0;

   .abs_img_befirst_Sc{display:none;}
   }

     @media only screen and (max-width: 499px){
        padding: 20px 0;
    }
`;

const CommonWidth = styled.div`
  width: 1700px;
  margin: 0 auto;
  max-width:96%;

  @media only screen and (max-width:768px){
   max-width: 94%;
  }
`;

const BeTheFirstInSCInnr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap:wrap;

   
`;

const FINSCleft = styled.div`
  width: 30%;

  .color_height{
  background-color:#fb4163;    height: 14px;
    margin-top: 30px;
    max-width: 84%;
    clip-path: polygon(0 0%, 94% 0, 100% 100%, 0% 100%);
  }

   @media only screen and (max-width:1599px){
    width: 34%;
   }

   @media only screen and (max-width:1199px){
    width: 100%; margin-bottom:25px;

    .color_height{max-width:100%; margin-top: 15px;
    }
   }
`;

const FINSCrght = styled.div`
  width: 35%;

   @media only screen and (max-width:1199px){
    width: 100%;
   }
`;

const LeftTopHeader = styled.div`
  h1 {
    font-size: 60px;
    line-height: 66px;
    color: #9966cc;
    font-weight: 600;
    text-transform: uppercase;
  }

@media only screen and (max-width:1699px){
  h1{
      font-size: 50px;
      line-height: 56px;
      }
}

  @media only screen and (max-width:1599px){
  h1{
      font-size: 50px;
      line-height: 56px;
      }
  }

   @media only screen and (max-width:1366px){
    h1{
      font-size: 42px;
      line-height: 49px;
      }
   }

   @media only screen and (max-width:768px){
   h1{
      font-size: 32px;
      line-height: 38px;
      }
    }

     @media only screen and (max-width:499px){
   h1{
      font-size: 26px;
      line-height: 32px; text-align:center;
      }
    }

`;

const LeftMdlTxt = styled.div`
  width: 87%;
  p {
    font-size: 30px;
    line-height: 36px;
    color: #2d2c2d;
    font-weight: 400;
  }
   p span{
   color:#fb4163;
   }
   @media only screen and (max-width:1599px){
   p {
    font-size: 26px;
    line-height: 33px;
      }
  }

  @media only screen and (max-width:1366px){
   p {
    font-size: 24px;
    line-height: 30px;
      }
   }
 @media only screen and (max-width:1199px){
   width: 100%;
 }
    @media only screen and (max-width:499px){
   p {
    font-size: 20px;
    line-height: 26px; text-align:center;
      }
   }
`;
