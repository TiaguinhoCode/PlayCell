import { data } from 'autoprefixer';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Calendario from '../calendario/Calendario'

export const Data = () => {
  const [dropdown, setDropdown] = useState(false)

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }

  // Fazer um lógica que deixa hiden o calendario

  return (
    <>
    <button onClick={toggleDropdown} className="dataContainer flex items-center bg-white rounded-lg p-2">
      <ion-icon name="calendar-outline"></ion-icon>
      <span className="text-sm font-small negrito">Todo o período</span>
      <span className="text-sm font-small">23 maio 2019</span>
      <span className="text-sm font-small">-</span>
      <span className="text-sm font-small">13 maio 2021</span>
      <ion-icon name={dropdown ? "chevron-down-outline" : "chevron-up-outline"}></ion-icon>
      
    </button>



    </>
  );
};
