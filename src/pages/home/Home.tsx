import React from 'react';
import HomeImageScroll from '../../component/HomeImageScroll';
import Footer from '../../component/Footer';
import SearchBar from '../../component/SearchBar';


function Home() {
  return (  
    <div>
      <HomeImageScroll />
      <SearchBar />
      <Footer  />
    </div>
  )
}

export default Home;