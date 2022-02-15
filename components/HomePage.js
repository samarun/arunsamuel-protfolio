import styled from "styled-components";
import Image from "next/image";
import Footer from "./Footer";
import PageLayoutStyle from "../components/PageLayout"

const MainStyled = styled.main`
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  height: 100vh;
  width: 100%;
  box-sizing: border-box;

  .Main__Footer {
    grid-column: 1/2;
    grid-row: 1/2;

    .Main__Footer__Wrapper {
      display: flex;
      height: 95vh;
      padding-left: 5%;

      h5 {
        font-family: "Raleway", sans-serif;
        font-weight: 200;
        font-size: 18px;
        color: #fff;
        display: flex;
        align-items: flex-end;
      }
    }
  }

  .Main__Image {
    height: 100vh;
    background-image: url("pic4.jpg");
    background-size: cover;
    grid-column: 2 /4;
    grid-row: 1 /3;
    -webkit-box-shadow: -2px 6px 15px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -2px 6px 15px 2px rgba(0, 0, 0, 0.75);
    box-shadow: -2px 6px 15px 2px rgba(0, 0, 0, 0.75);

    .Main__Contact {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;

      .Main__bottom {
        display: flex;
        flex-direction: column;
        height: 15%;
        justify-content: center;
        align-items: flex-start;
        width: 20%;
      }

      h2 {
        color: #fff;
        font-size: 32px;
        font-family: "Raleway", sans-serif;
        font-weight: 600;
      }
      h5 {
        color: #fff;
        font-size: 20px;
        font-family: "Raleway", sans-serif;
        font-weight: 200;
      }
      h6 {
        color: #fff;
        font-family: "Arizonia", cursive;

        font-size: 32px;
        text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.1);
        display: flex;
      }
    }
  }
`;

const StyledDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700&display=swap");
  height: 100vh;
  width: 100%;
  grid-row: 1 /2;
  grid-column: 1 / 3;

  .Main__title {
    background-color: #4a3bff;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-family: "Raleway", sans-serif;
      font-weight: 600;
      color: #fff;
      font-size: 62px;
      width: 75%;
      z-index: 9999;
      letter-spacing: 2px;
      span {
        font-family: "Raleway", sans-serif;
        font-weight: 400;
        font-size: 42px;
        text-decoration: underline;
      }
    }
  }
`;

export default function HomePage({ FooterText, Name, description, place, city, country }) {

  return (
    <MainStyled>
      <StyledDiv>
        <div className="Main__title">
          <h1>
            Hello, I'm Arun Samuel, a{" "}
            <span>Systems Enginner / Web Developer !</span>{" "}
          </h1>
        </div>
      </StyledDiv>
      <div className="Main__Footer">
        <div className="Main__Footer__Wrapper">
          <h5>{FooterText}</h5>
        </div>
      </div>
      <div className="Main__Image">
        <div className="Main__Contact">
          <div className="Main__bottom">
            <h2>{place}</h2>
            <h5>{city}</h5>
            <h5>{country}</h5>
          </div>
          <div className="Main__bottom">
            <h6>{Name}</h6>
          </div>
        </div>
      </div>

    </MainStyled>
  );
}

HomePage.defaultProps = {
  Name: 'Arun Samuel',
  place: 'Location',
  city: 'Hyderabad',
  country: 'India',
  FooterText: '@2021 arunsamuel.com'
}