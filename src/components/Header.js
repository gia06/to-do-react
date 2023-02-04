import styled from "styled-components";
import sunIcon from "../assets/icon-sun.svg";
import moonIcon from "../assets/icon-moon.svg";

function Header({ isDarkTheme, setIsDarkTheme }) {
  return (
    <Wrapper>
      <Title>TODO</Title>
      <ThemeIcon
        src={isDarkTheme ? sunIcon : moonIcon}
        onClick={() => setIsDarkTheme((theme) => !theme)}
      />
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  height: 50px;
  color: #ffffff;
  text-align: left;
  font-size: 40px;
  font-height: 40px;
  font-weight: 700;
  letter-spacing: 15px;
`;

const ThemeIcon = styled.img`
  object-fit: contain;
  cursor: pointer;
`;
