import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import Image from "./components/Slika/Image";
import { HomeDiv } from "./styles";

function Home() {
  return (
    <HomeDiv>
      <Header />
      <Image />
      <Footer />
    </HomeDiv>
  );
}
export default Home;
