'use client';

import { Button } from "@mui/material";
import Image from "next/image";
import React, { forwardRef } from "react";
import styled from "styled-components";
import LanguageDropdown from "../LanguageDropdown/page";
import { useTranslation } from "@/app/hooks/useTranslation"

const BannerSec = forwardRef<HTMLDivElement>((props, ref) => {
  const { t, language, changeLanguage } = useTranslation('landingpageOne');

  const handleScrollToForm = () => {
    if (ref && typeof ref !== 'function' && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <BannerMain>
        <BannerMainInner>
          <CommonWidth>
            <div className="banner_flx_sec">
              <Logo>
                <Image
                  src="/image/sociclip_main_logo.webp"
                  alt=""
                  width={298}
                  height={201}
                />
              </Logo>
              <LanguageDropdown onChangeLanguage={changeLanguage} currentLanguage={language} />
            </div>

            <BannerTxtSec>
              <h5>{t('hero.welcome')}</h5>
              <div className="bnnr_lrg_txt">
                <h1>{t('hero.headline1')}</h1>
                <h1>{t('hero.headline2')}</h1>
                <h1>{t('hero.launch')}</h1>
              </div>
              <div className="txt_h5">
                <h5>{t('hero.question')}</h5>
              </div>
              <div className="flx_wrp">
                <h6>{t('hero.subheadline')}</h6>
                <Button onClick={handleScrollToForm} className="red_btn sell_btn">
                  {t('hero.cta_button')}
                </Button>
              </div>
            </BannerTxtSec>

            <Vdocontnr>
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/NNQLJcJEzv0"
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Vdocontnr>
          </CommonWidth>
        </BannerMainInner>
        <BannerMainInner2>
          <CommonWidth>
            <Banner2ndSec>
              <Bnnr2ndTopTxtSec>
                <Image
                  className="abs_diamond_img"
                  src="/image/diamond_img.webp"
                  alt=""
                  height={150}
                  width={188}
                />
                <h1>{t('digitalGold.headline')}</h1>
                <h5>{t('digitalGold.subheadline')}</h5>
              </Bnnr2ndTopTxtSec>
              <Bnnr2ndLftPaddSec>
                <section className="second_lft_padd_inn">
                  <h3>{t('digitalGold.intro')}</h3>
                  <div className="txt_icon_sec">
                    {Array.isArray(t('digitalGold.benefits'))
                      ? t('digitalGold.benefits').map((benefit:any, index:any) => (
                        <p key={index}>
                          <Image
                            src={`/image/${['vdo_logo', 'clip_logo', 'dollar_s_logo', 'globe_logo', 'launcher_logo'][index]}.webp`}
                            width={70}
                            height={80}
                            alt="Image"
                          />
                          <span>{benefit}</span>
                        </p>
                      ))
                      : null}
                  </div>
                </section>
              </Bnnr2ndLftPaddSec>
              <Button onClick={handleScrollToForm} className="founder_btn red_btn">
                {t('digitalGold.cta_button')}
              </Button>
            </Banner2ndSec>
          </CommonWidth>
          <Image
            className="abs_black_dressed_girl"
            src="/image/black_dressed_girl.webp"
            width={809}
            height={946}
            alt="Image"
          />
        </BannerMainInner2>
      </BannerMain>
    </div>
  );
});

export default BannerSec;

// banner 1st sec--------------------------//

const BannerMain = styled.div`
  background: url(/image/sclip_bnnr_bg_1.webp), url(/image/bnnr_bg_2.webp), #fff;
  background-repeat: no-repeat;
  background-position: top right, bottom left, center;
  background-size: 100% auto, 100% 50%;

  padding-bottom: 140px;
  overflow: hidden;

  @media only screen and (max-width: 1399px){
    padding-bottom: 40px;
  }
      
  @media only screen and (max-width: 1199px) {
    padding-bottom: 45px;
    background: linear-gradient(
      79deg,
      rgba(124, 199, 240, 1) 0%,
      rgba(253, 238, 255, 1) 50%,
      rgba(226, 159, 223, 1) 100%
    );
  }

   @media only screen and (max-width: 499px){
        padding: 20px 0;
    }
`;
const CommonWidth = styled.div`
  width: 1720px;
  margin: 0 auto;
  max-width: 96%;

  @media only screen and (max-width:768px){
   max-width: 94%;
  }
`;
const BannerMainInner = styled.div`
  background: url(/image/banner_ladies_img.webp);
  background-position: top right -28px;
  background-size: auto 100%;
  padding: 45px 0 80px;
  background-repeat: no-repeat;
  .banner_flx_sec{display:flex;    justify-content: space-between;
        align-items: flex-start;}
    .banner_flx_sec select{    padding: 10px 20px;
    font-size: 16px;
    line-height: 24px;
    outline: none;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #333;
    cursor: pointer;
    padding-left: 10px;}

  @media only screen and (max-width: 1599px) {
  
  background-position: top right -75px;
  }

   @media only screen and (max-width: 1399px){
      padding: 45px 0 50px;
   }
    

  @media only screen and (max-width: 1199px) {
    background: none;
    padding: 30px 0 40px;
  }

   @media only screen and (max-width: 499px){
      padding: 0px 0 30px;
    }
`;

const Logo = styled.div`
  width: fit-content;
  margin-bottom: 30px;
  img {
    display: block;
  }
  @media only screen and (max-width: 1199px) {
    width: 200px;
    img {
      width: 100%;
    }
  }

   @media only screen and (max-width: 499px){
    width: 150px; margin:0 auto 20px;
    }
`;

const BannerTxtSec = styled.div`
  h5 {
    font-size: 48px;
    line-height: 54px;
    color: #474848;
    font-weight: 400;
    margin-bottom: 30px;
    font-family: "Roboto", sans-serif;
  }
  h5 span {
    color: #9966cc;
  }

  .bnnr_lrg_txt {
    width: 73%;
  }

  .bnnr_lrg_txt h1 {
    font-size: 65px;
    line-height: 71px;
    color: #9966cc;
    font-weight: 700;
    position: relative;
    padding-left: 25px;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
  }

  .bnnr_lrg_txt h1 span {
    color: #fe4264;
  }

  .bnnr_lrg_txt h1::before {
    content: "";
    position: absolute;
    background: url(/image/txt_b4_img.webp);
    width: 15px;
    height: 75%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-size: 100% 100%;
  }
  .txt_h5 {
    width: 55%;
  }

  h6 {
    font-size: 36px;
    line-height: 42px;
    color: #000;
    font-weight: 400;
    margin-bottom: 0;
    width: fit-content;
    width:30%;
    margin-right:10px;
  }
  h6 span {
    color: #9966cc;
    font-weight: 600;
  }
  h6.aftr_contnt {
    position: relative;
    width: 56%;
    overflow: hidden;
  }
  h6.aftr_contnt::after {
    content: "";
    position: absolute;
    background: #fb4163;
    height: 6px;
    left: 459px;
    bottom: 9px;
    width: 100%;
  }

  .flx_wrp{
  
  display:flex; align-items:flex-end;}

  .sell_btn{
    z-index:99;
  
  }

  .red_btn{
  background: linear-gradient(180deg,rgba(250, 64, 98, 1) 0%, rgba(250, 34, 73, 1) 100%);
    color: #FFFFFF;
    padding: 15px 20px;
    font-size:48px;
    line-height:54px;
    font-weight: 800;
    text-transform: uppercase;
    border-radius: 8px;
    width:fit-content;
  }

   @media only screen and (max-width: 1699px){
    .sell_btn{
    font-size:34px;
    line-height:40px;
  
  }

  .bnnr_lrg_txt h1 {
    font-size: 55px;
    line-height: 62px;
    }

     h5 {
    font-size: 42px;
    line-height: 48px;}
   }

  @media only screen and (max-width: 1599px) {
    .bnnr_lrg_txt h1 {
      font-size: 45px;
      line-height: 51px;
    }
    .bnnr_lrg_txt {
      width: 65%;
    }
    h5 {
      font-size: 40px;
      line-height: 46px;
    }
  }

 @media only screen and (max-width: 1399px){
  h5 {
        font-size: 32px;
        line-height: 40px;
    }

    h6 {
    font-size: 31px;
    line-height: 38px;}
 }


  @media only screen and (max-width: 1366px) {
    .bnnr_lrg_txt h1 {
      font-size: 42px;
      line-height: 49px;
    }

  
  }

  @media only screen and (max-width: 1199px) {
    .bnnr_lrg_txt {
      width: 100%;
    }
    .txt_h5 {
      width: 100%;
    }
      .flx_wrp{
      display:block;}

      h6{
      width:auto; margin-bottom:25px;  margin-right: 0px;
      }

      .sell_btn{
    font-size:28px;
    line-height:34px;
    display:block;
    margin:0 auto;
  }
  }

  @media only screen and (max-width: 768px) {
    .bnnr_lrg_txt h1 {
      font-size: 32px;
      line-height: 40px;
    }

    h5 {
      font-size: 28px;
      line-height: 36px;
      margin-bottom: 20px;
    }
    h6 {
      font-size: 30px;
      line-height: 38px;
      width: auto;
    }
    h6.aftr_contnt {
      width: auto;
    }
    h6.aftr_contnt::after {
      display: none;
    }

     .sell_btn{
    font-size:22px;
    line-height:28px;
   
  }
  }

  @media only screen and (max-width: 499px){
   h5,h6{text-align:center;font-size: 21px;
      line-height: 27px;}
    .bnnr_lrg_txt h1 {
      font-size: 26px;
      line-height: 32px;
          margin-bottom: 14px;
    }
  }
`;

const Vdocontnr = styled.div`
  display: flex;

  align-items: center;
  margin-top: 50px;
  width: 63%;

  iframe {
    border-radius: 6px; /* Example: Rounded corners */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Example: Shadow */
    max-width: 100%; /* Responsive */
    width: 100%;
    height: 620px;
    border: 17px solid #ffffff;
  }
  @media only screen and (max-width: 1366px) {
    iframe {
      height: 470px;
    }
  }

  @media only screen and (max-width: 1199px) {
    width: 100%;

    iframe {
      height: 550px;
    }
  }

  @media only screen and (max-width: 499px) { 
  margin-top: 25px; 
  iframe {
      height: 300px;
    }
  }
`;

// banner 2nd sec--------------------------//

const BannerMainInner2 = styled.div`
  position: relative;

  .abs_black_dressed_girl {
    position: absolute;
    left: -10px;
    bottom: -180px;
    width: 750px;
  }

  @media only screen and (max-width: 1599px) {
    .abs_black_dressed_girl {
      left: -70px;
    }
  }

  @media only screen and (max-width: 1399px) {
   .abs_black_dressed_girl {
    
    left: 40px;
    bottom: -50px;
    width: 379px;
  }

  @media only screen and (max-width: 1199px) {
    .abs_black_dressed_girl {
      display: none;
    }
  }
`;
const Banner2ndSec = styled.div`
  background: url(/image/left_boder.webp), url(/image/top_border.webp),
    url(/image/right_border.webp), url(/image/bottom_border.webp);
  background-size: auto auto, 100% auto, 15px 100%, auto auto;
  background-repeat: no-repeat;
  background-position: left top, top center, center right, bottom right;
  padding: 15px;
  position: relative;

  .founder_btn{ position:absolute;
    left:0;
    bottom:0;
    z-index:99;
  
  }

  .red_btn{
  background: linear-gradient(180deg,rgba(250, 64, 98, 1) 0%, rgba(250, 34, 73, 1) 100%);
    color: #FFFFFF;
    padding: 15px 20px;
    font-size:48px;
    line-height:54px;
    font-weight: 800;
    text-transform: uppercase;
    border-radius: 8px;
    width:fit-content;
  }

@media only screen and (max-width: 1799px) {
   .founder_btn{
   font-size:30px;
    line-height:36px;
    bottom:35px;
     left: 30px;
   }
  }

  @media only screen and (max-width: 1399px) {
   .founder_btn {
        font-size: 18px;
        line-height: 26px;
        padding: 15px 20px;
        bottom:0
        }
  
  }

  @media only screen and (max-width: 1199px) {
    background: none;
    border: 10px solid #fd5372;
    border-radius: 12px;

     .founder_btn{
   font-size:26px;
    line-height:32px;
    bottom:0;
    margin:25px auto;
    position:relative;
    display:block;
    left:0;
   }
  }

   @media only screen and (max-width: 768px){
   
   .founder_btn{
   font-size:22px;
    line-height:28px;}
   
   }

    @media only screen and (max-width: 499px){
   
   .founder_btn{
   font-size:16px;
    line-height:22px; margin-bottom:12px;}
   
   }
`;

const Bnnr2ndTopTxtSec = styled.div`
  position: relative;
  padding-left: 230px;
  padding-top: 20px;
  margin-bottom: 30px;
  padding-right: 20px;


  .abs_diamond_img {
    position: absolute;
    left: 20px;
    top: 30px;
  }

  h1 {
    font-size: 60px;
    line-height: 66px;
    color: #9966cc;
    font-weight: 700;
  }
  h5 {
    font-size: 36px;
    line-height: 42px;
    color: #000;
    font-weight: 500;
    margin-bottom: 0;
  }

 @media only screen and (max-width: 1699px){
  h1 {
    font-size: 55px;
    line-height: 61px;
    }
 
 }

 

  @media only screen and (max-width: 1599px) {
    h1 {
      font-size: 50px;
      line-height: 56px;
    }

    h5 {
      font-size: 34px;
      line-height: 40px;
    }
  }

  @media only screen and (max-width: 1399px) {
   
      padding-left: 150px;
      margin-bottom: 15px;

    h1 {
              font-size: 35px;
        line-height: 42px;
                margin-bottom: 10px;
    }

    h5 {
              font-size: 22px;
        line-height: 28px;
    }

  .abs_diamond_img {
   
    left: 20px;
    top: 30px;
    width: 110px;
}
  }

  @media only screen and (max-width: 768px){
  .abs_diamond_img {
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
  }
    padding-left:0px; 
     padding-top: 125px;
         padding-right: 0px;

    h1 {
        font-size: 34px;
        line-height: 40px;
    }

    // h5 {
    //     font-size: 26px;
    //     line-height: 32px;
    // }
  }

   @media only screen and (max-width: 499px){

   margin-bottom: 20px; text-align: center;
   
   h1 {
        font-size: 28px;
        line-height: 34px;
    }

    h5 {
        font-size: 20px;
        line-height: 26px;
    }
   }
`;

const Bnnr2ndLftPaddSec = styled.div`
  padding-left: 720px;
  padding-right: 20px;

  .second_lft_padd_inn h3 {
    font-size: 48px;
    line-height: 54px;
    color: #262727;
    font-weight: 800;
    margin-bottom: 60px;
  }
  .second_lft_padd_inn .txt_icon_sec p {
    font-size: 30px;
    line-height: 36px;
    color: #262727;
    font-weight: 400;
    position: relative;
    padding-left: 95px;
    margin-bottom: 60px;
  }
  .second_lft_padd_inn .txt_icon_sec p img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }

  .second_lft_padd_inn .txt_icon_sec p:nth-of-type(2) img {
    left: 10px;
  }

  @media only screen and (max-width: 1599px) {
    padding-left: 605px;

    .second_lft_padd_inn h3 {
      font-size: 42px;
      line-height: 49px;
    }

    .second_lft_padd_inn .txt_icon_sec p {
      font-size: 26px;
      line-height: 32px;
    }
  }

  @media only screen and (max-width: 1399px) {
     padding-left: 440px;

    .second_lft_padd_inn h3 {
        font-size: 32px;
        line-height: 38px;
        margin-bottom: 25px;
    }

    .second_lft_padd_inn .txt_icon_sec p {
        font-size: 22px;
        line-height: 28px;
        padding-left: 50px;
        margin-bottom: 28px;
    }

    .second_lft_padd_inn .txt_icon_sec p img {
      width: 35px;
    }

 .second_lft_padd_inn .txt_icon_sec p:nth-of-type(1) img {
    
    width: 35px;
}

    .second_lft_padd_inn .txt_icon_sec p:nth-of-type(2) img {
    left: 4px;
    width: 30px;
}


  }

  @media only screen and (max-width: 1199px) {
    padding-left: 0px;
    padding-right: 0px;

    // .second_lft_padd_inn h3 {
    //   margin-bottom: 40px;
    // }

    .second_lft_padd_inn .txt_icon_sec p:nth-last-of-type(1) {
      margin-bottom: 20px;
    }
  }

    @media only screen and (max-width: 768px){
   
    //  .second_lft_padd_inn h3 {
    //     font-size: 34px;
    //     line-height: 40px;
    //     margin-bottom: 30px;
    //  }

    // .second_lft_padd_inn .txt_icon_sec p {
    //     font-size: 24px;
    //     line-height: 30px;
    //      margin-bottom: 40px;
    //          padding-left: 65px;
    // }

  // .second_lft_padd_inn .txt_icon_sec p img {
   
  //   top: 5px;
  //   transform: unset;
  //   width: 42px;
  //   }

    // .second_lft_padd_inn .txt_icon_sec p:nth-of-type(2) img {
    //     left: 0px;
    // }
}

@media only screen and (max-width: 499px){

.second_lft_padd_inn h3 {
        font-size: 25px;
        line-height: 31px;
        margin-bottom: 20px;
        text-align: center;
     }

     .second_lft_padd_inn .txt_icon_sec p {
                 font-size: 18px;
        line-height: 24px;
        margin-bottom: 20px;
    }

    
}
`;
