'use client';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import BannerSec from '@/components/bannerSec/page';
import WhoIsItSec from '@/components/whoISitFor/page';



const LandingPage = ({campaignDetails}: any) => {
    const formRef = useRef(null);

    return (
        <>
        
        
          <BannerSec ref={formRef}/>
          <WhoIsItSec/>
       
        </>
    );
};

export default LandingPage;

