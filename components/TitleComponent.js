import styled from "styled-components";

const TitleContainer = styled.h1` 

@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700&display=swap");
  height: 100vh;
  width: 100%;
  grid-row: 1 /2;
  grid-column: 1 / 3;

 
`;

const H1Container = styled.h1` 
  
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    
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
  


`;

export default function TitleComponent({ children, className }) {
  return (
    <TitleContainer className={className}>
      <H1Container>
        {children}
      </H1Container>
    </TitleContainer>
  )
}
