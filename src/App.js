import React, {Component} from 'react';
import Header from './components/Header';
import AlbumExample from './components/AlbusExample';
import Thumbnail from './components/Thumbnail';
import Footer from './components/Footer'

class App extends Component {
 render(){
   return(
     <div>
      <Header/>
      <AlbumExample/>
      <Thumbnail/>
      <Footer/>
    </div>
   )
 }
}

export default App;
