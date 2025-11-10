const ItemCards = ({items})=>{
    return (
        <div>
           {
            items.map((item)=>(
                <div key={item.card.info.id}  className="p-2 m-2 border-gray-200 border-b-2 text-left">
                    <div> {item.card.info.name}</div>
                     <div> Rs.{item.card.info.price}</div>
                    </div>
            ))
           }
        </div>
    )
}

export default ItemCards;