import { useState } from "react";
import styled from "styled-components";
import { deleteCompletedItems } from "../data/dataHandler";

function Footer({ isDarkTheme, setFilter, itemsLeft, setLocalData }) {
  const [childNum, setChildNum] = useState(1);

  const handleClick = (filterValue, childValue) => {
    setChildNum(childValue);
    setFilter(filterValue);
  };

  const innerItems = (
    <>
      <FooterItem
        isDarkTheme={isDarkTheme}
        onClick={(e) => handleClick("all", 1)}
      >
        All
      </FooterItem>

      <FooterItem
        isDarkTheme={isDarkTheme}
        onClick={(e) => handleClick("active", 2)}
      >
        Active
      </FooterItem>

      <FooterItem
        isDarkTheme={isDarkTheme}
        onClick={() => handleClick("completed", 3)}
      >
        Completed
      </FooterItem>
    </>
  );

  return (
    <>
      <ItemsWrapper isDarkTheme={isDarkTheme}>
        <FooterItem isDarkTheme={isDarkTheme}>
          {itemsLeft} items left
        </FooterItem>

        <InnerItemsDesk isDarkTheme={isDarkTheme} childNum={childNum}>
          {innerItems}
        </InnerItemsDesk>

        <FooterItem
          isDarkTheme={isDarkTheme}
          onClick={() => deleteCompletedItems(setLocalData)}
        >
          Clear Completed
        </FooterItem>
      </ItemsWrapper>

      <InnerItemsMob isDarkTheme={isDarkTheme} childNum={childNum}>
        {innerItems}
      </InnerItemsMob>

      <DragAndDropText isDarkTheme={isDarkTheme}>
        Drag and drop to reorder list
      </DragAndDropText>
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
  background-color: ${({ isDarkTheme }) =>
    isDarkTheme ? "#25273D" : "#ffffff"};
  border-radius: 0 0 5px 5px;
  padding: 0 20px 0 20px;

  box-shadow: 0px 35px 50px -15px ${({ isDarkTheme }) => (isDarkTheme ? "rgba(0, 0, 0, 0.5)" : "rgba(194, 195, 214, 0.5)")};

  @media (max-width: 670px) {
    height: 48px;
  }
`;

const FooterItem = styled.p`
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: ${({ isDarkTheme }) => (isDarkTheme ? "#5B5E7E" : "#9495A5")};

  }
  :hover {
    color: ${({ isDarkTheme }) => (isDarkTheme ? "#E3E4F1" : "#494C6B")};
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

    :nth-child(${({ childNum }) => childNum}) {
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
  background-color: ${({ isDarkTheme }) =>
    isDarkTheme ? "#25273D" : "#ffffff"};
  box-shadow: 0px 35px 50px -15px ${({ isDarkTheme }) =>
    isDarkTheme ? "rgba(0, 0, 0, 0.5)" : "rgba(194, 195, 214, 0.5)"};
  border-radius: 5px;

  @media (max-width: 670px) {
    display: flex;
    }
  }
`;

const DragAndDropText = styled.p`
  color: ${({ isDarkTheme }) => (isDarkTheme ? "#5B5E7E" : "#9495A5")};
  margin-top: 49px;

  @media (max-width: 670px) {
    margin-top: 40px;
  }
`;
