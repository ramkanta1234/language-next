import React from "react";
import styled from "styled-components";

const CoreConceptSec = () => {
  return (
    <>
      <CoreConceptSection>
        <SectionTitle>Welcome to the Future of Social Video</SectionTitle>

        <SectionDesc >
          SociClip is revolutionizing creator-fan engagement by merging a dynamic social video feed with seamless NFT creation and trading.
        </SectionDesc>
        
        {/* <Vdocontnr>
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/NNQLJcJEzv0"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Vdocontnr> */}

        
       
        <Features >
          <Feature className="feature">
            <Icon >▶️</Icon>
            <FeatureHdr>Showcase Your Talent:</FeatureHdr>
            <FeatureDesc>
            Share exclusive video clips and let your audience discover the moments that define your unique style.
            </FeatureDesc>
          </Feature>
          <Feature className="feature">
            <Icon >💎</Icon>
            <FeatureHdr>Create Digital Value:</FeatureHdr>
            <FeatureDesc>
            Effortlessly convert your standout video moments into unique NFTs, offering true ownership to your supporters.
            </FeatureDesc>
          </Feature>
          <Feature className="feature">
            <Icon >🤝</Icon>
            <FeatureHdr>Build Your Community:</FeatureHdr>
            <FeatureDesc>
            Engage directly with dedicated collectors and fellow creators in a vibrant, supportive ecosystem designed for connection.

            </FeatureDesc>
          </Feature>
          <Feature className="feature">
            <Icon >💰</Icon>
            <FeatureHdr>Unlock New Revenue Streams:</FeatureHdr>
            <FeatureDesc>
            Monetize your content directly as fans invest in your most valuable moments, turning views into verifiable digital.
            </FeatureDesc>
          </Feature>
        </Features>
        
      </CoreConceptSection>
    </>
  );
};

export default CoreConceptSec;

const CoreConceptSection = styled.section`
  padding: 2rem;
 
  text-align: center;

  @media(max-width:499px){
    padding: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 0.5rem;


 @media(max-width:499px){
   font-size: 25px;
   line-height: 2rem;
  }

`;

const SectionDesc = styled.h3`
  font-size: 20px;
  margin-bottom: 1.5rem;


  @media(max-width:499px){
   font-size: 18px;
   line-height: 1.5rem;
  }
`;

const Features = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

 
`

const Feature = styled.div`
    background: #f0f8ff;
    padding: 15px;
    border-radius: 10px;
    width: calc(49% - 15px);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-bottom: 30px;

 @media(max-width:768px){
 
    width: calc(100%);
    
    & > *:last-child {
      margin-bottom: 0; /* Still remove margin on last child */
    }
  }

  @media(max-width:499px){
  margin-bottom:20px
  }

`



const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #40E0D0;
`;

const FeatureHdr = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  

`

const FeatureDesc = styled.div`
    font-size: 1rem;
  
`

const ConceptGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Vdocontnr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;

  iframe {
    border-radius: 6px; /* Example: Rounded corners */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Example: Shadow */
    max-width: 100%; /* Responsive */
    width: 640px;
    height: 360px;
    border: 12px solid #c3c3c3;
  }
`;

const ConceptCard = styled.div`

  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// const Icon = styled.div`
//   font-size: 2rem;
//   margin-bottom: 1rem;
// `;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

`;

const CardDescription = styled.p`
  font-size: 1rem;
 
`;
