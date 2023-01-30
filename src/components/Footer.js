import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

function Footer(props) {
  const [childNum, setChildNum] = useState(2);

  useEffect(() => {
    console.log(childNum);
  }, [childNum]);

  return (
    <FooterWrapper>
      <FooterItem isDarkTheme={props.isDarkTheme}>items left</FooterItem>
      <FooterItem
        onClick={() => setChildNum(2)}
        childNum={childNum}
        // isDarkTheme={props.isDarkTheme}
        // onClick={apiData.filter((todo) => {})}
      >
        All
      </FooterItem>
      <FooterItem
        isDarkTheme={props.isDarkTheme}
        onClick={() => setChildNum(3)}
        childNum={childNum}
      >
        Active
      </FooterItem>
      <FooterItem
        isDarkTheme={props.isDarkTheme}
        onClick={() => setChildNum(4)}
        childNum={childNum}
      >
        Completed
      </FooterItem>
      <FooterItem isDarkTheme={props.isDarkTheme}>Clear Completed</FooterItem>
    </FooterWrapper>
  );
}

export default Footer;

// TODO need to finish styling
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

  :nth-child(${(props) => props.childNum}) {
    color: #3a7cfd;
  }
  :hover {
    color: ${(props) => (props.isDarkTheme ? "#E3E4F1" : "#494C6B")};
  }
`;
