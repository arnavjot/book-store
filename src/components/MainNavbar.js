import React, { useState } from 'react';
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
    <div className="bg-gradient-to-r from-teal-900 to-teal-400 shadow fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img src='https://icons.veryicon.com/png/o/business/colorful-office-icons/book-52.png' style={{ width: 40, height: 40 }} alt="Book Icon"></img>
            <h1 style={{ color: 'white', fontSize: '25px', fontWeight: 'bolder' }}>BOOKHUB</h1>
          </div>

          <div className="hidden sm:flex sm:items-center">
            <a href="/Home" className="text-white text-sm font-semibold hover:text-black mr-4">Home</a>
            <a href="/Genre" className="text-white text-sm font-semibold hover:text-black mr-4">Genre</a>
            <a href="/AboutUs" className="text-white text-sm font-semibold hover:text-black mr-4">About Us</a>
            <a href="/Contact" className="text-white text-sm font-semibold hover:text-black">Contact Us</a>
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
        </div>
      </div>
    </div>
  );
}

export default Navbar;
