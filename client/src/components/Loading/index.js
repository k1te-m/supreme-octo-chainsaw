import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <>
      <Rotate className="container">
        <LoadingImage />
      </Rotate>
    </>
  );
};

const loadImages = [
  "./images/cooper1.jpg",
  "./images/cooper2.jpg",
  "./images/cooper3.jpg",
  "./images/me2.jpg",
];

const randImg = Math.floor(Math.random() * loadImages.length);

const LoadingImage = styled.img.attrs({
  src: loadImages[randImg],
  alt: "Kevin",
})`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 4px solid #3b945e;
`;

const rotate = keyframes`
from {
    transfrom: rotate(0deg);
}

to {
    transform: rotate(360deg);
}`;

const Rotate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotate} 1.5s linear infinite;
`;

export default Loading;
