import React from "react";
import playcell from "../img/playcell.png";

function Menu() {
    return(
        <nav className="menu p-5 shadow md:flex md:items-center md:justify-between">
            <div className="flex justify-bteween items-center">
                <span className="text-2xl cursor-pointer">
                    <a>
                        <img src={playcell} alt="PlayCell" className="w-40"/>
                    </a>
                    <img className="h-10 inline" />
                </span>
            </div>

            <ul className="md:flex md:items-center z-[-1] md: z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                <li className="mx-4 my-6 md:my-0">
                    <a href="#" className="text-xl hover:text-cyan-500 duration-500">Home</a>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <a href="#" className="text-xl hover: duration-500">Produtos</a>
                </li>
            </ul>
        </nav> 
    );
}

export default Menu;