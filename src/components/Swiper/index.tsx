import { StyledCarousel } from '../../styles/components/Swiper/styles';
import Image from 'next/image';
import pudim1 from '../../../public/pudim1.jpeg';
import pudim2 from '../../../public/pudim2.jpeg'
import pudim3 from '../../../public/pudim3.jpeg'

export default function ImageCarousel () {
  return (
    <StyledCarousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <div>
        <Image src={pudim1} alt="Image 1" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <Image src={pudim2} alt="Image 2" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <Image src={pudim3} alt="Image 3" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </StyledCarousel>
  );
};
