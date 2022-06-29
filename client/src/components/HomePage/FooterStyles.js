import styled from "styled-components";

export const Box = styled.div`
 
  bottom: 0;
  background-color: #FEF8F0
  color: black;
  height:100%;
  width:100%;
  padding: 0.5rem 0.5rem;
  font-family: acumin-pro, system-ui, sans-serif;
  @media (max-width: 1000px) {
    padding: 50px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Pacifico", cursive;
  min-heigth: 100vh;
  margin: 0 auto;
  background-color: #e0d9cc;
  box-sizing: inherit;
`;

export const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  line-height: normal;
  padding: 0.5em 1em;
  min-height: 100%;
`;

export const Row = styled.div`
  display: flex;
  padding: 10px 1px;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;
  line-height: normal;
  min-width: 100%;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: black;
  margin-bottom: 9px;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    color: white;
    transition: 200ms ease-in;
  }
`;
export const Form = styled.div`
  margin-bottom: 10px;
  text-align: center;
  margin-top: 0;
`;

export const Button = styled.button`
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  color: white;
  background-color: black;
  padding: 0 10px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  border-left: 0px;
  height: 40px;
`;

export const Email = styled.div`
  padding: 25px 25px;
  border-radius: 1px;
  outline: 1px solid #3D9FFF
  width: 400px;
  font-size: 18px;
`;

export const Heading = styled.p`
  font-size: 20px;
  color: black;
  margin-bottom: 15px;
  font-weight: bold;
`;
