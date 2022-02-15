import styled from "styled-components";
import Image from "next/image";
import Footer from "../components/Footer";
import RightLayout from "../components/RightLayout";

const PageLayoutStyle = styled.main`
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background-color: #4a3bff;

  
`;


export default function LeftLayout({ children, className }) {
    return (
        <>
            <PageLayoutStyle className={className}>
                {children}
            </PageLayoutStyle>

        </>
    )
}
