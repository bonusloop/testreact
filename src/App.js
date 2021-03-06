import './App.css';
import Headlaine from './components/headlaine/Headlaine';

import img1 from './components/assets/image/image1.jpg';
import img2 from './components/assets/image/image2.jpg';
import img3 from './components/assets/image/image3.jpg';
import img4 from './components/assets/image/image4.jpg';
import img5 from './components/assets/image/image5.jpg';
import img6 from './components/assets/image/image6.jpg';

import navimg0 from './components/assets/image/navimg0.svg';
import navimg1 from './components/assets/image/navimg1.svg';
import navimg3 from './components/assets/image/navimg3.svg';

import abc from './components/assets/image/categories/abc.svg';
import al from './components/assets/image/categories/al.svg';
import bbc from './components/assets/image/categories/bbc.svg';
import cnn from './components/assets/image/categories/cnn.svg';
import cw6 from './components/assets/image/categories/cw6.svg';
import fox from './components/assets/image/categories/fox.svg';

import news1 from './components/assets/image/news/news1.png';
import news2 from './components/assets/image/news/news2.png';
import news3 from './components/assets/image/news/news3.png';

import logo from './components/assets/image/logo.png';

import icon1 from'./components/assets/image/icons/icon1.svg';
import icon2 from'./components/assets/image/icons/icon2.svg';
import icon3 from'./components/assets/image/icons/icon3.svg';
import icon4 from'./components/assets/image/icons/icon4.svg';
import icon5 from'./components/assets/image/icons/icon5.svg';
import icon6 from'./components/assets/image/icons/icon6.svg';
import icon7 from'./components/assets/image/icons/icon7.svg';

import Headertitle from './components/headertitle/Headertitle';
import Navigation from './components/navigation/Navigation';
import Categories from './components/categories/Categories';
import News from './components/news/News';
import Icon from './components/icon/Icon';


function App() {
  return (
    <div className="App">
      <header className="hadeer">
      <div className="navigationTop">
          <Navigation thumbnail={navimg0} title="San Francisco, California"/>
          <Navigation thumbnail={navimg1} title="Analysis"/>
          <Navigation thumbnail={navimg3} title="Monthly"/>
        </div>
      </header>
       

      <aside className="sidebar">
        <img className="logo" src={logo} alt="logo" />
        <div className="items">
          <div className="item">
            <Icon thumbnail={icon1} title="Home"/>
            <Icon thumbnail={icon2} title="Explore"/>
            <Icon thumbnail={icon3} title="Saved"/>
            <Icon thumbnail={icon4} title="Subscriptions"/>
            <Icon thumbnail={icon5} title="Messagese"/>
            <Icon thumbnail={icon6} title="Settings"/>
          </div>
          <div className="itemBottom">
            <Icon thumbnail={icon7} title="Logout"/>
          </div>
        </div>
      </aside>

      <main className="main">
        <section className="headlners" >
        <Headertitle title="Explore Channels" icon="See all"/>
          <div className="categories">
            <Categories style={{marginBottom: 17}} thumbnail={fox} cardTitle="FOX NEWS"/>
            <Categories style={{marginBottom: 39}} thumbnail={cw6} cardTitle="CW6 NEWS"/>
            <Categories style={{marginBottom: 39}} thumbnail={abc} cardTitle="ABC NEWS"/>
            <Categories style={{marginBottom: 17}} thumbnail={al} cardTitle="AL JAZEERA"/>
            <Categories style={{marginBottom: 39}} thumbnail={bbc} cardTitle="BBC NEWS"/>
            <Categories style={{marginBottom: 38}} thumbnail={cnn} cardTitle="CNN NEWS"/>
          </div>
        <Headertitle title="Today???s Headlines" icon="See all"/>
          <div className="wrapper">
        <Headlaine thumbnail={img1} time="2:00 pm" like="10.8k" dislake="1.4k" label="BBC NEWS" title="Hate speech vs free speech"/>
        <Headlaine thumbnail={img2} time="2:00 pm" like="10.8k" dislake="3.4k" label="BBC NEWS" title="Ontario Liberal leadership"/>
        <Headlaine thumbnail={img3} time="2:00 pm" like="20.8k" dislake="1.1k" label="BBC NEWS" title="Victim of Scarborough"/>
        <Headlaine thumbnail={img4} time="2:00 pm" like="0" dislake="20k" label="ABC NEWS" title="Mother who left her baby"/>
        <Headlaine thumbnail={img5} time="2:00 pm" like="10.8k" dislake="1.4k" label="CW6 NEWS" title="Mother of Stefanie Rengel"/>
        <Headlaine thumbnail={img6} time="2:00 pm" like="10.8k" dislake="1.4k" label="CNN NEWS" title="World Cup: Popular items"/>
          </div>
        <Headertitle title="Featured News" icon="See all"/> 
        <div className="featurenews">
          <News newsimg={news1} title="Travellers to pay more than $2K, Trudeau says" label="FOX NEWS" time="2:00 pm"/>
          <News newsimg={news2} title="Myanmar???s military seizes control of country ov  er..." label="CNN NEWS" time="2:00 pm"/>
          <News newsimg={news3} title="Pressure builds for Biden to cancel other pipeline..." label="BBC NEWS" time="2:00 pm"/>
        </div>
        </section>

      </main>
    </div>
  );
}

export default App;
