import React from 'react'
import styled from 'styled-components'

const GetInBeforeTheMassesBlock = () => {
  return (
    <BeforeTheMassesSecMain>
      <CommonWidth>
        <BeforeTheMassesInnr>
            <TopHeader>
                <h1>Get In Before the Masses</h1>
            </TopHeader>

            <TxtMddlSec>
              <h5 className='font30'>
              We’re opening the gates to <span>just 5,000 founding 
              creators</span> ahead of our October launch.
              </h5>

             

              <h6 className='font30'>If you’re accepted, you’ll receive:</h6>

             

              <div className='bull_sec2 font30'>
                <p>Early access to the platform</p>
                <p>Premium positioning in our featured marketplace</p>
                <p>Founding Creator badge for lifetime status</p>
                <p>Exclusive perks including feature priority, promo boosts, and early monetization tools</p>
              </div>
             
            </TxtMddlSec>

            <TxtBtmSec>
               <p className='font30'>Once 5,000 spots are filled, enrollment closes 
               until post-launch.</p>
            </TxtBtmSec>
        </BeforeTheMassesInnr>
      </CommonWidth>
    </BeforeTheMassesSecMain>
  )
}

export default GetInBeforeTheMassesBlock


const BeforeTheMassesSecMain = styled.div`
background: url(/image/beforethemasses_girl_new.webp), url(/image/beforethemasses_bg_new.webp),#fff;
  background-repeat:no-repeat;
  background-position: bottom -75px right 270px, top center;
  background-size: auto, cover;
  padding:60px 0;

 @media only screen and (max-width:1599px){
    background-position: bottom -105px right 117px, top center;
}

@media only screen and (max-width:1366px){
   background-position: bottom -136px right -3px, top center;
}

 @media only screen and (max-width:1199px){
  background-position: bottom 0px center, top left;
  background-size: 65%, cover;
      padding: 30px 0;
 }

   @media only screen and (max-width: 499px){
        padding: 20px 0;
         background-size: 50%, cover;
    }

`

const CommonWidth = styled.div`
  width: 1700px;
  margin: 0 auto;
  max-width:96%;
 
  @media only screen and (max-width:768px){
   max-width: 94%;
  }
`;

const BeforeTheMassesInnr = styled.div`
  padding-right:800px;


  @media only screen and (max-width:1599px){
     padding-right: 656px;
}

 @media only screen and (max-width:1366px){
     padding-right: 546px;
}


 @media only screen and (max-width:1199px){
     padding-right: 0; padding-bottom: 86%;
 }

  @media only screen and (max-width:499px){
      padding-bottom: 65%;
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



@media only screen and (max-width:1366px){
  h1{
    font-size: 42px;
    line-height: 48px;
    }
}

@media only screen and (max-width:768px){
h1 {
        font-size: 32px;
        line-height: 38px;
    }
}

@media only screen and (max-width:499px){
h1 {
        font-size: 26px;
        line-height: 32px;
        margin-bottom: 12px;
         text-align:center;
    }
}
   
`

const TxtMddlSec = styled.div`

.font30{
    font-size: 30px;
    line-height: 36px;
    
}

 h5{
    color: #383838;
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
   
    color: #252525;
    font-weight: 400;
    position:relative;
    padding-left:60px;
    margin-bottom:20px;
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
  
    background-image: url(/image/mass_icon_1.webp);
   width: 40px;
    height: 40px;
}

 .bull_sec2 p:nth-of-type(2)::before{
  
    background-image: url(/image/mass_icon_2.webp);
   width: 43px;
    height: 39px;
}

 .bull_sec2 p:nth-of-type(3)::before{
  
    background-image: url(/image/mass_icon_3.webp);
   width: 34px;
    height: 32px;
}

 .bull_sec2 p:nth-of-type(4)::before{
  
   background-image: url(/image/mass_icon_4.webp);
   width: 43px;
    height: 42px;
}

@media only screen and (max-width:1599px){
.font30{
    font-size: 26px;
    line-height: 32px;
   
}
}

@media only screen and (max-width:1366px){
.font30{
    font-size: 25px;
    line-height: 31px;
   
}
    h6{
    margin-bottom:30px;
    }
}

@media only screen and (max-width:768px){
.font30 {
        font-size: 23px;
        line-height: 31px;
    }

     h6{
    margin-bottom:20px;
    }

    h5{margin-bottom:20px;}
}


   @media only screen and (max-width:499px){
   .font30 {
        font-size: 18px;
        line-height: 24px;
    }
    .bull_sec2 p{padding-left:40px; margin-bottom: 15px;}

    .bull_sec2 p:nth-of-type(1)::before{
  
    background-image: url(/image/mass_icon_1.webp);
   width: 30px;
    height: 30px;
}

 .bull_sec2 p:nth-of-type(2)::before{
  
    background-image: url(/image/mass_icon_2.webp);
    width: 30px;
    height: 26px; 
    top: 5px;
}

 .bull_sec2 p:nth-of-type(3)::before{
  
    background-image: url(/image/mass_icon_3.webp);
   width: 30px;
    height: 28px;
}

 .bull_sec2 p:nth-of-type(4)::before{
  
   background-image: url(/image/mass_icon_4.webp);
   width: 30px;
    height: 29px;
}

 h6,h5{
    margin-bottom:15px; text-align:center;
    }
   }
`

const TxtBtmSec = styled.div`

margin-top:30px;

p { font-size: 30px;
    line-height: 36px;
    color: #272728;
    font-weight: 400;
    font-style:italic;
    position:relative;
    padding-left:62px;
}
p span{
 color:#9966cc; font-weight:700;font-style:normal;
}

p::before{
 content: "";
    position: absolute;
    background: url(/image/post_icon.webp);
    background-size:contain;
    background-repeat:no-repeat;
    width: 48px;
    height: 53px;
    top: 5px;
    left: 0;
    
}

@media only screen and (max-width:1366px){
p { font-size: 26px;
    line-height: 32px;
}
}
@media only screen and (max-width:768px){
p {         font-size: 20px;
        line-height: 27px;
        padding-left:50px;
}

 p::before {
    width: 38px;
    height: 43px;}
}

@media only screen and (max-width:499px){

  margin-top: 20px;

p {         font-size: 18px;
        line-height: 24px;
        padding-left: 38px;
}
       

 p::before {
            width: 30px;
            height: 32px;
        }


  


         }
`