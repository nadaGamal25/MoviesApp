import { useContext } from 'react'
import { MediaContext } from '../../Context/MediaContext'
import MediaItem from '../MediaItem/MediaItem'

export default function Home() {

 let {trendingMovies,trendingTv,trendingPeople} =useContext(MediaContext);
  return (<>
  <div className="caption-home text-center min-vh-100">
    <div className="overlay-caption py-5 min-vh-100 d-flex justify-content-center align-items-center">
      <div className="">
    <h1 className=''>You Will Find All <span className='h1'>Top Trending Movies</span> Here!</h1>
    <p className='text-muted'>Track what you've watched and search for what to watch next! Plus get free premium loot!<br/>
    Watch all you want, whenever you want.</p>
    </div>
    </div>
  </div>
    <div className="row p-5 my-3">
      <div className="col-md-4 d-flex align-items-center">
        <div className='movie'>
          <h2 className="h4">Trending Movies <br/>
          To watch right now</h2>
          <p className="text-muted py-2">
            watched movies to watch right now
          </p>
        </div>
      </div>

      {trendingMovies.slice(0,10).map((item,index)=>
    <MediaItem key={index} item={item}/>)}
    </div>

    <div className="row p-5 my-3">
      <div className="col-md-4 d-flex align-items-center">
        <div className='movie'>
          <h2 className="h4">Trending TV movies <br/>
          To watch right now</h2>
          <p className="text-muted py-2">
            watched tv movies to watch right now
          </p>
        </div>
      </div>

      {trendingTv.slice(0,10).map((item,index)=>
    <MediaItem key={index} item={item}/>)}
    </div>
    
    <div className="row p-5 my-3 ">
      <div className="col-md-4 d-flex align-items-center">
        <div className='movie'>
          <h2 className="h4">Trending people <br/>
          To watch right now</h2>
          <p className="text-muted py-2">
            watched movies to watch right now
          </p>
        </div>
      </div>

      {trendingPeople.filter((person)=> person.profile_path !== null).slice(0,10).map((item,index)=>
    <MediaItem key={index} item={item}/>)}
    </div>
  </>)
}
