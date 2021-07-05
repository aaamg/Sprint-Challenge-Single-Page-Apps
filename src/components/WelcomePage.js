import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  `

const Img = styled.img`
  display: flex;
  justify-content: center;
  //border: 2px solid red;
  `


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Div>
          <Img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </Div>
      </header>
    </section>
  );
}
