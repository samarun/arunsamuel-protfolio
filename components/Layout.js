import Head from "next/head";
import Header from "../components/Header";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import LeftLayout from "../components/LeftLayout";
import RightLayout from "../components/RightLayout";
import Footer from "./Footer";



const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
   
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 1.2rem;
    }

    body{
        
        padding: 0;
        margin: 0;
    }
    ul.reset,
ul.reset li,
ul.reset ul li {
   margin:0;
   padding: 0;
   text-indent: 0;
   list-style-type: none;
}


`;


export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <GlobalStyle />
      <Header />
      {children}


    </div>
  );
}

Layout.defaultProps = {
  title: "Arun Samuel",
  description:
    "A Systems Engineer & Web Developer, I design and code beautifully simple things, and I love what I do.",
  keywords: "Dev, dev, web, developer, react, nextjs, docker, arun, samuel",
};
