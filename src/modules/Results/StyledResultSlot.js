import styled from 'styled-components'

const StyledResultSlot = styled.div`
    margin: 10px 10px 0 0;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: ${props => props.color || "transparent"};
    border: 1px solid black;
`

export default StyledResultSlot;
