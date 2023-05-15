import {
  Container,
  Navigation,
  Banner,
  StyledH4,
} from "@/styles/components/Header/styles";
import Image from "next/image";
import logo from "../../../public/nobres-logo.png";
import apresentacaoSvg from "../../../public/apresentacao.svg";

export default function Header() {
  return (
    <Container>
      <Image src={logo} alt="Nobres pudins logo" height={250} width={250} />
      <StyledH4>Algum texto carinhoso</StyledH4>
      <Banner src={apresentacaoSvg} alt="banner" height={200} width={400}>
      </Banner>
      <Navigation>
        <ul>
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>QUEM SOMOS</a>
          </li>
          <li>
            <a>CARDÁPIO</a>
          </li>
          <li>
            <a>CONTATO</a>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
}
