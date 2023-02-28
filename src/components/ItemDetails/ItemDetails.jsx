import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ItemDetails() {
    // let {id, media_type} = useParams();
    let {id, media_type}= useParams()
    const [itemDetails ,setItemDetails] =useState({})

    async function getItemDetails(id, mediatype){
        let {data}=await axios.get(`https://api.themoviedb.org/3/${mediatype}/${id}?api_key=e8e1aab7d31f45510d4959926e276787`)
        setItemDetails(data);
        console.log(data)
    }

    useEffect(()=>{
        getItemDetails(id ,media_type);
    },[])

  return (
    <>
    <div className="container p-4 my-5">
    <div className="row p-4">
        <div className="col-md-4 col-sm-4">
        {itemDetails.poster_path?<img src={'https://image.tmdb.org/t/p/w500/'+ itemDetails.poster_path} className='w-100' alt="" />
            :<img src={'https://image.tmdb.org/t/p/w500/'+ itemDetails.profile_path} className='w-100' alt="" />}
        </div>
        <div className="col-md-8 col-sm-8">
            <h2>{itemDetails.title} {itemDetails.name}</h2>
            <p className="text-muted py-2">{itemDetails.overview}</p>
            <p className="text-muted py-2">{itemDetails.biography}</p>
            {itemDetails.birthday?<h6 className='py-2 txtgrey'>Birthday : <span>{itemDetails.birthday}</span></h6>:''}
            {itemDetails.place_of_birth?<h6 className='py-2 txtgrey'>place of birth : <span>{itemDetails.place_of_birth}</span></h6>:''}
            {itemDetails.vote_average?<h6 className='py-2 txtgrey'>Vote average : <span>{itemDetails.vote_average?.toFixed(2)}</span> </h6>:''}
            {itemDetails.vote_count?<h6 className='py-2 txtgrey'>Vote count : <span>{itemDetails.vote_count?.toFixed(2)}</span> </h6>:''}
            <a className='btn btn-sign my-3' target="_blank" href={itemDetails.homepage}>Watch It</a>

        </div>
    </div>
    </div>
    </>
  )
}
