import styled from "styled-components";
import Link from "next/link";

const HeaderStyled = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Allura&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Euphoria+Script&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Tangerine&display=swap");
  background-color: #4a3bff;
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;
const LogoStyled = styled.nav`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4a3bff;
  cursor: pointer;

  width: 115px;

  h1 {
    font-family: "Euphoria Script", cursive;
    font-size: 28px;
    border: 2px solid #000;
    color: #000;
    background-color: #fff;
    border-radius: 50%;
    padding: 8px;

    &:hover {
      color: #000;
      border: 2px solid #000000;
    }
  }

  @media (max-width: 480px){
    justify-content: flex-start;
    padding: 20px;
  }
`;

const Menu = styled.nav`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  align-items: center;
  background-color: #fff;

  .nav-bar {
    height: 100px;
  }
  &:hover {
    color: red;
  }

  ul,
  li,
  a {
    text-decoration: none;
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0.4rem 1rem;
    /* width: 100%; */
    color: #5a5a5a;
    height: 45px;
    a:hover {
      background-color: #e5e5e5;
    }

    a:active{
      background-color: #e5e5e5;
    }
   
  }

  


  @media (max-width: 480px){
    display:none;
  }
`;
export default function Header() {
  return (
    <HeaderStyled>
      <LogoStyled>
        <Link href="/">
          <h1>AS</h1>
        </Link>
      </LogoStyled>
      <Menu>
        <ul className="nav-bar">
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <a>Resume</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </Menu>
    </HeaderStyled>
  );
}
