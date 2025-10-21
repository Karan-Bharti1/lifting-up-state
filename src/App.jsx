import { useState } from "react";
import Header from "./components/Header";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-amber-50">
        <Header />
        <div className="flex justify-between">
          <h1 className="text-center pt-4 text-2xl font-bold mx-8">Menu </h1>
          <div className="pt-4">
            <button
              className="mx-8 p-2 rounded-xl border "
              onClick={() => setDark(!dark)}
            >
              {dark ? <MdDarkMode /> : <CiLight />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
