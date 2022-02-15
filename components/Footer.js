import styled from "styled-components";

const FooterStyle = styled.div`
  
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

      @media (max-width: 480px){
        padding-left: 20px;
      }
    }
  

`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="Main__Footer__Wrapper">
        <h5>@2021 arunsamuel.com</h5>
      </div>
    </FooterStyle>
  );
}
