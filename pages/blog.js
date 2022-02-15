import styled from "styled-components";
import PageLayoutStyle from "../components/PageLayout";
import LeftLayout from "../components/LeftLayout";
import RightLayout from "../components/RightLayout";
import Layout from "../components/Layout";
import HomeLayout from "../components/HomeLayout";
import TitleComponent from "../components/TitleComponent";
import HomePage from "../components/HomePage";
import Footer from "../components/Footer";

const AboutTitle = styled(TitleComponent)` 



`;
// const AboutStyled = styled.div`
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   h1 {
//     color: white;
//   }
// `;
export default function blog() {
  return (
    <Layout>
      <HomeLayout>
        <AboutTitle>Blog</AboutTitle>

        <RightLayout>
          <h1>This is Blog</h1>
        </RightLayout>
      </HomeLayout>
    </Layout>
  );
}
