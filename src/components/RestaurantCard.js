import { useContext } from "react";
import { FOOD_LINK } from "../utils/contant";
import userContext from "../utils/UserContext";

const RestaurantCard = (props) =>{

   const handleAddItem=()=>{

   };

   const {loggedInUser}=useContext(userContext);
   console.log(loggedInUser);


            const {resData}=props;
            console.log(resData);
            return (
               <div className="res-card">
                  <img alt-tab="res-logo" className="res-logo" src={FOOD_LINK+resData.info.cloudinaryImageId}></img>
                  <h3>{resData.info.name}</h3>
                  <h4>{resData.info.cuisines.join(",")}</h4>
                  <h5>{resData.info.costForTwo}</h5>
                  <h6>{resData.info.sla.deliveryTime} minutes</h6>
                  <h6>{loggedInUser}</h6>
               </div>
               
            )
         };

         export const withGoodReview=(RestaurantCard)=>{
    //returning a componenet so added arrow function
            return (props)=>{
               //return piece of js
               return(
                     <div>
                        <span className="tag">Good Restaurant</span>
                        <RestaurantCard {...props}/>
                     </div>
               );
            };
         };

         export default RestaurantCard;