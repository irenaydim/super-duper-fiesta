import { useContext } from "react";
import styled, { css, ThemeContext } from "styled-components"

const StyledColorWindow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    ${({ $isDarkMode }) => css`
        border: 3px solid ${$isDarkMode ? '#fff' : '#282c34'};
    `}
    ${({ $color }) => css`
        background: ${$color};
    `}
`
const EmojiButton = styled.span`
    font-size: 30px;
    line-height: 0;
    cursor: pointer;
`

const ColorWindow = ({ color, onClick }) => {
    const { isDarkMode } = useContext(ThemeContext);

    return <StyledColorWindow $isDarkMode={isDarkMode} $color={color}>
        <EmojiButton onClick={onClick}>🔀</EmojiButton>
    </StyledColorWindow>
}

export default ColorWindow
