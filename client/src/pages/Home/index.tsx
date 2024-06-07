import { AppFooter, AppNavbar } from "../../components";
import { HomeScreen1, HomeScreen2, HomeScreen3 } from "../../containers";
import "./Home.css";

const Home = () =>{
    
    return(
        <div className="app-home">
            <AppNavbar/>
            <HomeScreen1/>
            <HomeScreen2/>
            <HomeScreen3/>
            <AppFooter/>
        </div>
    )
};

export default Home;