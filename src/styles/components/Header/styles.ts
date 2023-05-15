import styled from "styled-components";
import Image from "next/image"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: chocolate; */
  width: 100%;
`;

export const Navigation = styled.nav`
  display: flex;
  width: 25rem;
  /* background-color: green; */
  width: 987px;
  margin-top: 1.5rem;

  & ul {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
  }

  & li {
    display : flex;
    justify-content: space-around;
    width: 100%;
    /* background-color: blue; */
  }

  & a {
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 193px;
    height: 39px;
    background-color: white;
    border: 4px solid rgb(153, 227, 236);
    padding: 1rem;
  }
`;

export const Banner = styled(Image)`
  color: white;
  position: absolute;
  top: 110px;
`;

export const StyledH4 = styled.h4`
  color: black;
  position: absolute;
  top: 190px;
  z-index: 2;
  height: auto;
`;