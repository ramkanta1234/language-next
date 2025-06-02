import { Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const WhoIsItSec = () => {
  return (
    <>
      <Block2Sec>
       <CommonWidth>
        <Block2SecInn>

            <TopTxtSec>
            <Image
                className="comp_abs_img"
                src="/image/sc_lp_block2_comp_img.webp"
                width={132}
                height={150}
                alt="Image"
              />
                <h1>Who’s It For? <span>If you’re…</span></h1>
            </TopTxtSec>

            <Grid container spacing={3} className="flex_grid">
               <Grid size={{ xs: 12, sm:6,lg: 4 }} className="grid_item">
                <div className='img_txt_wrpr'>
                    <h2>A <span>model, influencer, or 
                    performer</span> with a loyal fan base</h2>
                    <div className='img_wrp'>
                        <Image src="/image/blk2_img1_sc.webp" width={714} height={525} alt='Image'/>
                    </div>
                </div>
               </Grid>

               <Grid size={{  xs: 12, sm:6, lg: 4  }} className="grid_item">
                <div className='img_txt_wrpr'>
                    <h2>A <span>musician or artist</span> sharing 
                    moments that matter</h2>
                    <div className='img_wrp'>
                        <Image src="/image/blk2_img2.webp" width={714} height={525} alt='Image'/>
                    </div>
                </div>
               </Grid>

               <Grid size={{  xs: 12,sm:6, lg: 4  }} className="grid_item">
                <div className='img_txt_wrpr'>
                    <h2>A <span>creator</span> building daily 
                    content and short-form videos</h2>
                    <div className='img_wrp'>
                        <Image src="/image/blk2_img3.webp" width={714} height={525} alt='Image'/>
                    </div>
                </div>
               </Grid>
           

            </Grid>

            <TextSecBottom>
               <h4> Then you’re exactly who we built SociClip for.</h4>
               <h3>Whether you go viral or keep it niche—<span>your fans will pay to own your best moments.</span></h3>
            </TextSecBottom>

        </Block2SecInn>
       </CommonWidth>
      </Block2Sec>
    </>
  )
}

export default WhoIsItSec


const Block2Sec = styled.div`
 padding:75px 0 35px;
 background: url(/image/SC_LP_block2_bg.webp);
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;

 @media only screen and (max-width:768px){
  padding: 35px 0;
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

const Block2SecInn = styled.div`
.flex_grid{margin-bottom:25px;justify-content:center;}
.flex_grid .grid_item .img_txt_wrpr{
 background: url(/image/grid_item_bg.webp);
  background-position: top center;
  background-size: cover;
  padding:18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border:1px solid #5a6091;
  border-radius: 12px;
}

.flex_grid .grid_item .img_txt_wrpr h2{
      font-size: 34px;
    line-height: 40px;
    color: #babdcb;
    font-weight: 800;
    margin-bottom:15px;
   
}
.flex_grid .grid_item .img_txt_wrpr h2 span{
  color:#fd5372; 
}

.flex_grid .grid_item .img_txt_wrpr .img_wrp{
height:340px; border:1px solid #5a6091;
}
.flex_grid .grid_item .img_txt_wrpr .img_wrp img{
height:100%;width:100%;object-fit:cover; object-position:top;
}

@media only screen and (max-width:1699px){
.flex_grid .grid_item .img_txt_wrpr h2 {
    font-size: 30px;
    line-height: 36px;}
}

@media only screen and (max-width:1440px){
.flex_grid .grid_item .img_txt_wrpr h2 {
    font-size: 26px;
    line-height: 32px;}
}

@media only screen and (max-width:768px){
.flex_grid .grid_item .img_txt_wrpr h2 {
        font-size: 24px;
        line-height: 30px;
    }
}

@media only screen and (max-width:499px){
.flex_grid .grid_item .img_txt_wrpr .img_wrp{
    height:270px;
}
.flex_grid .grid_item .img_txt_wrpr {
  padding:15px; text-align:center;
}
}


`

const TopTxtSec = styled.div`
position:relative; 
padding-left: 160px;
margin-bottom:75px;


img{position:absolute; left:0; top:50%; transform:translateY(-50%)}

h1{
    font-size: 60px;
    line-height: 66px;
    color: #c086fa;
    font-weight: 800;
}
h1 span{color:#fff;font-weight: 400;}

@media only screen and (max-width:1699px){

  padding-left: 125px;
h1{
    font-size: 50px;
    line-height: 56px;
    }

    img{
    width:100px;
}
}


   @media only screen and (max-width:1366px){
    h1 {
        font-size: 40px;
        line-height: 46px;
    }
    }
    
     @media only screen and (max-width:768px){
     
     padding-left: 80px;
     margin-bottom: 25px;
     img {
        width: 60px;
      }

      h1 {
        font-size: 32px;
        line-height: 38px;
       
    }
     }

     @media only screen and (max-width:499px){
             padding-left: 65px;
     img {
        width: 50px; top:55%;
      }
     }

    
    
`

const TextSecBottom = styled.div`

h4{
    font-size: 36px;
    line-height: 42px;
    color: #9966cc;
    font-weight: 600;
    margin-bottom:15px;
}

h3{
    font-size: 45px;
    line-height: 51px;
    color: #9966cc;
    font-weight: 400;
}
h3 span{
color:#fd5372;
}

@media only screen and (max-width:1599px){
.flex_grid .grid_item .img_txt_wrpr h2{
    font-size: 30px;
    line-height: 36px;
    }

    h3{
    font-size: 40px;
    line-height: 46px;
    }

}
@media only screen and (max-width:768px){
h4 {
    font-size: 30px;
    line-height: 36px;
    }

    h3 {
        font-size: 32px;
        line-height: 38px;
        margin-bottom: 0px;
    }
}

@media only screen and (max-width:499px){
h4 {
    font-size: 25px;
    line-height: 31px; text-align:center;
    }

    h3 {
        font-size: 24px;
        line-height: 30px; text-align:center;
    }
}

`