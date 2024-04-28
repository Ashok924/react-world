import { useEffect, useState } from "react";
import * as Resturent from "./ResturentCard";
import { fetchResturentsData } from "../utils/api"
import { CardShimmer } from "./ShimmerUi"

const searchResturent = (serachText, fliteredResturents) => {
  if(serachText){
    const filteredResturents = fliteredResturents.filter((resturent) =>
      resturent.name.toLowerCase().includes(serachText.toLowerCase())
    );
    return filteredResturents;
  }else{
    return fliteredResturents
  }
};

const Body = () => {
  const [resturents, setResturents] = useState([]);
  const [fliteredResturents, setFilterdResturent] = useState([]);
  const [serachText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    getResturentsData()
  },[])

  const getResturentsData = async () => {
    setLoading(true)
    let resturentList = await fetchResturentsData();
    setLoading(false)
    setResturents(resturentList)
    setFilterdResturent(resturentList)
  }

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="searh-input"
          placeholder="Search Here"
          value={serachText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        ></input>
        <button
          className="search-button"
          onClick={()=>{
              const data = searchResturent(serachText, fliteredResturents)
              setResturents(data)
            }
          }
        >
          Search
        </button>
      </div>
      <div className="resturent-list">
        {
          loading ? 
          <CardShimmer />
          :
          resturents.length > 0 ?
          <Resturent.ResturentCard resturentList={resturents} />
          :
          <div>No Resturents Found</div>
        }
      </div>
    </div>
  );
};

export default Body;
