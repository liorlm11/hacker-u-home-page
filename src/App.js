import React from 'react';
import Header from './components/Header';
import Navbar1 from './components/Navbar1';
import Banner from './components/Banner';
import OpeningModal from './components/OpeningModal';
import Courses from './components/Courses';
import Advantages from './components/Advantages';
import Bottom from './components/Bottom';

const App = () => {
  return (
    <div>
      <OpeningModal />
      <Header />
      <Navbar1 />
      <Banner />
      <Courses />
      <Advantages />
      <Bottom />
    </div>
  )
}

export default App;
