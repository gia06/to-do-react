import { useEffect, useState } from "react";
import styled from "styled-components";

function Footer(props) {
  const [childNum, setChildNum] = useState(1);
  const [itemsLeft, setItemsLeft] = useState("");

  // * left items
  // const handleLeftItems = () => {
  //   let completed = 0;
  //   let active = 0;

  //   if (props.apiData) {
  //     props.apiData.map((todo) =>
  //       todo.itemStatus === "active" ? active++ : completed++
  //     );
  //   }
  //   console.log(completed, active);
  //   setItemsLeft(props.apiData.length - completed);
  // };

  const handleClick = (filterValue, childValue) => {
    setChildNum(childValue);
    props.setFilter(filterValue);
  };

  const innerItems = (
    <>
      <FooterItem
        isDarkTheme={props.isDarkTheme}
        onClick={(e) => handleClick("all", 1)}
      >
        All
      </FooterItem>

      <FooterItem
        isDarkTheme={props.isDarkTheme}
        onClick={(e) => handleClick("active", 1)}
      >
        Active
      </FooterItem>

      <FooterItem
        isDarkTheme={props.isDarkTheme}
        onClick={(e) => handleClick("completed", 3)}
      >
        Completed
      </FooterItem>
    </>
  );

  return (
    <>
      <ItemsWrapper isDarkTheme={props.isDarkTheme}>
        <FooterItem
          isDarkTheme={props.isDarkTheme}
          onClick={() => setChildNum(1)}
        >
          items left
        </FooterItem>

        <InnerItemsDesk isDarkTheme={props.isDarkTheme} childNum={childNum}>
          {innerItems}
        </InnerItemsDesk>

        <FooterItem
          isDarkTheme={props.isDarkTheme}
          onClick={() => setChildNum(1)}
        >
          Clear Completed
        </FooterItem>
      </ItemsWrapper>

      <InnerItemsMob isDarkTheme={props.isDarkTheme} childNum={childNum}>
        {innerItems}
      </InnerItemsMob>
    </>
  );
}

export default Footer;

const ItemsWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.isDarkTheme ? "#25273D" : "#ffffff")};
  border-radius: 0 0 5px 5px;
  padding: 0 20px 0 20px;

  box-shadow: 0px 35px 50px -15px ${(props) => (props.isDarkTheme ? "rgba(0, 0, 0, 0.5)" : "rgba(194, 195, 214, 0.5)")};

  @media (max-width: 670px) {
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

const InnerItemsDesk = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;

  p {
    margin: 0 19px;

    :nth-child(${(props) => props.childNum}) {
      color: #3a7cfd;
    }
  }

  @media (max-width: 670px) {
    display: none;
  }
`;

const InnerItemsMob = styled(InnerItemsDesk)`
  display: none;
  width: 100%;
  margin-top: 16px;
  background-color: ${(props) => (props.isDarkTheme ? "#25273D" : "#ffffff")};
  box-shadow: 0px 35px 50px -15px ${(props) =>
    props.isDarkTheme ? "rgba(0, 0, 0, 0.5)" : "rgba(194, 195, 214, 0.5)"};
  border-radius: 5px;

  @media (max-width: 670px) {
    display: flex;
    }
  }
`;
