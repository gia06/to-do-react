import { useEffect, useState } from "react";
import styled from "styled-components";

function Footer(props) {
  const [childNum, setChildNum] = useState(1);

  useEffect(() => {
    console.log(childNum);
  }, [childNum]);

  return (
    <FooterWrapper>
      <FooterItem isDarkTheme={props.isDarkTheme}>items left</FooterItem>

      <FilterOptions isDarkTheme={props.isDarkTheme}>
        <FooterItem
          onClick={() => setChildNum(1)}
          childNum={childNum}
          isDarkTheme={props.isDarkTheme}
          // onClick={apiData.filter((todo) => {})}
        >
          All
        </FooterItem>
        <FooterItem
          isDarkTheme={props.isDarkTheme}
          onClick={() => setChildNum(2)}
          childNum={childNum}
        >
          Active
        </FooterItem>
        <FooterItem
          isDarkTheme={props.isDarkTheme}
          onClick={() => setChildNum(3)}
          childNum={childNum}
        >
          Completed
        </FooterItem>
      </FilterOptions>
      <FooterItem isDarkTheme={props.isDarkTheme}>Clear Completed</FooterItem>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  padding: 0 24px;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 546px) {
    height: 48px;
  }
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

// TODO needs position adjustment
const FilterOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  p {
    margin: 0 9px;
  }

  @media (max-width: 546px) {
    width: 100%;

    width: auto;
    min-width: 327px;
    max-width: 546px;

    height: 48px;
    margin-top: 16px;
    align-items: center;
    position: absolute;
    top: 508px;
    left: 0px;

    background-color: ${(props) => (props.isDarkTheme ? "#25273D" : "#ffffff")};
    box-shadow: 0px 35px 50px -15px ${(props) => (props.isDarkTheme ? "rgba(0, 0, 0, 0.5)" : "rgba(194, 195, 214, 0.5)")};
    border-radius: 5px;
  }
`;
