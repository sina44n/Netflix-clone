import React, { useRef, useEffect, useState } from 'react'
// import cards_data from '../assets/cards/Cards_data'
import {Link} from 'react-router-dom'





function TitleCards({title, category}) {
  
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef(null)

  const handleWheel = (event) => {
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY
  }


  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json', 
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWY3OWQ2MGNkMWM1MjJiNDJmZWZiMWRkMjkxZDMwMSIsIm5iZiI6MTc5MDQzNDk1MC40MjMsInN1YiI6IjZhYjdkZTg2NTI3YTE4N2I2NTM4NDhhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EYbOl_X1X60uarHqhBZ7r8luleAWVDUSBOCiQDW16oQ'}
};


useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${category?
  category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
 },[])



  return (

    <div className='Titlecards mt-[50px] mb-[30px]'>
        <h2 className='mb-[8px] font-bold text-[25px]'>{title ? title : "Popular on Netflix "}</h2>

        <div className='card-list flex gap-[10px] overflow-x-scroll scrollbar-hide' ref={cardsRef} onWheel={handleWheel}>
            {apiData.map((card,index)=>{
                return <Link to={`/player/${card.id}`} className='card shrink-0 relative' key={index}>
                   <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt='' className='w-[240px] object-cover rounded-[4px] cursor-pointer'/>
                   <p className='absolute bottom-[10px] right-[10px] text-white no-underline'>{card.original_title}</p>
                </Link>
            })}
        </div>

    </div>

  )
}

export default TitleCards

