
import styled from 'styled-components'
import {originBoxShadow, redBoxShadow, greenBoxShadow,lightbgColor} from './Styles'


export const StockStyle = styled.div`
${lightbgColor};
${originBoxShadow};
padding:30px;
`

export const SelectableStock = styled(StockStyle)`
&:hover{
 cursor:pointer;
 ${greenBoxShadow}
}
`

export const DisabledStock = styled(StockStyle)`
disabled:true;
opacity:0.5
`
export const DeletableStock = styled(StockStyle)`
&:hover{
 cursor:pointer;
 ${redBoxShadow}
}
`
