import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

// 6_Tfpx-3X46CASjkTujMjHw097T4YH-g8uQR9XODBO0
// _A1aX7nP0HA-oNP8ktMLi2VBiLCqvi5Spb-AyQ3rrYo
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    setLoading(true);
    let url = `${mainUrl}${clientID}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input type='text' placeholder='search' className='form-input' />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          {photos.map((image, index) => {
            return <Photo key={image.id} {...image} />
          })}
        </div>
        {loading && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  );
}

export default App
