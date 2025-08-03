import React from 'react'
import styled from "styled-components";

const Wrap = styled.button`
    min-width: ${({minWidth}) => minWidth || "120px"};
    padding: ${({padding}) =>  padding || "20px"};
    color: #333;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.95rem;
    transition: background-color 0.3s ease;
    background-color : ${({backgroundColor}) => backgroundColor || "#fff"};
`

const Button = ({onClick, disabled, children, padding, minWidth, backgroundColor}) => {
  return (
    <Wrap
    onClick={onClick} disabled={disabled} padding={padding} minWidth={minWidth} backgroundColor={backgroundColor}>
      {children}
    </Wrap>
  )
}

export default Button
