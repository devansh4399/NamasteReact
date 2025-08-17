 import RestaurantCard from "./RestaurantCard";
 import resList from "../utils/mockData";
 

 let newResList=[];

  
 const Body =()=>{
         return (
            <div className="body">
               <div className="filter">
                    <button className="filter-btn" onClick={()=>{
                      newResList=resList.filter((items)=> 
                         items.info.avgRating>4.5
                        );
                        console.log(newResList);
                    }
                    }>Top Rated Restaurant</button>
               </div>
               <div className="res-container">
                  {/* <RestaurantCard  resData={resList[0]}></RestaurantCard>
                  <RestaurantCard  resData={resList[1]}></RestaurantCard>
                  <RestaurantCard  resData={resList[2]}></RestaurantCard> ,
                   now rather tahn passing 0,1,2 we wiluse map funtion to pass all.*/}
                  

                   {resList.map((restaurant)=>{
                     return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>})}
                     
               </div>
            </div>
         )
      };

      export default Body;