 import RestaurantCard from "./RestaurantCard";
 import resList from "../utils/mockData";
import { useState } from "react";
 

 let newResList=[];

  
 const Body =()=>{
    const [listOfRestaurants,setlistOfRestaurants]= useState(resList);


         return (
            <div className="body">
               <div className="filter">
                    <button className="filter-btn"
                     onClick={()=>{
                      const filteredRestaurant=listOfRestaurants.filter(
                        (res)=> res.info.avgRating>4.4
                        );
                         setlistOfRestaurants(filteredRestaurant);
                        console.log(filteredRestaurant);
                    }
                    }>Top Rated Restaurant</button>
               </div>
               <div className="res-container">
                  {/* <RestaurantCard  resData={resList[0]}></RestaurantCard>
                  <RestaurantCard  resData={resList[1]}></RestaurantCard>
                  <RestaurantCard  resData={resList[2]}></RestaurantCard> ,
                   now rather tahn passing 0,1,2 we wiluse map funtion to pass all.*/}
                  

                   {listOfRestaurants.map((restaurant)=>{
                     return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>})}
                     
               </div>
            </div>
         )
      };

      export default Body;