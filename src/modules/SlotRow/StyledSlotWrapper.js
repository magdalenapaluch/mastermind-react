import styled from 'styled-components'

const StyledSlotWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    border-top: 1px solid black;
    align-items: center;
    background-color: ${props => props.activeState ? "wheat" : "transparent"};
    padding: 0 20px;
`

export default StyledSlotWrapper;