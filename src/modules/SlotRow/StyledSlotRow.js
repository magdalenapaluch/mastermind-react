import styled from 'styled-components'

const StyledSlotRow = styled.div`
    display: flex;
    flex: 0 1 70%;
    padding: ${props => props.padding ? "0 20px" : 0};
`

export default StyledSlotRow;