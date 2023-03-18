import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Restodetails from './Components/Restodetails'

function App() {
  return (
    <Router>

      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<Restodetails />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>

    // <div className="App">

    //   <Header/>
    //   <Container>
    //     <Home/>
    //   </Container>
    //   <Footer/>
    // </div>
  );
}

export default App;
