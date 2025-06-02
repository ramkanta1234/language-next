import React, { useState } from "react";
import styled from "styled-components";

const PublicFeedSec = () => {
  // State to track the currently active video index
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  // YouTube video data with IDs, titles, and creator names
  const videoData = [
    {
      id: "qrjEsmLf_HY",
      title: "AI Generated Social Media Videos to SELL ANYTHING",
      creator: "@traveler123"
    },
    {
      id: "VvCOOX-dSHA",
      title: "NFT offers on Instagram | Should I sell my art as NFT?",
      creator: "@techguru"
    },
    {
      id: "ztVI62o9_1k",
      title: "What Surprised Me About NFT Art?",
      creator: "@chefmaster"
    },
    {
      id: "653P6Tw_yNY",
      title: "Where Can You Find NFT Communities?",
      creator: "@gamerpro"
    },
    {
      id: "Z1edvos_nnc",
      title: "How to create a social media strategy for ANY brand",
      creator: "@fitnessguru"
    },
    {
      id: "JDyEixjHyxo",
      title: "Create NFT's and collect royalties on Social NFT marketplace",
      creator: "@musicartist"
    }
  ];

  // Function to handle clicking on a video thumbnail
  const handleVideoClick = (index:any) => {
    setActiveVideoIndex(index);
  };

  return (
    <>
      <PublicFeedSection>
        <SectionTitle>Explore the Feed</SectionTitle>
        <FeedGrid>
          {videoData.map((video, index) => (
            <FeedItem key={index}>
              <Thumbnail onClick={() => handleVideoClick(index)}>
                {activeVideoIndex === index ? (
                  <iframe 
                    width="560" 
                    height="315" 
                    src={`https://www.youtube.com/embed/${video.id}?si=Dyq5DKfDBCe1PDom&autoplay=1`}
                    title="YouTube video player"  
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  ></iframe>
                ) : (
                  <ThumbnailOverlay>
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/0.jpg`} 
                      alt="Video thumbnail" 
                    />
                    <PlayButton>▶</PlayButton>
                  </ThumbnailOverlay>
                )}
              </Thumbnail>
              <FeedDetails>
                <VideoTitle>{video.title}</VideoTitle>
                <CreatorName>{video.creator}</CreatorName>
                <InteractionIcons>
                  <span>❤️ 120 Likes</span>
                  <span>💬 45 Comments</span>
                  <BuyButton>Buy NFT</BuyButton>
                </InteractionIcons>
              </FeedDetails>
            </FeedItem>
          ))}
        </FeedGrid>
      </PublicFeedSection>
    </>
  );
};

export default PublicFeedSec;

const PublicFeedSection = styled.section`
  padding: 2rem;


  @media(max-width:499px){
    padding: 1rem;
  }

`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  
  text-align: center;

   @media(max-width:499px){
     margin-bottom: 1rem;
  }
`;

const FeedGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const FeedItem = styled.div`
  background: aliceblue;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 31.33%;
  margin: 0 1% 25px;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: scale(1.05);
  }

   @media(max-width:1199px){
    width: 48%;
  }

  @media(max-width:850px){
    width: 98%;
  }
`;

const Thumbnail = styled.div`
  background: #eaeaea;
  height: 250px;
  position: relative;
  cursor: pointer;
  
  iframe {
    height: 250px;
    width: 100%;
    border: none;
  }
`;

const ThumbnailOverlay = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  ${ThumbnailOverlay}:hover & {
    opacity: 1;
  }
`;

const FeedDetails = styled.div`
  padding: 1rem;
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: space-between;

    @media(max-width:499px){
  
     height: auto;
  }
`;

const VideoTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;

`;

const CreatorName = styled.p`
  font-size: 0.9rem;
  color: mediumslateblue;
  margin-bottom: 1rem;
`;

const InteractionIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  
  color: #000;

  @media(max-width:499px){
  
      flex-wrap: wrap;
  }
`;

const BuyButton = styled.button`

  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;

  @media(max-width:499px){
     width:100%; margin-top:15px;
  }
`;