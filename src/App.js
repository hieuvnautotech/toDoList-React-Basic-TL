import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Fragment } from 'react';
import Todos from './components/Todos';


const App = () => {
  return (
    <Fragment>
        <Header/>
        <Todos/>
    </Fragment>
    
      
    
  );
};

export default App;
