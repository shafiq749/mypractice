import {Buttons} from './Button'

const Button = ({children , ...props})=>{
console.log(props)
    return(
    <Buttons {...props}>{children}</Buttons>
)
}
export default Button;