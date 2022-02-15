import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
  background-color: #EAEAEA;
  background-size: cover;
  grid-column: 2 /4;
  grid-row: 1 /3;
  -webkit-box-shadow: -2px 6px 15px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 6px 15px 2px rgba(0, 0, 0, 0.75);
  box-shadow: -2px 6px 15px 2px rgba(0, 0, 0, 0.75);


  @media (max-width: 480px){
    grid-column:1/4;
  }

  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    background-position: 15%;
  }
`;

export default function RightLayout({ children, className }) {
  return <StyledDiv className={className}>{children}</StyledDiv>;
}
