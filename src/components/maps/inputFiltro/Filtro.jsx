import React, { useState } from 'react';

export const Filtro = () => {  
    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }

    return (
        <>
            <button onClick={toggleDropdown} className="flex items-center bg-transparent" type="button">
                <ion-icon name={dropdown ? "chevron-down-outline" : "funnel-outline"} className="text-white"></ion-icon>
                <span className="text-sm font-small negrito">Adicionar filtro</span>     
            </button>
            
            {dropdown && (
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                        <li>
                            <div className="flex items-center">
                                <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
                                <label for="checkbox-item-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input checked id="checkbox-item-2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
                                <label for="checkbox-item-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input id="checkbox-item-3" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
                                <label for="checkbox-item-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}
