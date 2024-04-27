import React from "react";
import "./App.css";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { IoAlertCircleSharp, IoSettingsOutline } from "react-icons/io5";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, ThemeSetting, Sidebar, footer } from "./components";
import  {Ecommerce, Employees, Kanbon, Orders, Financial, Editor, Area, Bar, Pie, ColorPicker, ColorMapping, Pyramid, Customer, Line, Calender, Stacked} from './pages'
import clsx from "clsx";
import { useStatecontext } from "./contexts/ContextProvider";

const App = () => {
  const {activeMenu, setActiveMenu} = useStatecontext()

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed bottom-5 right-10">
            <TooltipComponent content="settings" position="center">
              <button
                type="button"
                className="text-2xl text-white p-2 bg-blue-500 rounded-full"
              >
                <IoSettingsOutline />
              </button>
            </TooltipComponent>
          </div>

          {/* {activeMenu ? (
            <div className="">side bar</div>
          ) : (
            <div className="w-full min-w-[300px] dark:bg-main-bg fixed">side bar w-0</div>
          )} */}
          {
            activeMenu &&  <Sidebar otherClasses={clsx(activeMenu? 'w-full': 'w-0')} setActiveMenu={setActiveMenu}/>
          }

          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static dark:bg-main-dark-bg navbar w-full">
              navbar
            </div>
          </div>

          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce/>}/>
              <Route path="/ecommerce" element={<Ecommerce/>}/>
              {/* Pages */}
              <Route path="/orders" element={<Orders/>}/>
              <Route path="/employees" element={<Employees/>}/>
              <Route path="/customers" element={<Customer/>}/>
              {/* App */}
              <Route path="/kanbon" element={<Kanbon/>}/>
              <Route path="/editor" element={<Editor/>} />
              <Route path="/calender" element={<Calender/>}/>
              <Route path="/color-piker" element={<ColorPicker/>}/>
              {/* Chart */}
              <Route path="/line" element={<Line/>}/>
              <Route path="/area" element={<Area/>}/>
              <Route path='/bar' element={<Bar/>} />
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/financial" element={<Financial/>}/>
              <Route path='/color-mapping' element={<ColorMapping/>}/>
              <Route path="/pyramid" element={<Pyramid/>}/>
              <Route path="/stacked" element={<Stacked/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
