import clsx from 'clsx';
import React from 'react'
import { RiShoppingBag2Fill } from "react-icons/ri";
import { links } from '../data/dummy';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Sidebar = ({otherClasses, setActiveMenu} ) => {

  console.log(links, 'link');
   
   const sidebarClasses=clsx('fixed bg-white min-h-screen top-0 bottom-0 p-6 w-full max-w-[288px] overflow-y-scroll',otherClasses)


  return (
    <div className={sidebarClasses}>
       <NavLink to='/'>
       <div className='flex items-center gap-2 font-extrabold italic text-slate-800 tracking-tighter relative'>
        <RiShoppingBag2Fill size={25}/>
        <span>Shoppy</span>
       </div>
       </NavLink>
      
       <div className='absolute top-1 right-1 cursor-pointer'>
        <button onClick={()=>setActiveMenu(false)}>
        <TooltipComponent content='close'>
         <IoIosCloseCircleOutline size={20}/>
        </TooltipComponent>
        </button>
       </div>

       <div className='mt-8'>
        {
          links.map((node)=>(
             <div>
              <p className='text-base font-medium uppercase text-gray-400 my-2'>{node.title}</p>
              <ul>
              {
                node.links.map(({name, icon})=>(
                  <li><NavLink to={`/${name}`} key={name} className='flex items-center gap-2 text-gray-700 dark:text-gray-200 capitalize p-2.5 text-sm rounded-lg  hover:bg-light-gray'>
                      {icon}
                      <span>{name}</span> 
                    </NavLink></li>
                ))
              }
               
              </ul>
             </div>
          ))
        }
       </div>
      
    </div>
  )
}

export default Sidebar
