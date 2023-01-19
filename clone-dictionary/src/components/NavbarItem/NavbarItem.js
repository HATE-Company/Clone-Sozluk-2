import React from 'react'
import { Styled } from './NavbarItem.styled'
import 'flowbite';


const NavbarItem = () => {
  return (
    <Styled>
        <aside className='asides' aria-label="Sidebar">
        <div className="px-3 py-4 overflow-y-auto rounded  ">
            <ul className="space-y-2">
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal">
                    <span className="ml-3">Dashboard</span>
                    </a>
                </li>
                <li>
                    <button type="button" className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>E-commerce</span>
                        <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <ul id="dropdown-example" className="hidden py-2 space-y-2">
                        <li>
                            <a href="#" className="flex w-full p-2 text-base font-normal  transition duration-75 rounded-lg pl-11 group ">Products</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group ">Billing</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center w-full p-2 text-base font-normal  transition duration-75 rounded-lg pl-11 group">Invoice</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal">
                    <span className="ml-3">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal">
                    <span className="ml-3">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal">
                    <span className="ml-3">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal">
                    <span className="ml-3">Dashboard</span>
                    </a>
                </li>
            </ul>
        </div>
        </aside> 

    </Styled>
  )
}

export default NavbarItem