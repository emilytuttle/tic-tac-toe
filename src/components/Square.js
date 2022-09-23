import React from "react";
import "../styles.css"

 const Square = (props) => {

    const handleClick = () => {
        if (!props.squareVal) {
            if (props.player) {
                props.squares.splice(props.index, 1,'X')
                props.setSquares(props.squares)
                props.setPlayer(!props.player)
            } else {
                props.squares.splice(props.index, 1,'O')
                props.setSquares(props.squares)
                props.setPlayer(!props.player)
            }
        }
    }


    return (
        <div className="square" onClick={handleClick} {...props.squareVal === "O" ? "O" : props.squareValue } >
            {props.squareVal}
            
            
         </div>
    )
}

export default Square