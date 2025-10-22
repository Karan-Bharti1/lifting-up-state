
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import Item from "./Item";
const Category = ({ category,open,setShowIndex }) => {
  const handleClick=()=>{
setShowIndex()
  }

  return (
    <>
      <div className="border p-4">
        <div className="flex justify-between ">
          <p className="text-xl font-bold">{category.category}</p>
          <button className="pr-4 text-xl" onClick={handleClick}>
            {open ? <MdExpandLess /> : <MdExpandMore />}
          </button>
        </div>

        {open &&
          category.items.map((i) => (
            <div key={i.dishName}>
              <Item
                dishName={i.dishName}
                photoUrl={i.photoUrl}
                description={i.description}
              />
            </div>
          ))}
      </div>
    </>
  );
};
export default Category;
