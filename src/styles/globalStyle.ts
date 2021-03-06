import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --frist-color: #ee9430;
    --frist-color-alt: #eccb39;
    --dark-color: #280e11;
    --second-color: #15181f;
    --body-font: "Poppins", Arial, sans-serif;
    --gray-color:#ccc;
    --white-color:#fff;
    --header-height:3rem;

    --blod: bolder;
    --semi: bold;
    --small: lighter;
    --normal: normal;
    --normal-font-size: 1.2rem;
    --h1-font-size: 2rem;
    --h2-font-size: 2rem;
    --bigest-font-size: 3rem;
    --border: 0.5rem;
  }

  @media screen and (max-width: 790px) {
    :root {
    --normal-font-size: 1rem;
    --h1-font-size: 1.7rem;
    --h2-font-size: 1.5rem;
    --bigest-font-size: 3rem;
    --border: 0.5rem;
  }
  }  

  html{
  scroll-behavior: smooth;

  }
  body {
    box-sizing: border-box;
    color: var(--white-color);
    margin: 0px;
    padding: 0px;
    font-family: var(--body-font);
    background:rgba(0,0,0, .5);    
    transition:.5s;
  } 
  *,
  ::after,
  ::after {
    margin: 0px;
    padding: 0px;
    color: var(--text-color);
    box-sizing: border-box ;
    border:none;
  }
  img{
    display:block;
    max-width:100%;
    height:auto;
  }

  button,
  input {
    background: none;
    font-family: var(--body-font);
    border: none;
  }
  button {
    outline: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }

  li{
    list-style: none;
  }
  p{
  line-height:1.5;
  }
  .container {
    max-width: 1020px;
    margin: 0 auto;
  }
 
  .grid {
    display: grid;
    gap: 2rem;
  }
  .article {
    padding: 2rem 0px 1rem 0px;
  }
`;
