import React from 'react'
import { Styled } from './User.styled'
import logo from '../images/hateLogo.svg'
import 'flowbite';

const User = () => {
  return (
    <Styled>
      <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="user-icon-btn flex mx-3 text-sm rounded-full md:mr-0 " type="button">
        <span className="material-symbols-outlined">person</span>
        <span class="material-symbols-outlined">expand_more</span>
      </button>

      <div id="dropdownAvatar" className="user-dropdown z-10 hidden divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Hazal Yılmaz</div>
            <div className="font-medium truncate">xgravellx</div>
          </div>
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
          </ul>
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </div>
      </div>


    </Styled>
  )
}

export default User