'use client';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import BannerSec from '@/components/bannerSec/page';
import WhoIsItSec from '@/components/whoISitFor/page';
import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BeTheFirstInSC from '@/components/beTheFirstinSC/page';
import SCblock3Sec from '@/components/scLpBlock3Sec/page';
import FutureOfMonetization from '@/components/futureOfMonetizationBlock/page';
import GetInBeforeTheMassesBlock from '@/components/beforeTheMassesBlock/page';
import SummerContent from '@/components/SummerContentBlock/page';
import Footer from '@/components/footer/page';



const LandingPage = ({campaignDetails}: any) => {
    const formRef = useRef(null);

    return (
        <>
         <IconButton
         onClick={() => window.scrollTo(0, 0)}
         sx={{
            backgroundColor: '#fe4264',
            color: '#fff',
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex:'999',
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            border:'1px solid #fff',
            '&:hover': {
                backgroundColor: 'mediumslateblue',
            },
        }}>
            <KeyboardArrowUpIcon />
        </IconButton>
          <BannerSec ref={formRef}/>
          <WhoIsItSec/>
          <BeTheFirstInSC campaignDetails={campaignDetails} ref={formRef}/>
          <SCblock3Sec ref={formRef}/>
         
          <FutureOfMonetization ref={formRef}/>

           <GetInBeforeTheMassesBlock/>
           <SummerContent ref={formRef}/>
          <Footer/>
        </>
       
       
    );
};

export default LandingPage;

