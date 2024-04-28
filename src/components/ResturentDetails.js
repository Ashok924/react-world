import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchResturentDetails } from "../utils/api";
import { ImageShimmer, CardShimmer } from "./ShimmerUi"

export default ResturentDetails = () => {
  const { id } = useParams();
  const [resturent,setResturent] = useState(null);

  useEffect(() => {
    getResturentDetails();
  }, []);

  const getResturentDetails = async () => {
    let data = await fetchResturentDetails(id);
    setResturent(data)
  };

  return (
    <div>
        {
            resturent && 
            <>
                <h1>Resturent Details</h1>
                <h3>Id: {id}</h3>
                <h3>Name: {resturent.name}</h3>
                <h4>Staring: {resturent.rating}</h4>
                <img alt="image" src={resturent.image} fallback={<ImageShimmer/>}></img>
            </>
        }
        {
            !resturent && 
            <>
                <div style={{border: "1px sold black"}}>
                    <h4>Resturnt Details Loading</h4>
                    <CardShimmer />
                </div>
            </>
        }
    </div>
  );
};
