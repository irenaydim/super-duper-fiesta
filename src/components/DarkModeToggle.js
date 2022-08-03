import { useContext, useState } from "react"
import styled, { css, ThemeContext } from "styled-components"

const Wrapper = styled.div`
`
const Toggle = styled.div`
    touch-action: pan-x;
    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;
`
const ToggleTrack = styled.div`
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: #4d4d4d;
    transition: all .2s ease;
`
const ToggleTrackCheck = styled.div`
    position: absolute;
    width: 14px;
    height: 10px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    left: 8px;
`
const ToggleTrackX = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 10px;
`
const ToggleThumb = styled.div`
    position: absolute;
    top: 1px;
    ${({ $left }) => css`
        left: ${$left ? '1px' : '27px'};
    `}
    width: 22px;
    height: 22px;
    border: 1px solid #4d4d4d;
    border-radius: 50%;
    background-color: #fafafa;
    box-sizing: border-box;
    transition: all .25s ease;
`
const Emoji = styled.span`
    align-items: center;
    ${({ $hidden }) => css`
        display: ${$hidden ? 'none' : 'flex'};
    `}
    height: 10px;
    justify-content: center;
    position: relative;
    width: 10px;
    font-size: 15px;
    line-height: 0;
`

const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)

    return <Wrapper onClick={() => toggleDarkMode(!isDarkMode)}>
        <Toggle>
            <ToggleTrack>
                <ToggleTrackCheck>
                    <Emoji $hidden={isDarkMode}>🌜</Emoji>
                </ToggleTrackCheck>
                <ToggleTrackX>
                    <Emoji $hidden={!isDarkMode}>🌞</Emoji>
                </ToggleTrackX>
            </ToggleTrack>
            <ToggleThumb $left={isDarkMode} />
        </Toggle>
    </Wrapper>
}

export default DarkModeToggle