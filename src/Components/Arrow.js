function Arrow  ( props)  {
    
    if(props.direction === "right"){
        return <div style={{ visibility: props.isVisible ? 'visible': 'hidden'}} onClick={props.handleClick} className='arrow-right' /> 
    } if(props.direction === "left") {
       
        return <div style={{ visibility: props.isVisible ? 'visible': 'hidden'}} className='arrow-left' onClick={props.handleClick} />
    }
}

    

export default Arrow;