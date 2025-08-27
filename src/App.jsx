// App.jsx
import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Findstore from './pages/Findstore';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Findstore />
      {/* อาจมี Header, Footer หรืออื่น ๆ */}
    </div>
  );
}

export default App;
