import { useEffect, useState } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import ColorText from './components/ColorText';
import ColorWindow from './components/ColorWindow';
import DarkModeToggle from './components/DarkModeToggle';
import RandomColor from './components/RandomColor';
import { generateRandomHexColor, hexToRgb } from './utils/colorUtils';
import { isThemeDark } from './utils/themeUtils';

const AppWrapper = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const NavBar = styled.nav`
  ${({$isDarkMode}) => css`
    background-color: ${$isDarkMode ? '#282c34' : '#f3f6f4'};
  `}
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0;
  padding: 1em;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
`
const Body = styled.div`
  flex: 1;
  justify-content: center;
  ${({$isDarkMode}) => css`
    background-color: ${$isDarkMode ? '#282c34' : '#f3f6f4'};
  `}
  background-color: ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const Heading = styled.h1`
  margin: 0;
  ${({ $isDarkMode }) => css`
    color: ${$isDarkMode ? '#fff' : '#282c34'};
  `}
`

function App() {
  const localIsDarkMode = localStorage.getItem('isDarkMode')
  const [ isDarkMode, toggleDarkMode ] = useState(localIsDarkMode !== null ? localIsDarkMode === 'true' ? true : false : isThemeDark())

  useEffect(() => {
    if (localStorage.getItem('isDarkMode') !== String(isDarkMode)) {
      localStorage.setItem('isDarkMode', String(isDarkMode));
    }
  }, [isDarkMode])

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <AppWrapper>
        <NavBar $isDarkMode={isDarkMode}>
          <Heading $isDarkMode={isDarkMode}>🎨 Random Color Generator</Heading>
          <DarkModeToggle />
        </NavBar>
        <Body $isDarkMode={isDarkMode}>
          <RandomColor />
        </Body>
      </AppWrapper>
    </ThemeContext.Provider>
  );
}

export default App;
