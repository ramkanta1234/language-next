import { Button } from '@mui/material'
import React, { forwardRef } from 'react'
import styled from 'styled-components'

const SCblock3Sec = forwardRef<HTMLDivElement>((props, ref) => {

  const handleScrollToForm = () => {
    if (ref && typeof ref !== 'function' && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <ScBlock3Main>
       
        <CommonWidth>
     
        <ScBlock3Innr>

            <TopHeader>
                <h1>Break Free from the 
                Monthly Sub Trap</h1>
            </TopHeader>

            <TxtMddlSec>
              <h5>
              You’ve been working hard to build monthly 
              subscribers. But if you're stuck on a platform that:
              </h5>

              <div className='bull_sec'>
                <p>Takes a huge cut of your income</p>
                <p>Owns your content the moment you upload</p>
                <p>Doesn’t let you earn past the paywall</p>
              </div>

              <h6>…it’s time to level up.</h6>

              <h6 className='color_txt'>With SociClip, you:</h6>

              <div className='bull_sec2'>
                <p>Keep ownership and control of your content</p>
                <p>Sell individual pieces of your timeline as NFTs</p>
                <p>Create a collector economy around your brand</p>
                <p>Earn more per fan—no monthly ceiling, no cut-throat fees</p>
              </div>
             
            </TxtMddlSec>
            
            <TxtBtmSec>
               <p>“Imagine selling the hottest 15 seconds from your live last night—and doing it on your terms. <span>That’s SociClip.”</span></p>
            </TxtBtmSec> 
            
            <Button onClick={handleScrollToForm} className="founder_btn red_btn">Become A Founder Now</Button>

        </ScBlock3Innr>

        </CommonWidth>
      
    </ScBlock3Main>
  )
})

export default SCblock3Sec


const ScBlock3Main = styled.div`
background: url(/image/sc_block3_bg_girl.webp), #000;
  background-repeat:no-repeat;
  background-position: top right;
  background-size: auto 100%, cover;
  padding:60px 0;


  @media only screen and (max-width:1366px){
      background-position: top right -120px;
      padding:40px 0;
  }


  @media only screen and (max-width:1199px){
    background-position: bottom center;
    background-size: 100%, cover;
     padding:30px 0;
 }

   @media only screen and (max-width: 499px){
        padding: 20px 0;
    }
`

const CommonWidth = styled.div`
  width: 1700px;
  margin: 0 auto;
  max-width:96%;
 
  @media only screen and (max-width:768px){
  max-width:94%;
  }
`;


const ScBlock3Innr = styled.div`
 padding-right: 51%;
 position:relative;
 padding-bottom: 3.5%;

  .founder_btn{ position:absolute;
    right:0;
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

  @media only screen and (max-width:1699px){
  .red_btn {
  
    font-size: 34px;
    line-height: 40px;}
  }


  @media only screen and (max-width:1199px){
    padding-right: 0;
    padding-bottom: 100%;

     .founder_btn{ 
     position:relative; 
      font-size: 32px;
      line-height: 38px;
      margin:0 auto;
     margin-top:25px; margin-bottom:25px;
     display:block;
  }
 }

  @media only screen and (max-width:768px){
  .founder_btn{ 
    
      font-size: 26px;
      line-height: 32px;
     
  }
  
  }

  @media only screen and (max-width:499px){

  padding-bottom: 96%;

  .founder_btn{ 
    
      font-size: 18px;
      line-height: 24px;
     
  }
  
  }
`

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

@media only screen and (max-width:1599px){
  h1{
      font-size: 50px;
      line-height: 56px;
      }
  }

  @media only screen and (max-width:1366px){
    h1{
      font-size: 42px;
      line-height: 48px;
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

`

const TxtMddlSec = styled.div`
 h5{font-size: 30px;
    line-height: 36px;
    color: #fb4163;
    font-weight: 600;
    margin-bottom:35px;
    }


 .bull_sec p{
    font-size: 30px;
    line-height: 36px;
    color: #949697;
    font-weight: 400;
    position:relative;
    padding-left:40px;
 }

  .bull_sec p::before{
    content: "";
    position: absolute;
    background: url(/image/violet_bull.webp);
    background-size:100% 100%;
    width: 28px;
    height: 25px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-size: 100% 100%;
  }

  h6{
   font-size: 30px;
    line-height: 36px;
    color: #9966cc;
    font-weight: 400;
    position:relative;
    padding-left:35px;
    margin-bottom:50px;
  }
    h6.color_txt{
    color:#fb4163;font-weight: 600; margin-bottom:25px;padding-left:0px;
    }

    .bull_sec2 p{
    font-size: 30px;
    line-height: 36px;
    color: #949697;
    font-weight: 400;
    position:relative;
    padding-left: 58px;
    margin-bottom:20px;
 }
  

    .bull_sec2 p::before{
    content: "";
    position: absolute;

    background-size:100% 100%;
    background-repeat:no-repeat;
    width: 50px;
    height: 50px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    
}

 .bull_sec2 p:nth-of-type(1)::before{
  
    background-image: url(/image/bull_sec2_b4_img1.webp);
    width: 36px;
    height: 36px;
   
}

 .bull_sec2 p:nth-of-type(2)::before{
  
    background-image: url(/image/bull_sec2_b4_img2.webp);
    width: 36px;
    height: 40px;
   
}

 .bull_sec2 p:nth-of-type(3)::before{
  
    background-image: url(/image/bull_sec2_b4_img3.webp);
    width: 36px;
    height: 36px;
   
}

 .bull_sec2 p:nth-of-type(4)::before{
  
   background-image: url(/image/bull_sec2_b4_img4.webp);
    width: 40px;
    height: 40px;
}
   
@media only screen and (max-width:1599px){
  h5,h6,.bull_sec2 p,.bull_sec p{
      font-size: 26px;
      line-height: 32px;
      }
  }

@media only screen and (max-width:1399px){
 h5{margin-bottom: 25px;}
}

  @media only screen and (max-width:1299px){
    h5,h6,.bull_sec2 p,.bull_sec p{
      font-size: 24px;
      line-height: 30px;
      }
  }

   @media only screen and (max-width:499px){
    h5,h6,.bull_sec2 p,.bull_sec p{
      font-size: 20px;
      line-height: 26px;
      }
   .bull_sec2 p{
   padding-left:53px;
}
   h5,h6{
      margin-bottom:25px;  text-align:center; padding-left:0;}

  .bull_sec p{
          padding-left: 35px;
      }

  .bull_sec p::before {
    width: 24px;
    height: 21px;
    }
  }

`

const TxtBtmSec = styled.div`

margin-top:30px;

p { font-size: 30px;
    line-height: 36px;
    color: #949597;
    font-weight: 400;
    font-style:italic;
    position:relative;
    padding-left:70px;
}
p span{
 color:#9966cc; font-weight:700;font-style:normal;
}

p::before{
 content: "";
    position: absolute;
    background: url(/image/msg_icon_sc.webp);
    background-size:100% 100%;
    background-repeat:no-repeat;
    width: 59px;
    height: 59px;
    top: 5px;
    left: 0;
    
}

@media only screen and (max-width:1599px){
  p { font-size: 26px;
    line-height: 32px;
      }

  p::before {
    width: 50px;
    height: 50px;}
  }

  @media only screen and (max-width:768px){
  
  p { font-size: 22px;
    line-height: 28px;
      }

      p::before {
    width: 46px;
    height: 46px;}
  
  }

  @media only screen and (max-width:499px){

  p { padding-left: 54px;}
  p { font-size: 20px;
    line-height: 26px;
      }
  
  p::before {
        width: 35px;
        height: 35px;
    }
}
    

`