import FooterComponents from "../components/FooterComponents";
import Header from "../components/Header";
import Slika from "../components/Slika";
import style from "./home.module.css";

function Home() {
  return (
    <div className={style.miniconstainer}>
      <Header />
      <Slika />
      <FooterComponents />
    </div>
  );
}
export default Home;
