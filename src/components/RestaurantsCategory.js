import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantsCategory = (data) => {
  //console.log(data.data.itemCards);
  //console.log(data);
  const [showItems, setShowItems] = useState()

  const handleClick = ()=>{
    setShowItems(!showItems)
  }
  return (
    <div>
      <div className="w-6/12 p-4 bg-gray-50 m-auto shadow-md my-4">
        <div className="flex justify-between cursor-pointer px-4" onClick={handleClick} >
          <span className="text-lg font-bold">
            {data.data.title}({data.data.itemCards.length})
          </span>
          <span>🔻</span>
          {/* */}
    
        </div>
{showItems && <ItemList items={data?.data?.itemCards} />
}      </div>
    </div>
  );
};
export default RestaurantsCategory;
