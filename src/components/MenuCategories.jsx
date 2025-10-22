import React, { useState } from "react";
import Category from "./Category";

const MenuCategories = ({ menu }) => {
  const [showIndex, setshowIndex] = useState(null);
  return (
    <>
      <div className="py-4">
        {menu.map((category, index) => (
          <div key={category} className="my-6">
            <Category
              category={category}
              open={index === showIndex && true}
              setShowIndex={() =>
                showIndex!==index ? setshowIndex(index) : setshowIndex(null)
              }
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuCategories;
