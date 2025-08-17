import { FOOD_LINK } from "../utils/contant";

const RestaurantCard = (props) =>{


            const {resData}=props;
            return (
               <div className="res-card">
                  <img alt-tab="res-logo" className="res-logo" src={FOOD_LINK+resData.info.cloudinaryImageId}></img>
                  <h3>{resData.info.name}</h3>
                  <h4>{resData.info.cuisines.join(",")}</h4>
                  <h5>{resData.info.costForTwo}</h5>
                  <h6>{resData.info.sla.deliveryTime} minutes</h6>
               </div>
            )
         };

         export default RestaurantCard;