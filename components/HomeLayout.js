import styled from "styled-components";
import LeftLayout from "./LeftLayout";
import RightLayout from "./RightLayout";
import Footer from "./Footer";

const HomeContainer = styled.main`
display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background-color: #4a3bff;


`;

export default function HomeLayout({ children, className }) {
    return (
        <HomeContainer className={className}>
            {children}
            <Footer />
        </HomeContainer>
    )
}
