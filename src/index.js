import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './companents/Hero.jsx';
import Navbar from "./companents/Navbar.jsx";
import Footer from "./companents/Footer.jsx";
import {bannerAPI, brands, footerAPI, hero, memory, navlinks, placesAPI, pricingapi} from "./data/data";
import {BrowserRouter} from "react-router-dom";
import Memory from "./companents/Memory";
import Explore from "./companents/Explore";
import Advertise from "./companents/Advertise";
import Pricing from "./companents/Pricing";
import Banner from "./companents/Banner";
import Newslatter from "./companents/Newslatter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
        <Navbar navlinks={navlinks}   />
        <Hero hero = {hero}/>
        <Memory memory={memory}/>
        <Explore title="Explore The Beaty World" placesAPI={placesAPI} />
        <Advertise brands={brands}/>
        <Pricing pricingapi={pricingapi} />
        <Banner bannerAPI={bannerAPI} />
        <Newslatter />
        <Footer footerAPI={footerAPI} />

        </BrowserRouter>
    </>
);

