// import GlobalStyle from "../styles/GlobalStyle";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Footer from "../components/Footer";
import HeaderStyled from "../components/Header";
// import MainStyled from "../components/Main";
import MainStyled from "../components/HomePage";
import PageLayout from "../components/PageLayout";
import PageLaoutStyle from "../components/PageLayout";
import SiteLayout from "../components/SiteLayout";

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
        max-width: 1200px;
        box-sizing: border-box;
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

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)
  return (

    getLayout(<Component {...pageProps} />)

  );
}

export default MyApp;
