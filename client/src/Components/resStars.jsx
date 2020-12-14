import React  from 'react';



const Starts = props => {

    
    return (
    <span>
        {
        Array(props.rating+1).join("★")
        }
        {
        Array(5-props.rating+1).join("☆")
        }
    </span>
    );

}
export default Starts;


