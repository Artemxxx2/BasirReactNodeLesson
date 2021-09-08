import ErrorComponentCss from './ErrorComponent'
let ErrorComponent = (props) =>{
return (
<div className ={ErrorComponentCss.wrapper}>
    <span>{props.error}</span>
</div>
)}
export default ErrorComponent