import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import Testimonial from './components/Testimonial';
import NewArrival from './components/NewArrival';
import Footer from './components/Footer';
import BestSellers from './components/BestSeller';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Genre from './components/Genre/Genre';
import Book1 from './components/Books/book1';
import Book2 from './components/Books/book2';
import Book3 from './components/Books/book3';
import Book4 from './components/Books/book4';
import Book5 from './components/Books/book5';
import Book6 from './components/Books/book6';
import Book7 from './components/Books/book7';
import Book8 from './components/Books/book8';
import Book9 from './components/Books/book9';
import Book10 from './components/Books/book10';
import Book11 from './components/Books/book11';
import Book12 from './components/Books/book12';
import Book13 from './components/Books/book13';
import Book14 from './components/Books/book14';
import Book15 from './components/Books/book15';
import Book16 from './components/Books/book16';
import Book17 from './components/Books/book17';
import Book18 from './components/Books/book18';
import Book19 from './components/Books/book19';
import Book20 from './components/Books/book20';
import AboutUs from './components/AboutUs';
import Terms from './components/Terms';
import Faq from './components/FAQ';
import WishList from './components/wishlist';
import Signin from './components/Signin';
import Signup from './components/Signup';
import View from './components/ViewCart';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Main" element={<Main/>} />
          <Route path="/Testimonial" element={<Testimonial/>} />
          <Route path="/NewArrival" element={<NewArrival/>} />
          <Route path="/Footer" element={<Footer/>} />
          <Route path="/BestSellers" element={<BestSellers/>} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Genre" element={<Genre/>}/>
          <Route path="/Book1" element={<Book1/>}/>
          <Route path="/Book2" element={<Book2/>}/>
          <Route path="/Book3" element={<Book3/>}/>
          <Route path="/Book4" element={<Book4/>}/>
          <Route path="/Book5" element={<Book5/>}/>
          <Route path="/Book6" element={<Book6/>}/>
          <Route path="/Book7" element={<Book7/>}/>
          <Route path="/Book8" element={<Book8/>}/>
          <Route path="/Book9" element={<Book9/>}/>
          <Route path="/Book10" element={<Book10/>}/>
          <Route path="/Book11" element={<Book11/>}/>
          <Route path="/Book12" element={<Book12/>}/>
          <Route path="/Book13" element={<Book13/>}/>
          <Route path="/Book14" element={<Book14/>}/>
          <Route path="/Book15" element={<Book15/>}/>
          <Route path="/Book16" element={<Book16/>}/>
          <Route path="/Book17" element={<Book17/>}/>
          <Route path="/Book18" element={<Book18/>}/>
          <Route path="/Book19" element={<Book19/>}/>
          <Route path="/Book20" element={<Book20/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Terms" element={<Terms/>}/>
          <Route path="/Faq" element={<Faq/>}/>
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/" element={<Signup/>}/>
          <Route path="/View" element={<View/>}/>
          <Route path="/WishList" element={<WishList/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



