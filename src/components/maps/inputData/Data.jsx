import React, { useState } from 'react';
import Calendar from 'react-calendar';

export const Data = () => {
  const [dropdown, setDropdown] = useState(false);
  const [selecionaData, setSelecionaDatan] = useState(new Date());
  const [dataInicial, setdataInicial] = useState("23 maio 2019");
   

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }


  // Formatação da Data
  const formatoData = (date) => {
    const opcao = {year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString('pt-BR', opcao);
  }

  // Função de ouvir 
  const handleData = (date) => { 
    const formatacaoData = formatoData(date);
    setdataInicial(formatacaoData);
    setSelecionaDatan(date)

    console.log(dataInicial);
  }

  const setaEsquerda = <ion-icon name="caret-back-outline"></ion-icon>
  const setaDireita = <ion-icon name="caret-forward-outline"></ion-icon>

  return (
    <>
      <button onClick={toggleDropdown} className="dataContainer flex items-center bg-white rounded-lg p-2">
        <ion-icon name="calendar-outline"></ion-icon>
        <span className="text-sm font-small negrito">Todo o período</span>
        <span className="text-sm font-small">{dataInicial}</span>
        <span className="text-sm font-small">-</span>
        <span className="text-sm font-small">13 maio 2021</span>
        {dropdown ? (
          <ion-icon name="chevron-down-outline"></ion-icon>
          ) : (
            <ion-icon name="chevron-up-outline"></ion-icon>
          )}
      </button>
      
      {dropdown && (
        <div id="CalendarioContainer" className="">
          <Calendar
            prev2Label={setaEsquerda}
            next2Label={setaDireita}
            onChange={handleData} value={selecionaData}
          />
        </div>
      )}
    </>
  );
};
