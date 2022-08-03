import { useContext, useEffect, useState } from "react"
import styled, { css, ThemeContext } from "styled-components"
import { copyToClipboard } from "../utils/clipboardUtils"

const Wrapper = styled.div`
    margin: 0;
    cursor: copy;
    user-select: none;
`

const StyledText = styled.p`
    margin: 0;
    ${({ $isDarkMode }) => css`
      color: ${$isDarkMode ? '#ddd' : '#282c34'};
      &:hover {
          color: ${$isDarkMode ? '#fff' : '#282c34'};
      }
    `}
`

const ColorText = ({ color }) => {
    const { isDarkMode } = useContext(ThemeContext);

    const [ isCoppied, setCoppied ] = useState(false); 

    useEffect(() => {
        setTimeout(() => setCoppied(false), 10000)
    }, [isCoppied])

    return <Wrapper $isDarkMode={isDarkMode} onClick={({ target: { childNodes: [{ nodeValue }] }}) => { !isCoppied && copyToClipboard(nodeValue); !isCoppied && setCoppied(true) }}>
        <StyledText $isDarkMode={isDarkMode}>{color} {isCoppied ? '✅' : '📋'}</StyledText>
    </Wrapper>
}

export default ColorText
