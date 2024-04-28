

export const ResturentCard = ({resturentList}) => {
  return (
    <>
      <div className="card-container">
        {
          resturentList.map((resturent,index)=>{
            return (
              <div className="card" key={index}>
                <img alt="image" src={resturent.image}></img>
                <h3>{resturent.name}</h3>
                <h3>{resturent.cusines.join(",")}</h3>
                <h4>{resturent.rating}</h4>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default ResturentCard;
