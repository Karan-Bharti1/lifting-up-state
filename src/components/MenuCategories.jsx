import React from "react";
import Category from "./Category";

const MenuCategories = ({ menu }) => {
  return (
    <>
    <div className="py-4">
      {menu.map((category) => (
        <div key={category} className="my-6">
         <Category category={category}/>
        </div>
      ))}
      </div>
    </>
  );
};

export default MenuCategories;
