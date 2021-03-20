import React from 'react';

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
]

const ColorQuestion = (props) => {

  const {color, setColor} = props;
  const onColorChange = (event) => {
    console.log(`Color: ${event.target.value}`)
    setColor(event.target.value);
  }
  console.log(props.color);
  return (
    <>
      <p>My favourite colour is: </p>
      {colors.map((shade) => (
        <label key={shade} className="radio-buttons">
          <span className="radio-input">
            <input
              id="color"
              type="radio"
              name="colorButton"
              value={shade}
              onChange={onColorChange}
              checked={color === shade}
            />
            <span className={`radio-control ${shade}`}></span>
          </span>
            {shade} 
        </label> 
      ))}
      
    </>
    

  )
  
}

export default ColorQuestion;