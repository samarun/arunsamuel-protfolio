import Header from "../components/Header";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage";
import PageLayout from "../components/PageLayout";
import styled from "styled-components";
import HomeLayout from "../components/HomeLayout";
import LeftLayout from "../components/LeftLayout";
import RightLayout from "../components/RightLayout";
import TitleComponent from "../components/TitleComponent";

const HomeTitle = styled(TitleComponent)`
  z-index: 100;
  h1 {
    flex-direction: column;
    margin: auto;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 22px;
    }
    span {
      font-size: 22px;
    }
  }

  @media screen and (min-width: 1024px) {
    h1 {
      width: 100%;
    }
  }
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    
    padding-left: 20px;
    h1{
      align-items: flex-start;
      font-size: 2.3rem;
      width: 100%;
    }
    span {
      font-size: 28px;
    }
  }
`;
const HomeRight = styled(RightLayout)`
  background-image: url("pic4.jpg");
`;

export default function Home() {
  return (
    <Layout>
      <HomeLayout>
        <HomeTitle>
          Hello, I'm Arun Samuel, a{" "}
          <span>Systems Enginner / Web Developer !</span>{" "}
        </HomeTitle>
        <HomeRight></HomeRight>
      </HomeLayout>
    </Layout>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
