
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { useParams } from "react-router-dom";
import { MENU_LINK } from "../utils/contant";
import useRestaunrantMenu from "../utils/useRestaurantMenu";
import resList from "../utils/mockData";
import RestaurantCategory from "./RestaurantCategory";


 const RestaurantMenu=()=>{

    const{resId}=useParams();

    // const[resInfo,setresInfo]=useState(null);
    // useEffect(()=>{
    //     fetchData();},[]
    // );


    // const fetchData =async ()=>{
    //     const data=await fetch(MENU_LINK+resId);
    //     const json=await data.json();
    //     setresInfo(json.data);
    //     console.log(json);
    // };

    const resInfo=useRestaunrantMenu(resId);
     if (!resInfo) {
        return <Shimmer />;
    }
         const {itemCards}=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
         console.log(itemCards);

          const categories=resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>
              c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
            console.log(categories);
   return (
<div className="menu">
    <h1>{resInfo?.cards[2]?.card.card.info.name}</h1>
    <h2>Average Rating:{resInfo?.cards[2]?.card.card.info.avgRating}</h2>
    <h3>Cost for Two:{resInfo?.cards[2]?.card.card.info.costForTwoMessage}</h3>
    <h4>{resInfo?.cards[2]?.card.card.info.cuisines.join(",")}</h4>
   {/* here we will create our accrodian i.e. before the menu */}

   
  {
    categories.map((category)=>(
        <RestaurantCategory data={category?.card?.card}/>
    ))
  }
    <h2>Menu</h2>
    <ul>
        {itemCards.map((items)=>
        
            <li key={items.card.info.id}> 
            { items.card.info.name} - Rs.  { items.card.info.price/100}</li>
        )}
        <li key={itemCards[0].card.info.id}></li>
        {itemCards[0].card.info.name}
        {/* <li>{itemCards[0].card.info.name}</li>
         <li>{itemCards[1].card.info.name}</li>
          <li>{itemCards[2].card.info.name}</li>
          <li>{itemCards[3].card.info.name}</li> */}
          
    </ul>
</div>
    )
};

export default RestaurantMenu;
