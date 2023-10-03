import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = (items) => {
  items = items.items;
  // console.log(items, "------------>>>>>>>>>>>>>")
  //console.log(items?.items[2]?.card?.info?.name);
  //console.log(items?.items[2]?.card?.info?.price/100);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an Action
    dispatch(addItem(item));
  };
  return (
    <>
      {items.map((item, index) => {
        return (
          <div
            data-testid="foodsItems"
            key={index}
            className="p-2 flex m-2 text-left border-gray-200 border-b-2 "
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-semibold">{item.card.info.name}</span>
                <p className="font-sm">
                  {" "}
                  ₹-{" "}
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice}
                </p>
              </div>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
            <div className="w-40 p-2">
              <img src={CDN_URL + item.card.info.imageId} />
              <div className="">
                <button
                  className="p-2 rounded-lg  text-white bg-black mx-10 shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ItemList;
