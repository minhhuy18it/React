import React from "react"

const Person = (props) => {
    return (
        <>
            <p onClick={props.click}>This is a {props.name} {props.age}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </>
    );
}

export default Person;