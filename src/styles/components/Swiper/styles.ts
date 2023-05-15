import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import Image from 'next/image';

// Estilizando o componente Carousel
export const StyledCarousel = styled(Carousel)`
  margin: 40px auto;
  width: 60%;
  height: 25rem;

  & img {
    height: 25rem;
    object-fit: contain;
  }

  .carousel .slide .legend {
    background: transparent;
    /* color: #ffffff; */
  }
`;


export const CarouselImage = styled(Image)`

`;