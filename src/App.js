import './App.css';
import Headlaine from './components/headlaine/Headlaine';

import img1 from './components/assets/image/image1.jpg';
import img2 from './components/assets/image/image2.jpg';
import img3 from './components/assets/image/image3.jpg';
import img4 from './components/assets/image/image4.jpg';
import img5 from './components/assets/image/image5.jpg';
import img6 from './components/assets/image/image6.jpg';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Headlaine thumbnail={img1} time="2:00 pm" like="10.8k" dislake="1.4k" label="BBC NEWS" title="Hate speech vs free speech"/>
        <Headlaine thumbnail={img2} time="2:00 pm" like="10.8k" dislake="3.4k" label="BBC NEWS" title="Ontario Liberal leadership"/>
        <Headlaine thumbnail={img3} time="2:00 pm" like="20.8k" dislake="1.1k" label="BBC NEWS" title="Victim of Scarborough"/>
        <Headlaine thumbnail={img4} time="2:00 pm" like="0" dislake="20k" label="ABC NEWS" title="Mother who left her baby"/>
        <Headlaine thumbnail={img5} time="2:00 pm" like="10.8k" dislake="1.4k" label="CW6 NEWS" title="Mother of Stefanie Rengel"/>
        <Headlaine thumbnail={img6} time="2:00 pm" like="10.8k" dislake="1.4k" label="CNN NEWS" title="World Cup: Popular items"/>
      </div>
    </div>
  );
}

export default App;
