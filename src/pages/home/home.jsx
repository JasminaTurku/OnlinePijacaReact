import Header from "../../components/Header";
import FooterComponents from "../../components/FooterComponents";
import Slika from "./components/Slika/Slika";
import { HomeDiv } from "./styles";

function Home() {
  return (
    <HomeDiv>
      <Header />
      <Slika />
      <FooterComponents />
    </HomeDiv>
  );
}
export default Home;
