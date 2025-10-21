import { useState } from "react";
import Header from "./components/Header";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import restaurantData from "../data";
import { FaStar } from "react-icons/fa";
import MenuCategories from "./components/MenuCategories";
function App() {
  const [dark, setDark] = useState(false);
  const { restaurantName, menu, restaurantRating } = restaurantData;
  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-amber-950 text-gray-800 dark:text-amber-500 ">
        <Header />
        <div className="mx-20">
          <div className="flex justify-between">
            <h1 className="text-center pt-4 text-3xl font-bold mx-8">
              {restaurantName}{" "}
            </h1>
            <div className="pt-4">
              <span className="font-bold">{restaurantRating} ⭐</span>
              <button
                className="mx-8 p-2 rounded-xl border cursor-pointer"
                onClick={() => setDark(!dark)}
              >
                {dark ? <MdDarkMode /> : <CiLight />}
              </button>
            </div>
          </div>
          <MenuCategories menu={menu} />
        </div>
      </div>
    </div>
  );
}

export default App;
