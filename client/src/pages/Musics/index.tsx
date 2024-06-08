import { AppFooter, AppNavbar } from "../../components";
import { MusicsScreen1, MusicsScreen2 } from "../../containers";
import "./Musics.css";

const Musics = () => {
  return (
    <div className='page-music'>
      <AppNavbar/>
      <MusicsScreen1/>
      <MusicsScreen2/>
      <AppFooter/>
    </div>
  );
};

export default Musics;