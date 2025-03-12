import './App.css';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <h1>hello world</h1>
      <Footer />
    </div>
  );
}

export default App;
