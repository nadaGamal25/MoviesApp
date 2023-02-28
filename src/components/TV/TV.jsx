import React from 'react'
import { useContext } from 'react'
import { MediaContext } from '../../Context/MediaContext'
import MediaItem from '../MediaItem/MediaItem'

export default function TV() {
  let {trendingTv} =useContext(MediaContext);
  return (<>
 
    <div className="row p-5 my-5">
      <div className="col-md-4 d-flex align-items-center">
        <div className='movie'>
          <h2 className="h4">Trending TV movies <br/>
          To watch right now</h2>
          <p className="text-muted py-2">
            watched tv movies to watch right now
          </p>
        </div>
      </div>

      {trendingTv.map((item,index)=>
    <MediaItem key={index} item={item}/>)}
    </div>
    
    
  </>)
}
