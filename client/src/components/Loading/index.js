import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import ParticlesBg from "particles-bg";

const Loading = () => {
  return (
    <>
      <Rotate className="container">
          <LoadingImage />
      </Rotate>
      <ParticlesBg  color="#ffa500" type="cobweb" num={100} bg={true} />
    </>
  )
};

const loadImages = ["./images/cooper1.jpg", "./images/cooper2.jpg", "./images/cooper3.jpg", "./images/me2.jpg",];

const randImg = Math.floor(Math.random() * loadImages.length);

const LoadingImage = styled.img.attrs({
  src: loadImages[randImg],
  alt: "Kevin"
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
animation: ${rotate} 2s linear infinite;
`

export default Loading;
