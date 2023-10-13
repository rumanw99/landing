import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const components = [
        {
            id: 1,
            title1: 'UNITED ARAB EMIRATES',
            title2: 'SELLANYAPP - FZCO',
            title3: 'Dubai Silicon Oasis, DDP, Building A2, Dubai, UAE Registration Number: DSO-FZCO-12283 License Number: 13550',
        },
        {
          id: 1,
          title1: 'BELGIUM',
          title2: 'SELLX Crypto Foundation SRL',
          title3: 'Beerselsestraat 32, 1651 Lot, Belgium Registration Number: 75.05.02 - 711.63 KBO/BTW Number: BE0779723810',
      },
      {
        id: 1,
        title1: 'GERMANY',
        title2: 'dbds Krypto Funding GmbH',
        title3: 'Ritterstrasse 8, 40213 Düsseldorf Registration Number: HRB 71644',
    },
    ];
    const showNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % components.length);
    };
    const showPrevSlide = () => {
        setCurrentSlide(
            (prevSlide) =>
                (prevSlide - 1 + components.length) % components.length
        );
    };

    return (
        <div className="App" style={{ position: 'relative' }}>
            <Header />
            <Slider showNextSlide={showNextSlide} showPrevSlide={showPrevSlide} />
            <Footer
                title1={components[currentSlide].title1}
                title2={components[currentSlide].title2}
                title3={components[currentSlide].title3}
            />
        </div>
    );
}

export default App;
