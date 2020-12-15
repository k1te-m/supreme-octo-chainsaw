import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <Rotate>
        <LoadingImage />
    </Rotate>
  )
};

const LoadingImage = styled.img.attrs({
  src: "./images/me2.jpg",
})`
  border-radius: 50%;
  border: 4px solid orange;
`;

const rotate = keyframes`
from {
    transfrom: rotate(0deg);
}

to {
    transform: rotate(360deg);
}`

const Rotate = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
animation: ${rotate} 2s linear infinite;`

export default Loading;
