import styled from 'styled-components'

const StyledSlot = styled.div`
    width: 30px;
    margin-right: 10px;
    height: 30px;
    border-radius: 100%;
    background-color: ${props => props.color || "gray"};
    border: 1px solid black;
    cursor:${props => props.clickable ? "pointer" :  "auto"};
    pointer-events:${props => props.clickable ? "auto" :  "none"};
`

export default StyledSlot;