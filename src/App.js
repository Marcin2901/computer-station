import './App.css';
import {Switch, Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import ItemContainer from './Components/ItemsContainer/ItemsContainer';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Menu from './Page/Menu/Menu';
import Products from './Page/Products/Products';
import Review from './Page/Review/Review';
import Contact from './Page/Contact/Contact';
import Blogs from './Page/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import ProcessorsPage from './Page/ProcessorsPage/ProcessorsPage';
import Motherboard from './Page/MotherboardPage/MotherPage';
import RamMemoryPage from './Page/RamMemoryPage/RamMemoryPage';
import HardDiskPage from './Page/HardDiskPage/HardDiskPage';
import GraphicsCardPage from './Page/GraphicsCardPage/GraphicsCardPage';
import ChargersPage from './Page/ChargersPage/ChargersPage';
import CasesPage from './Page/CasesPage/CasesPage';
import AccessoriesPage from './Page/AccessoriesPage/AccessoriesPage';

function App() {


  
  return (
    <div className="App">
        <Navbar />
        <ItemContainer />
        <Switch>
          <Route exact path={"/"}>
            <Home />
            <About />
            <Menu />
            <Products />
            <Review />
            <Contact />
            <Blogs />
          </Route>
          <Route path={"/processors"}>
            <ProcessorsPage />
          </Route>
          <Route path={"/motherboards"}>
            <Motherboard />
          </Route>
          <Route path={"/ram"}>
            <RamMemoryPage />
          </Route>
          <Route path={"/hardDisks"}>
            <HardDiskPage />
          </Route>
          <Route path={"/graphics"}>
            <GraphicsCardPage />
          </Route>
          <Route path={"/chargers"}>
            <ChargersPage />
          </Route>
          <Route path={"/cases"}>
            <CasesPage />
          </Route>
          <Route path={"/accessories"}>
            <AccessoriesPage />
          </Route>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
