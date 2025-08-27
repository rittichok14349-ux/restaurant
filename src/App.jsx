import React, { useRef } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Findstore from './pages/Findstore';

const App = () => {
  const homeRef = useRef(null);
  const findStoreRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFindStore = () => {
    findStoreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header
        onHomeClick={scrollToHome}
        onFindStoreClick={scrollToFindStore}
      />

      <div ref={homeRef}>
        <Home onFindStoreClick={scrollToFindStore} />
      </div>

      <div ref={findStoreRef} className="pt-24">
        <Findstore />
      </div>
    </>
  );
};

export default App;
