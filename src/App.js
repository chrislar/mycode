import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import {useTable} from "react";
import Componentone from './Componentone';
import Banner from './Banner';
import Forms from './Forms';
import Qoutes from './Qoutes'; 
import Paragraph from './Paragraph';
import Images from './Images';
import Tables from './Tables';
import Links from './Links';
import Lists from './Lists';
import Heading from './Heading';



function App() {
  return (
   <div>
 <Componentone/> 
 <Banner/>
 <Forms/>
 <Paragraph/>
 <Qoutes/>
 <Images/>
 <Tables/>
 <Links/>
 <Lists/>
 <Heading/>
 </div>
  );
  
 
  
}

  
export default App;

