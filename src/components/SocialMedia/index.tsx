import { Container, SocialContent, StarContainerContent, StarImg, StyledImg } from "@/styles/components/SocialMedia/styles";
import StarSvg from '../../../public/stars.svg';
import Image from "next/image";
import PudimSvg from '../../../public/pudim.png';
import Pudim4 from '../../../public/pudim4.png'
import InstagramSvg from '../../../public/instagram.png'

export default function SocialMedia() {
  return (
    <div>
      <Container>
        <StyledImg
          src="https://static.wixstatic.com/media/84770f_8ce8fde924b90df7338475eff3c63d6a.png/v1/fill/w_448,h_11,al_c,lg_1,q_85,enc_auto/84770f_8ce8fde924b90df7338475eff3c63d6a.png"
          alt="decorator stars"
        />

        <StarImg src={StarSvg} alt='star'/>

        <StyledImg
          src="https://static.wixstatic.com/media/84770f_8ce8fde924b90df7338475eff3c63d6a.png/v1/fill/w_448,h_11,al_c,lg_1,q_85,enc_auto/84770f_8ce8fde924b90df7338475eff3c63d6a.png"
          alt="decorator stars"
        />

      </Container>

      <StarContainerContent>
        <SocialContent>
          <Image src={PudimSvg} alt='pudim' width={80} height={80} />
          <h2>CURTIR E SEGUIR</h2>
          <Image src={InstagramSvg} alt="instagram logo" width={40} height={40} />
        </SocialContent>
        <SocialContent>
          <Image src={Pudim4} alt='pudim' width={80} height={80} />
          <h2>PEÇA ONLINE</h2>
          <a>Clique aqui</a>
        </SocialContent>
      </StarContainerContent>


      <Container>
        <StyledImg
          src="https://static.wixstatic.com/media/84770f_8ce8fde924b90df7338475eff3c63d6a.png/v1/fill/w_448,h_11,al_c,lg_1,q_85,enc_auto/84770f_8ce8fde924b90df7338475eff3c63d6a.png"
          alt="decorator stars"
        />

        <StarImg src={StarSvg} alt='star'/>

        <StyledImg
          src="https://static.wixstatic.com/media/84770f_8ce8fde924b90df7338475eff3c63d6a.png/v1/fill/w_448,h_11,al_c,lg_1,q_85,enc_auto/84770f_8ce8fde924b90df7338475eff3c63d6a.png"
          alt="decorator stars"
        />

      </Container>
    </div>
  );
}
