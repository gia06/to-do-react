import { useEffect, useState } from "react";
import styled from "styled-components";

function Footer(props) {
  const [childNum, setChildNum] = useState(1);
  const [itemsLeft, setItemsLeft] = useState("");

  const { innerWidth } = window;

  const handleLeftItems = () => {
    let completed = 0;
    let active = 0;

    if (props.apiData) {
      props.apiData.map((todo) =>
        todo.itemStatus === "active" ? active++ : completed++
      );
    }
    console.log(completed, active);
    setItemsLeft(props.apiData.length - completed);
  };

  useEffect(() => {
    // props.fetchData();
    // handleLeftItems();
  }, [childNum]);

  const filterData = (status, nthChild) => {
    setChildNum(nthChild);

    const filteredData = props.apiData.filter(
      (todo) => todo.itemStatus === status
    );
    console.log(filteredData);
    props.setApiData(filteredData);
  };

  return (
    <FooterWrapper isDarkTheme={props.isDarkTheme}>
      <InnerItems isDarkTheme={props.isDarkTheme} childNum={childNum}>
        <FooterItem
          isDarkTheme={props.isDarkTheme}
          onClick={() => setChildNum(1)}
        >
          All
        </FooterItem>

        <FooterItem
          isDarkTheme={props.isDarkTheme}
          onClick={() => filterData("active", 2)}
        >
          Active
        </FooterItem>

        <FooterItem
          isDarkTheme={props.isDarkTheme}
          onClick={() => filterData("completed", 3)}
        >
          Completed
        </FooterItem>
      </InnerItems>

      <OuterItems isDarkTheme={props.isDarkTheme}>
        <FooterItem isDarkTheme={props.isDarkTheme} childNum={childNum}>
          {itemsLeft} items left
        </FooterItem>

        <FooterItem isDarkTheme={props.isDarkTheme} childNum={childNum}>
          Clear Completed
        </FooterItem>
      </OuterItems>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.isDarkTheme ? "#25273D" : "#ffffff")};
  border-radius: 0 0 5px 5px;

  box-shadow: 0px 35px 50px -15px ${(props) => (props.isDarkTheme ? "rgba(0, 0, 0, 0.5)" : "rgba(194, 195, 214, 0.5)")};

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

  }
  :hover {
    color: ${(props) => (props.isDarkTheme ? "#E3E4F1" : "#494C6B")};
  }
`;

// TODO needs position adjustment
const InnerItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  p {
    margin: 0 9px;

    :nth-child(${(props) => props.childNum}) {
      color: #3a7cfd;
    }
  }

  @media (max-width: 760px) {
    position: relative;
    height: 48px;
    align-items: center;
    top: 64px;

    background-color: ${(props) => (props.isDarkTheme ? "#25273D" : "#ffffff")};
    box-shadow: 0px 35px 50px -15px ${(props) => (props.isDarkTheme ? "rgba(0, 0, 0, 0.5)" : "rgba(194, 195, 214, 0.5)")};
    border-radius: 5px;
  }
`;

const OuterItems = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px 0 20px;
`;
