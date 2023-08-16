import React from "react";
import playcell from "../../img/playcell.png";
import MenuResponsivo from "./MenuResponsivo";


function Menu() {

    return(
        <nav id="menu" className="fixed w-full p-8 shadow ">
            <div className="m-auto flex justify-between items-center">
                <a href="#">
                    <img src={playcell} alt="PlayCell" className="w-40"/>
                </a> 
                    
                <div className="hidden md:flex items-center pr-10 transition-all ease-in duration-500">
                    <ion-icon name="key-outline"></ion-icon>
                    <a href="#" className="text-xl hover: duration-500 p-3">User</a>
                    <ion-icon size="large" name="person-circle-outline"></ion-icon>
                </div>

                <MenuResponsivo/>
            </div>

            <div className="fundo items-start shadow-md absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-2/2 w-4/5 p-4 text-center rounded-lg">
                <div className="flex">

                    <a href="#" className="flex flex-col">
                        <span>
                            <ion-icon name="calendar-outline"></ion-icon>
                        </span>
                        <p>Calendário</p>
                    </a>

                    <a href="#" className="flex flex-col">
                        <span>
                            <ion-icon name="hammer-outline"></ion-icon>
                        </span>
                        <p>Operações</p>
                    </a>

                    <a href="#" className="flex flex-col">
                        <span>
                            <ion-icon name="server-outline"></ion-icon>
                        </span>
                        <p>Servidores</p>
                    </a>
                    
                    <a href="#" className="flex flex-col">
                        <span>
                            <ion-icon name="bar-chart-outline"></ion-icon>
                        </span>
                        <p>Relatórios</p>
                    </a>

                    <a href="#" className="flex flex-col">
                        <span>
                            <ion-icon name="bag-check-outline"></ion-icon>
                        </span>
                        <p>Relatórios</p>
                    </a>
                    
                    <a href="#" className="flex flex-col">
                        <span>
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <p>Relatórios</p>
                    </a>
                </div>
            </div>
        </nav> 
    );
}

export default Menu;