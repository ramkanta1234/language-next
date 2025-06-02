"use client";
import React, { useCallback, useRef, useState } from 'react'


import CoreConceptSec from '@/components/coreConceptSec/page';
import PublicFeedSec from '@/components/publicFeedSec/page';




// import Header from '../../../components/Header/Header';

export default function Landingpage() {
  const [anchorEl, setAnchorEl] = useState(false);
  const mainDivRef = useRef<HTMLDivElement>(null);
  const mainDivRef1 = useRef<HTMLDivElement>(null);
  const mainDivRef2 = useRef<HTMLDivElement>(null);

  

  const handleScrollToTarget = useCallback(() => {
    if (mainDivRef.current) {
      mainDivRef.current.scrollIntoView({ behavior: "smooth",block:"center" });
      console.log("ref10===>",mainDivRef.current);
      setAnchorEl(false);
    }
   
  }, []); 

  const handleScrollToTargett = useCallback(() =>{
    if (mainDivRef1.current){
      mainDivRef1.current.scrollIntoView({ behavior: "smooth",block:"center" });
      console.log("ref11===>",mainDivRef1.current);
      setAnchorEl(false);
    }

  },[])

  const handleScrollButton = useCallback(() => {
    if (mainDivRef2.current) {
      mainDivRef2.current.scrollIntoView({ behavior: "smooth", block:"center" });
      console.log("ref10===>",mainDivRef2.current);

    }
   
  }, []); 
  
    
return (
    <>
      <div>
    
        <CoreConceptSec/>
        {/* <PreEnrollmentForm/> */}
        
        
        {/* <PreEnrollmentForm mainDivRef2={mainDivRef2}/> */}
       
        
        <PublicFeedSec/>
      
        {/* <OwnTheMoment/> */}
        {/* <FinalCTaSec/> */}
      
      </div>
    </>
  )
}
