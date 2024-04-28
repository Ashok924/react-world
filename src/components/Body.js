import { useEffect, useState } from "react";
import * as Resturent from "./ResturentCard";
import { resturentList } from "../../constants";

const searchResturent = (serachText, resturents) => {
  if(serachText){
    const filteredResturents = resturentList.filter((resturent) =>
      resturent.name.includes(serachText)
    );
    return filteredResturents;
  }else{
    return resturentList
  }
};

const Body = () => {
  const [resturents, setResturents] = useState(resturentList);
  const [serachText, setSearchText] = useState("");

  // useEffect(()=>{
  //   if(!serachText){
  //     setResturents(resturentList)
  //   }
  // },[serachText])

  console.log(serachText)

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="searh-input"
          placeholder="Search Here"
          value={serachText}
          onChange={(e) => {
            console.log(e.target.value)
            setSearchText(e.target.value)
          }}
        ></input>
        <button
          className="search-button"
          onClick={()=>{
            console.log(serachText)
              const data = searchResturent(serachText, resturents)
              setResturents(data)
            }
          }
        >
          Search
        </button>
      </div>
      <div className="resturent-list">
        <Resturent.ResturentCard resturentList={resturents} />
      </div>
    </div>
  );
};

export default Body;
