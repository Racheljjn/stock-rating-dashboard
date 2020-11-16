
import styled from 'styled-components'
import {subtleBoxShadow, redBoxShadow, blackBoxShadow,lightbgColor} from './Styles'


export const StockStyle = styled.div`
${lightbgColor};
${subtleBoxShadow};
padding:30px;
`

export const SelectableStock = styled(StockStyle)`
&:hover{
 cursor:pointer;
 ${blackBoxShadow}
}
`
export const DeletableStock = styled(StockStyle)`
&:hover{
 cursor:pointer;
 ${redBoxShadow}
}
`
