import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

// 6_Tfpx-3X46CASjkTujMjHw097T4YH-g8uQR9XODBO0
// _A1aX7nP0HA-oNP8ktMLi2VBiLCqvi5Spb-AyQ3rrYo
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    setLoading(true);
    let url = `${mainUrl}?client_id=6_Tfpx-3X46CASjkTujMjHw097T4YH-g8uQR9XODBO0`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return <h2>stock photos starter</h2>
}

export default App
