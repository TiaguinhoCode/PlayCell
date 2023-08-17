import { useState } from 'react';

function MenuResponsivo() {
    // Variavel - Foto dinamica e valor bool, onde 0 = menu e 1 = close menu
    const [menuAbrindo, setmenuAbrindo] = useState('menu-outline');
    const [Ativa, setAtiva] = useState(0);

    // Variavel para alterar foto de acordo com valor bool
    const ativarDesativa = () => {
        if (Ativa === 0) {
            setAtiva(1);
            setmenuAbrindo('close-outline');
            
        } else {
            setAtiva(0);
            setmenuAbrindo('menu-outline');
        }
    }
    
    return(
        <button onClick={ativarDesativa} className="block md:hidden py-3 px-4 mx-2 rounded focus: outline-none group">
            <ion-icon id="ativar" size="large" name={menuAbrindo}></ion-icon>
            <div className="absolute top-0 right h-screen w-8/12 bg-white border transform opacity-0 group-focus: right-0 group-focus: opacity:-100 transition-all duration-300">
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