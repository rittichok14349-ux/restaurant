import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Findstore from './pages/Findstore';
import SearchRestaurants from './pages/SearchRestaurants';
import Footer from './components/Footer';
import RestaurantDetail from './pages/RestaurantDetail';

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
    <Router>
      <Header
        onHomeClick={scrollToHome}
        onFindStoreClick={scrollToFindStore}
      />

      <Routes>
        {/* หน้าแรก */}
        <Route
          path="/"
          element={
            <>
              <div ref={homeRef}>
                <Home onFindStoreClick={scrollToFindStore} />
              </div>

              <div ref={findStoreRef} className="pt-24">
                <Findstore />
              </div>

              <SearchRestaurants />
              <Footer />
            </>
          }
        />

        {/* หน้ารายละเอียดร้าน */}
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
