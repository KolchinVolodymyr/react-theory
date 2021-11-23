import React from 'react'

//function Car() {
//    return (
//        <h2>This is car component</h2>
//    )
//}
const car = () => {
    return (
        <div>
            <h2>This is car component</h2>
            <p>Number: <strong>{Math.round(Math.random()*100)}</strong></p>
        </div>
    )
}

export default car