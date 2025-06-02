import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <FooterWrp>
        
        <Copyright>SociClip Copyright © 2025  All rights reserved.</Copyright>
      </FooterWrp>
    </div>
  );
};

export default Footer;

const FooterWrp = styled.footer`
  background: #fe4b6b;

  padding: 1rem 0;
  text-align: center;
`;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: aliceblue;
  font-size: 0.9rem;
`;

const Copyright = styled.p`
  font-size: 1.5rem; color:#fff; margin-bottom:0;
  @media only screen and (max-width:768px){
  font-size: 1rem;
  }
`;
