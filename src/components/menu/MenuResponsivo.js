import { useState } from 'react';

function MenuResponsivo() {
    const [menuAbrindo, setMenuAbrindo] = useState('menu-outline');
    const [ativa, setAtiva] = useState(1);

    const ativarDesativar = () => {
        if (ativa === 1) {
            setAtiva(0);
            setMenuAbrindo('close-outline');
        } else {
            setAtiva(1);
            setMenuAbrindo('menu-outline');
        }
    }

    return (
        <button
            onClick={ativarDesativar}
            className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none group"
        >
            <ion-icon id="ativar" size="large" name={menuAbrindo}></ion-icon>
            <div className="absolute top-0 right h-screen w-8/12 bg-white border transform opacity-0 group-focus:right-0 group-focus:opacity:-100 transition-all duration-300">
                <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                    <li className="py-4 px-6 w-full">Calendário</li>
                    <li className="py-4 px-6 w-full">Operações</li>
                    <li className="py-4 px-6 w-full">Servidores</li>
                    <li className="py-4 px-6 w-full">Relatórios</li>
                    <li className="py-4 px-6 w-full">Segurança</li>
                    <li className="py-4 px-6 w-full">Configurações</li>
                </ul>
            </div>
        </button>
    );
}

export default MenuResponsivo;
