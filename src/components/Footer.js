import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: black;
    color: white;
  padding: 20px;
  text-align: center;
  margin-top: auto;
  border-top: 1px solid #4CAF50;
  /* width: 100%; */
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 Event Management. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
