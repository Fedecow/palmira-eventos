import React from 'react';
import { useRef } from "react";
import { AppContext } from '../Context/AppContext'
import LandingPageHeader from "../Headers/LandingPageHeader";
import Contact from './Contact';
import Cards from './Cards';
import AboutUs from './AboutUs';
import Spaces from './Spaces';
/*import Ambientaciones from './Ambientaciones'*/
/*import { Card } from 'reactstrap';*/

//Se muestran todos los componentes que forman el main
function Main() {
    document.documentElement.classList.remove("nav-open");
    /*const { home, aboutUs, spaces, cards, contact } = useContext(AppContext);*/
    const home = useRef(null);
    const aboutUs = useRef(null);
    const spaces = useRef(null);
    const cards = useRef(null);
    const contact = useRef(null);
    return (
        <div className="main">
            <LandingPageHeader ref = {home} />
            <AboutUs ref = {aboutUs} />
            <Spaces ref = {spaces} />
            <Cards ref = {cards} />
            <Contact ref = {contact} />
        </div>
    );
}
export default Main

