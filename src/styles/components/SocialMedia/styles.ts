import styled from "styled-components"
import Image from "next/image";

export const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 1rem; */

  /* & img { */
    /* width: 600px; */
    /* height: 15px; */
  /* } */
`;

export const StyledImg = styled.img`
   height: 15px;
`;

export const StarImg = styled(Image)`
  height: 40px;
  /* background-color: white; */
`;

export const BigContainer = styled.div`

`;

export const SocialContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 10rem;
  /* background-color: green; */
  margin: 0 auto;
  padding: 1.5rem;
  gap: 1rem;

  & h2 {
    text-align: center;
    font-weight: 200;
  }

  & a {
    &:hover {
      color: rgb(153, 227, 236);
    }
  }
`;

export const StarContainerContent = styled.div`
  width: 40%;
  display: flex;
  /* justify-content: space-evenly; */
  /* background-color: red; */
  margin: 0 auto;
`;