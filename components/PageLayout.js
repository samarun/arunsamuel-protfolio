import styled from "styled-components";
import Image from "next/image";
import Footer from "../components/Footer";

const PageLayoutStyle = styled.main`
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background-color: #4a3bff;

  .Main__Image {
    height: 100vh;
    background-color: #000;
    background-size: cover;
    grid-column: 2 /4;
    grid-row: 1 /3;
    -webkit-box-shadow: -2px 6px 15px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -2px 6px 15px 2px rgba(0, 0, 0, 0.75);
    box-shadow: -2px 6px 15px 2px rgba(0, 0, 0, 0.75);
  }
`;

const StyledDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700&display=swap");
  height: 100vh;
  width: 100%;
  grid-row: 1 /2;
  grid-column: 1 / 3;
`;

export default function PageLaout() {
  return (
    <PageLayoutStyle>

      {<div className="Main__Image">


      </div>}
    </PageLayoutStyle>
  );
}
