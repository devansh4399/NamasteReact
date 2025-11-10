import ItemCards from "./ItemCards";
import itemCards from "./ItemCards";

const RestaurantCategory = ({data})=>{
    return (
        <div className="w-6/12 mx-auto py-4 shadow-lg ">
            <div className="flex justify-between">
            <span>{data.title} ({data.itemCards.length})</span>
          {  /* it will be like what it is writtend down*/}
           <span>Recommneded</span>
           <span>⬇️</span>
           </div>
           
            
           {<ItemCards items={data.itemCards}/>
           /*here we calling itemCards to shwo the inside of all accordians(body of accordains and we a
           sendingthe itemCards where it iwll be received by ItemCards Comp and we will displat 
           dif items) so we are 
           sending the data to ItemCard*/}
           
        </div>
    )
};

export default RestaurantCategory;