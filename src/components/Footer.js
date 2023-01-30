import { useState } from "react";
import styled from "styled-components";

function Footer(props) {
  console.log(props.isDarkTheme);

  return (
    <FooterWrapper>
      <FooterItem isDarkTheme={props.isDarkTheme}>items left</FooterItem>
      <FooterItem isDarkTheme={props.isDarkTheme}>All</FooterItem>
      <FooterItem isDarkTheme={props.isDarkTheme}>Active</FooterItem>
      <FooterItem isDarkTheme={props.isDarkTheme}>Completed</FooterItem>
      <FooterItem isDarkTheme={props.isDarkTheme}>Clear Completed</FooterItem>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  margin: 0 auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FooterItem = styled.p`
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: ${(props) => (props.isDarkTheme ? "#5B5E7E" : "#9495A5")};

  :hover {
    color: ${(props) => (props.isDarkTheme ? "#E3E4F1" : "#494C6B")};
  }
`;
