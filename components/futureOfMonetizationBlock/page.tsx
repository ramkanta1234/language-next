import { Button } from "@mui/material";
import React, { forwardRef } from "react";
import styled from "styled-components";

const FutureOfMonetization = forwardRef<HTMLDivElement>((props, ref) => {

  const handleScrollToForm = () => {
    if (ref && typeof ref !== 'function' && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <FutureOfMonetizationMain>
      <div className="border_top"></div>
      <CommonWidth>
        <FutureOfMonetizationInnr>
          <TopHeader>
            <h1>This Is the Future of 
            Monetization</h1>
          </TopHeader>

          <TxtMddlSec>
            <h5 className="font30">
            You’re not just a creator. You’re a brand. A movement. A magnet.It’s time your content worked for you, not the other way around.
            </h5>

            <h6 className="font30">Welcome to SociClip—where moments become 
            money, and creators own their power.</h6>

            <Button onClick={handleScrollToForm} className="founder_btn red_btn">Become A Founder Now</Button>
          </TxtMddlSec>

          <TxtBtmSec>
            <p className="font30">
              Limited to the First 5,000 Creators
            </p>
          </TxtBtmSec>
        </FutureOfMonetizationInnr>
      </CommonWidth>
    </FutureOfMonetizationMain>
  );
});

export default FutureOfMonetization;

const FutureOfMonetizationMain = styled.div`
  background: url(/image/light_colourful_bg_new.webp), url(/image/upper_layer_bg_new.webp), url(/image/FOMon_women_men_bg_new.webp), url(/image/futureofmonetization_main_bg.webp), #000;
  background-repeat:no-repeat;
  background-position:top left ,bottom left, bottom left, bottom left;
  background-size: auto 102%, 100% 100%, auto, cover;
  padding:85px 0;
  // border-top:1px solid #3a3a3a;
  position:relative;
 
  .border_top{background-color:#3a3a3a;height:1px;position:absolute;top:0;left:50%; transform:translate(-50%); width:1700px; max-width:96%;}

 @media only screen and (max-width:1740px){
 
     background-position: top left, bottom left, bottom left -70px, bottom left;
 }


@media only screen and (max-width:1599px){
   background-position: top left, bottom left, bottom left -90px, bottom right;
  }
  

  @media only screen and (max-width:1440px){
     background-position: top left, bottom left 0px, bottom left -158px, bottom right;
         padding: 80px 0;
  }

  @media only screen and (max-width:1299px){
    background-size: auto 100%, 100% 100%, 1100px, cover; padding: 60px 0;
  }


@media only screen and (max-width:1199px){
 background: url(/image/upper_layer_bg_new.webp), url(/image/FOMon_women_men_bg_new.webp), url(/image/futureofmonetization_main_bg.webp), #000;
  background-repeat:no-repeat;
 background-position:bottom right, bottom center, bottom right;
 background-size: 100% 100%, 100%, cover;
 padding: 30px 0;
   }

     @media only screen and (max-width: 499px){
        padding: 20px 0;
        background-position:bottom left -230px, bottom center, bottom right;
        background-size: auto 100%, 100%, cover;
    }
`;

const CommonWidth = styled.div`
  width: 1700px;
  margin: 0 auto;
  max-width: 96%;

  @media only screen and (max-width:768px){
   max-width: 94%;
  }
`;

const FutureOfMonetizationInnr = styled.div`
padding-left:895px;


  @media only screen and (max-width:1499px){
        padding-left: 840px;
    }

      @media only screen and (max-width:1440px){
       padding-left: 790px;         
    }

   @media only screen and (max-width:1299px){
     padding-left: 730px;
   }

@media only screen and (max-width:1199px){
 padding-left:0; padding-bottom:62%;
  }

`;


const TopHeader = styled.div`
  
h1{
    font-size: 60px;
    line-height: 66px;
    color: #9966cc;
    font-weight: 800;
    text-transform:uppercase;
}

@media only screen and (max-width:1699px){
h1{
    font-size: 50px;
    line-height: 56px;
    }
}

@media only screen and (max-width:1366px){
h1{
    font-size: 42px;
    line-height: 50px;
    }
}

@media only screen and (max-width:768px){
 h1 {
        font-size: 32px;
        line-height: 40px;
    }
}

@media only screen and (max-width:499px){
 h1 {
        font-size: 26px;
        line-height: 32px; text-align:center;
    }
}


`

const TxtMddlSec = styled.div`

width:90%;

.font30{
    font-size: 30px;
    line-height: 36px;
}

 h5{
    color: #949597;
    font-weight: 600;
    margin-bottom:25px;
    }

h5 span{
   color:#9966cc;
    }


  h6{
  
    color: #fb4163;
    font-weight: 600;
    
    margin-bottom:40px;
  }
    

    .bull_sec2 p{
   
    color: #949697;
    font-weight: 800;
    position:relative;
    padding-left:60px;
    margin-bottom:50px;
 }
  

    .bull_sec2 p::before{
    content: "";
    position: absolute;

    background-size:100% 100%;
    background-repeat:no-repeat;
    width: 50px;
    height: 50px;
    top: 0;
    left: 0;
 
    
}

 .bull_sec2 p:nth-of-type(1)::before{
  
    background-image: url(/image/waitlist_logo.webp);
   width: 40px;
    height: 40px;
}



 .founder_btn{ 
    
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
  .red_btn {
        font-size: 32px;
        line-height: 40px;
    }
}

@media only screen and (max-width:1599px){
.font30{
    font-size: 26px;
    line-height: 32px;
}
}
@media only screen and (max-width:1399px){
.red_btn {
        font-size: 26px;
        line-height: 34px;
    }

}
@media only screen and (max-width:1366px){
.font30{
    font-size: 24px;
    line-height: 31px;
}


}


@media only screen and (max-width:1280px){
.red_btn {
        font-size: 24px;
        line-height: 30px;
    }

}

@media only screen and (max-width:1199px){
width:100%;

}


@media only screen and (max-width:499px){
.font30{
    font-size: 20px;
    line-height: 26px;
     text-align:center;
}
    .bull_sec2 p{
    margin-bottom:30px
    }

    h5, h6{
    margin-bottom:20px;
  }
    .red_btn {
        font-size: 18px;
        line-height: 24px;
    }

    .founder_btn{
  display:block; margin:0 auto;
}
}

   
`

const TxtBtmSec = styled.div`

margin-top:50px;

p { font-size: 30px;
    line-height: 36px;
    color: #949597;
    font-weight: 400;
    font-style:italic;
    position:relative;
    padding-left:80px;
}
p span{
 color:#9966cc; font-weight:700;font-style:normal;
}

p::before{
 content: "";
    position: absolute;
    background: url(/image/creators_logo.webp);
    background-size:contain;
    background-repeat:no-repeat;
    width: 68px;
    height: 62px;
    top: 50%;
    left: 0;
    transform:translateY(-50%);
    
}

@media only screen and (max-width:1366px){
p { font-size: 26px;
    line-height: 33px;
}
}
@media only screen and (max-width:768px){
p { font-size: 22px;
    line-height: 28px;
    padding-left: 70px;
}

p::before {
   
    width: 58px;
    height: 52px;}
}

@media only screen and (max-width:499px){
  margin-top:20px;

  p { font-size: 18px;
        line-height: 26px;
        padding-left: 52px;width:fit-content; margin:0 auto 15px;}

    p::before {
            width: 40px;
            height: 40px;
        }
}

`