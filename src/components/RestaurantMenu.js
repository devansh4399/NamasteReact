import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
 const RestaurantMenu=()=>{


    const[resInfo,setresInfo]=useState(null);
    useEffect(()=>{
        fetchData();},[]
    );


    const fetchData =async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8845097&lng=77.6035522&restaurantId=167101&catalog_qa=undefined&query=Biryani&submitAction=ENTER");
        const json=await data.json();
        setresInfo(json.data);
        console.log(json);
    };
        const {itemCards}=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    return resInfo===null?<Shimmer></Shimmer>:(
<div className="menu">
    <h1>{resInfo?.cards[2]?.card.card.info.name}</h1>
    <h2>Average Rating:{resInfo?.cards[2]?.card.card.info.avgRating}</h2>
    <h3>Cost for Two:{resInfo?.cards[2]?.card.card.info.costForTwoMessage}</h3>
    <h4>{resInfo?.cards[2]?.card.card.info.cuisines.join(",")}</h4>
    <h2>Menu</h2>
    <ul>
        <li>{itemCards[0].card.info.name}</li>
         <li>{itemCards[1].card.info.name}</li>
    </ul>
</div>
    )
};

export default RestaurantMenu;


