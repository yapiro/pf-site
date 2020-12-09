import './Button.css';

const Button = (props)=>{
    let {onClickHandler}  = props;
    if(typeof onClickHandler !== 'function'){
        onClickHandler= ()=>{}
    }
    return(
    <span className = 'Button-container' onClick={onClickHandler()}>
        {props.children}
    </span>
    );
};

export default Button;