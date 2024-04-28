import { ImageShimmer } from "./ShimmerUi";
import { Link } from "react-router-dom"
export const ResturentCard = ({resturentList}) => {
  return (
    <>
      <div className="card-container">
        {
          resturentList.map((resturent,index)=>{
            return (
              <div className="card" key={index}>
                <Link to={"/resturent/"+index}>
                  <img alt="image" src={resturent.image} fallback={<ImageShimmer/>}></img>
                  <h3>{resturent.name}</h3>
                  <h3>{resturent.cusines.join(",")}</h3>
                  <h4>{resturent.rating}</h4>
                </Link>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default ResturentCard;
