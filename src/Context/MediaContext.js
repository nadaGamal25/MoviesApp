import axios from "axios";
import { createContext,useEffect ,useState } from "react";

export let MediaContext =createContext('');

export default function MediaContextProvider(props){
    const [trendingMovies, setTrendingMovies] = useState([])
    const [trendingTv, setTrendingTv] = useState([])
    const [trendingPeople, setTrendingaPeople] = useState([])
    
    async function getTrending(mediaType,callBack){
      let{data} =await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=e8e1aab7d31f45510d4959926e276787`)
      callBack(data.results);
    }
  
    useEffect(()=>{
      getTrending('movie', setTrendingMovies);
      getTrending('tv',setTrendingTv);
      getTrending('person',setTrendingaPeople);
    }, []);  

    return <MediaContext.Provider value={{trendingMovies,trendingTv,trendingPeople}}>
        {props.children}
    </MediaContext.Provider>
}