import React from 'react';
const Form = props => {
    return(
        <form onSubmit={props.submit}>
            <input type="text" value={props.value} placeholder="Wpisz nazwę miasta" onChange={props.inchange}/>
            <button>Szukaj</button>
            </form>
            
    )
}
export default Form 