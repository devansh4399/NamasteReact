 import RestaurantCard from "./RestaurantCard";
 import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

 let newResList=[];

  
 const Body =()=>{
    const [listOfRestaurants,setlistOfRestaurants]= useState([]);//now no initial restautant lists
    const [searchText,setSearchText]=useState("");
    const [filterRestaurant,setFilterRestaurant]=useState([]);

    console.log(listOfRestaurants);

    useEffect(()=>{
        fetchData()
    },[]);
  //making the function async to resolve the promise

  //and then awaiting for the data to fethc from the api.
    const fetchData=async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8845097&lng=77.6035522&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        //now this data comes in from of promise so needs to be converted into json

        const json= await data.json();
            setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json);
    };

    // //conditional rendering 
    // if(listOfRestaurants.length===0)
    // {
    //   return <Shimmer></Shimmer>
    // }

         return listOfRestaurants.length===0 ? (<Shimmer></Shimmer> ) : (
            <div className="body">
               <div className="filter">
                <div className="search">
                  <input type="text" className="search-box" value={searchText} onChange={(e)=>
                    {setSearchText(e.target.value);
                  }}></input>
                  <button className="search-button"
                  onClick={()=>{
                    const filteredList=listOfRestaurants.filter((res)=>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                     setFilterRestaurant(filteredList);
                   
                  }}
                  //here we will add search button to search what we type
                  >Search</button>
                </div>
                    <button className="filter-btn"
                     onClick={()=>{
                      const filteredRestaurant=filterRestaurant.filter(
                        (res)=> res.info.avgRating>4.5
                        );
                         setFilterRestaurant(filteredRestaurant);
                        console.log(filteredRestaurant);
                        
                    }
                    }>Top Rated Restaurant</button>
               </div>
               <div className="res-container">
                  {/* <RestaurantCard  resData={resList[0]}></RestaurantCard>
                  <RestaurantCard  resData={resList[1]}></RestaurantCard>
                  <RestaurantCard  resData={resList[2]}></RestaurantCard> ,
                   now rather tahn passing 0,1,2 we wiluse map funtion to pass all.*/}
                  

                   {filterRestaurant.map((restaurant)=>(
                     
                     <Link
                     key={restaurant.info.id}
                      to={"/restaurants/"+ restaurant.info.id }>
                      <RestaurantCard resData={restaurant}></RestaurantCard>
                       </Link>))}
                     
                     
               </div>
            </div>
         )
      };

      export default Body;