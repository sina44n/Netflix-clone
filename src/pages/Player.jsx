import React,{useEffect,useState} from 'react'
import back_arrow_icon from '../assets/back_arrow_icon.png'
import {useParams, useNavigate} from 'react-router-dom'





function Player() {
    const {id} = useParams()
    const navigate = useNavigate()

    const [apiData, setApiData] = useState({
        name: '',
        key: '',
        published_at: '',
        typeOf: '',
    })



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json', 
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWY3OWQ2MGNkMWM1MjJiNDJmZWZiMWRkMjkxZDMwMSIsIm5iZiI6MTc5MDQzNDk1MC40MjMsInN1YiI6IjZhYjdkZTg2NTI3YTE4N2I2NTM4NDhhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EYbOl_X1X60uarHqhBZ7r8luleAWVDUSBOCiQDW16oQ'}
};


useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])






  return (
    <div className='player h-screen flex flex-col justify-center items-center'>

      <img src={back_arrow_icon} alt='' className='absolute top-[50px] left-[20px] w-[50px] cursor-pointer' onClick = {()=>navigate(-2)}/>
      <iframe width='90%' height='90%'
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen className='rounded-[10px]'></iframe>

      <div className="player-info flex items-center justify-between w-[90%]">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>

      </div>

    </div>
  )
}

export default Player