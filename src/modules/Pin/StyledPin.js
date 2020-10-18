import styled from 'styled-components'

const StyledPin = styled.div`
    cursor: pointer;
    margin: 10px 10px 10px 0;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 1px solid black;
    color: #3BC;
    background-color: ${props => props.color || "transparent"};
    cursor: ${props => props.clickable ? "pointer" : "auto"};
    transition: background-color .2s
`

export default StyledPin;