import { Button } from '@mui/material';
import React, { forwardRef } from 'react'
import styled from 'styled-components';

const SummerContent = forwardRef<HTMLDivElement>((props, ref) => {

    const handleScrollToForm = () => {
      if (ref && typeof ref !== 'function' && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    return (
        <>
            <SummerContentMainWrp>
                <CommonWidth>
                    <SummerContentMainSubWrp>
                        <Heading>
                            <h2>Summer Content Parties & Creator Training</h2>
                        </Heading>

                        <SectionBox>
                            <h6>Get ready to kickstart your SociClip journey in style.</h6>
                            <p>This summer and leading into our official launch, we're hosting exclusive SociClip Content Parties—invite-only events for founders designed to empower our early creators with
                                everything they need to succeed. These gatherings are more than just social; they’re production powerhouses.
                            </p>

                            <h6>At each event, you'll have the opportunity to:</h6>

                            <h5><span>Shoot high-quality, professional video content </span> with on-site crews, lighting, and editing support—perfect for your first NFT clips.</h5>

                            <h5><span>Learn how to follow and set content trends,</span> boosting the visibility of your posts across platforms like Instagram, TikTok, and X.</h5>

                            <h5><span>Receive hands-on training in short-form storytelling and social engagement,</span> so your clips not only get views—but convert.</h5>


                            <p>Your content is yours to monetize, and we’re here to help you
                                launch your brand with real momentum. These parties are
                                just one more way we’re making sure our creators stand out
                                in the SociClip marketplace—where every clip has the
                                potential to become a collectible.</p>

                            <h4>Want to be part of this? Get on the early access list now by
                                registering now as a founder!—space is limited.
                            </h4>

                        </SectionBox>

                        <Button onClick={handleScrollToForm} className="founder_btn red_btn">Become A Founder Now</Button>


                    </SummerContentMainSubWrp>
                </CommonWidth>
            </SummerContentMainWrp>


        </>
    )
})

export default SummerContent;


const SummerContentMainWrp = styled.div`
 background: url(/image/lastBlockLadyImg.webp),#000;
  background-repeat:no-repeat;
     background-position: top 0px left 0px, center;
    background-size: auto 100%, cover;
    padding: 50px 0;


    @media only screen and (max-width:1720px){
        background-position: top 0px left -80px, center;
}
        @media only screen and (max-width:1399px){
        background-size: auto 88%, cover;
         padding: 40px 0;
        }
        @media only screen and (max-width:1280px){
          background-size: auto 100%, cover;
          background-position: top 0px left -8px, center;
         }

        @media only screen and (max-width:1199px){
          background-size:70%, cover;
          background-position: bottom center, center;
              padding: 30px 0;
         }
   
        @media only screen and (max-width:499px){
         padding: 20px 0;         background-size: 56%, cover;
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

const SummerContentMainSubWrp = styled.div`
padding-left:50%;
 position:relative;

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
        cursor: pointer;
  }
         @media only screen and (max-width:1599px){
             padding-left: 40%;
         .red_btn{
         
             font-size: 35px;
    line-height: 48px;
         }

         
         }

          @media only screen and (max-width:1399px){
                  padding-left: 45%;

          }
                    @media only screen and (max-width:1280px){
                      .red_btn{
         
             font-size: 24px;
    line-height: 24px;
         }
                    }

      @media only screen and (max-width:1199px){
        padding-left: 0; padding-bottom:90%;

        .founder_btn{ position:relative; display:block; margin:30px auto ;}
      }  
        
      @media only screen and (max-width:499px){
         padding-bottom: 72%;
       .red_btn{ font-size: 18px;
        line-height: 24px;
         }
      }

`;
const Heading = styled.div`
h2{
 font-size: 60px;
    line-height: 66px;
    color: #9966cc;
    font-weight: 800;
    text-transform:uppercase;
}
        @media only screen and (max-width:1720px){
        h2{    font-size: 55px;
    line-height: 61px;}
        }
    @media only screen and (max-width:1599px){
        h2{    font-size: 50px;
    line-height: 56px;}
        }
     @media only screen and (max-width:1399px){
              h2{font-size: 45px;
        line-height: 51px;}
     }

      @media only screen and (max-width:1280px){
      h2{
       font-size: 35px;
        line-height: 41px;
      }
      }

       @media only screen and (max-width:768px){
      h2{
       font-size: 30px;
        line-height: 36px;
      }
      }
@media only screen and (max-width:499px){
h2 {
        font-size: 26px;
        line-height: 34px; text-align:center;
    }
}
 
            
`;

const SectionBox = styled.div`
h6{
font-size: 30px;
    line-height: 36px;
    color: #fb4163;
    font-weight: 500;
   
}
p{font-size: 30px;
    line-height: 36px;
    color: #949697;
    font-weight: 400;margin-bottom: 20px;}  
h5{font-size: 30px;
    line-height: 36px;
    color: #949697;
    font-weight: 400;margin-bottom: 15px;position: relative;    margin-left: 50px;} 
h5 span{color:#9966cc;}  
h5::before{  content: "";
    position: absolute;
    background: url(/image/last_block_red_arrow_bullet.png);
    background-size: 100% 100%;
    width: 28px;
    height: 25px;
    top: 8px;
    left: -50px;
   
    background-size: 100% 100%;}   

h4{    font-size: 30px;
    line-height: 36px;
    color: #949597;
    font-weight: 400;
    font-style: italic;
    position: relative;
    padding-left: 70px;}    
h4::before{
    content: "";
    position: absolute;
    background: url(/image/last_block_light_before_img.webp);
    background-size:100% 100%;
    background-repeat: no-repeat;
    width: 44px;
    height: 67px;
    top: 5px;
    left: 0;
}    

 @media only screen and (max-width:1599px){
 h6{

     font-size: 25px;
    line-height: 31px;
 }

 p{
   font-size: 25px;
    line-height: 31px;
 }

 h5{
  font-size: 25px;
    line-height: 31px;
 }

 h4{
  font-size: 25px;
    line-height: 31px;
 }
 }


  @media only screen and (max-width:1280px){
  h6{

     font-size: 18px;
    line-height: 24px;
 }

 p{
    font-size: 18px;
    line-height: 24px;
 }

 h5{
   font-size: 18px;
    line-height: 24px;
 }

 h4{
    font-size: 18px;
    line-height: 24px;
    padding-left:40px;
 }

 h4::before{
 top: -8px;    width: 28px;
    height: 44px;
 }

 h5::before {
    top: 3px;
    left: -35px;
    width: 23px;
    height: 20px;
    }
  }

    @media only screen and (max-width:1199px){
    h5 {margin-left: 35px;}
    }

    @media only screen and (max-width:499px){
     h6,p{text-align:center;}
}

`;



