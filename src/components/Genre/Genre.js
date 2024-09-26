import React, { useState } from 'react';
import Section from './Section';
import GenreItems from './GenreItems';
import Section1 from './Section1';
import GenreItems1 from './GenreItems1';
import Section2 from './Section2';
import GenreItems2 from './GenreItems2';
import Section3 from './Section3';
import GenreItems3 from './GenreItems3';
import Section4 from './Section4';
import GenreItems4 from './GenreItems4';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // List of books and their paths
  const books = [
    { name: "I Love You", path: "/Book1" },
    { name: "Love in the time of cholera", path: "/Book2" },
    { name: "Women IN love", path: "/Book3" },
    { name: "Those who are loved", path: "/Book4" },
    { name: "adventure of sherlock holmes", path: "/Book5" },
    { name: "the adventure of huckleberry finn", path: "/Book6" },
    { name: "life and adventure of robinson Crusoe", path: "/Book7" },
    { name: "the strangeworlds", path: "/Book8" },
    { name: "savarkar", path: "/Book9" },
    { name: "technofeudalism", path: "/Book10" },
    { name: "Donald trump", path: "/Book11" },
    { name: "indian politics", path: "/Book12" },
    { name: "mr gum and jerry tree", path: "/Book13" },
    { name: "adventure series", path: "/Book14" },
    { name: "burnt cottage", path: "/Book15" },
    { name: "harry potter", path: "/Book16" },
    { name: "cloud atlas", path: "/Book17" },
    { name: "god of small things", path: "/Book18" },
    { name: "discover your destiny", path: "/Book19" },
    { name: "Rendezevous with rama", path: "/Book20" },
  ];

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Find the book that matches the search query
    const foundBook = books.find(book => book.name.toLowerCase() === searchQuery.toLowerCase());
    if (foundBook) {
      navigate(foundBook.path);
    } else {
      alert('Book not found!');
    }
  };

  // To search when the enter key is pressed
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-gray-100 font-sans w-full min-h-screen m-0">
      <div className="bg-gradient-to-r from-teal-900 to-teal-400 shadow fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <img src='https://icons.veryicon.com/png/o/business/colorful-office-icons/book-52.png' style={{ width: 40, height: 40 }} alt="Book Icon" />
              <h1 style={{ color: 'white', fontSize: '25px', fontWeight: 'bolder' }}>BOOKHUB</h1>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <a href="/Home" className="text-white text-sm font-semibold hover:text-black mr-4">Home</a>
              <a href="/Genre" className="text-white text-sm font-semibold hover:text-black mr-4">Genre</a>
              <a href="/AboutUs" className="text-white text-sm font-semibold hover:text-black mr-4">About Us</a>
              <a href="/Contact" className="text-white text-sm font-semibold hover:text-black mr-4">Contact Us</a>
            </div>

            {/* Search bar */}
            <div className="flex items-center">
            <input
              type="text"
              placeholder="Search books"
              value={searchQuery}
              onChange={handleSearchInputChange}
              onKeyPress={handleKeyPress}
              className="border border-gray-300 rounded-md px-2 py-1 mr-4"
            />
            <button onClick={handleSearch} className="bg-white text-gray-800 font-semibold py-1 px-4 rounded-md hover:bg-gray-100">Search</button>
          </div>

            <div className="sm:hidden cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12.9499909,17 C12.7183558,18.1411202 11.709479,19 10.5,19 C9.29052104,19 8.28164422,18.1411202 8.05000906,17 L3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L8.05000906,16 C8.28164422,14.8588798 9.29052104,14 10.5,14 C11.709479,14 12.7183558,14.8588798 12.9499909,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L12.9499909,17 Z M18.9499909,12 C18.7183558,13.1411202 17.709479,14 16.5,14 C15.290521,14 14.2816442,13.1411202 14.0500091,12 L3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L14.0500091,11 C14.2816442,9.85887984 15.290521,9 16.5,9 C17.709479,9 18.7183558,9.85887984 18.9499909,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L18.9499909,12 Z M9.94999094,7 C9.71835578,8.14112016 8.70947896,9 7.5,9 C6.29052104,9 5.28164422,8.14112016 5.05000906,7 L3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 L5.05000906,6 C5.28164422,4.85887984 6.29052104,4 7.5,4 C8.70947896,4 9.71835578,4.85887984 9.94999094,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L9.94999094,7 Z M7.5,8 C8.32842712,8 9,7.32842712 9,6.5 C9,5.67157288 8.32842712,5 7.5,5 C6.67157288,5 6,5.67157288 6,6.5 C6,7.32842712 6.67157288,8 7.5,8 Z M16.5,13 C17.3284271,13 18,12.3284271 18,11.5 C18,10.6715729 17.3284271,10 16.5,10 C15.6715729,10 15,10.6715729 15,11.5 C15,12.3284271 15.6715729,13 16.5,13 Z M10.5,18 C11.3284271,18 12,17.3284271 12,16.5 C12,15.6715729 11.3284271,15 10.5,15 C9.67157288,15 9,15.6715729 9,16.5 C9,17.3284271 9.67157288,18 10.5,18 Z"/>
              </svg>
            </div>
          </div>

          <div className="block sm:hidden bg-white border-t-2 py-2">
            <div className="flex flex-col">
              <a href="./Home" className="text-white text-sm font-semibold hover:text-purple-600 mb-1">Products</a>
              <a href="#" className="text-white text-sm font-semibold hover:text-purple-600 mb-1">Genre</a>
              <a href="#" className="text-white text-sm font-semibold hover:text-purple-600 mb-1">BLogs</a>
              <a href="/Contact" className="text-white text-sm font-semibold hover:text-purple-600 mb-1">Contact Us</a>
              <div className="flex justify-between items-center border-t-2 pt-2">
                <a href="#" className="text-white text-sm font-semibold hover:text-purple-600 mr-4">Sign in</a>
                <a href="#" className="text-white text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section />
      <GenreItems />
      <Section1 />
      <GenreItems1 />
      <Section2 />
      <GenreItems2 />
      <Section3 />
      <GenreItems3 />
      <Section4 />
      <GenreItems4 />

      <Footer />
    </div>
  );
}

export default Navbar;
