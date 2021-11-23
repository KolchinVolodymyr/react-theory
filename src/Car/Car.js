import React from 'react'

export default props =>  (
    <div style={{
             border: '1px solid #ccc',
             marginBottom: '10px',
             display: 'block',
             padding: '10px',
             boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
             borderRadius: '5px',
             width: 400,
             margin: '20px auto',
             paddingTop: '20px'
           }}>
        <h2>Car name: {props.name}</h2>
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)