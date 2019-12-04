import React from 'react';
import { Navbar } from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';


const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Route component={TodosPage} path="/" exact />
        <Route component={AboutPage} path="/about" />
      </div>
    </BrowserRouter>
  );
}

export default App;
