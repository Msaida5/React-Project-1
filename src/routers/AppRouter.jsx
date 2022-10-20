import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ModeBtn from '../components/ModeBtn';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import DigitalAgency from '../pages/DigitalAgency';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Pages from '../pages/Pages';
import Contact from '../pages/Contact';
// import { AbstrackProvider } from "../components/context/AbstrackContext";
// import ServicesCard from "../components/ServicesCard";

const AppRouter = () => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    document.body.className = mode;
  })

  return (
    // <AbstrackProvider>
 <BrowserRouter>
    <Nav/>
    <ModeBtn color={mode} setColor={setMode}  />
    <Switch>
      <Route path="/" component={DigitalAgency}></Route>
      <Route path="/Services " component={Services}></Route>
      <Route path="/Portfolio" component={Portfolio}></Route>
      <Route path="/Pages" component={Pages}></Route>
      {/* <Route path="/ServicesCard" component={ServicesCard}></Route> */}
      <Route path="/contact" component={Contact}></Route>
    </Switch>
    <Footer/>
    </BrowserRouter>
    // </AbstrackProvider>
   
  )
}

export default AppRouter