export const Card = () => {
    return (
        <div className='card'>
            <div className='cardContainer'>
                <span className='cardNome text-sm'>Valor Total:</span>
                <span className='cardValores negrito text-lg'>R$ 27.446.475,50</span>  
            </div>
                <div className='divider'></div>
            <div className='cardContainer'>
                <span className='cardNome text-sm'>Valor visível:</span>
                <span className='cardValores negrito text-lg'>R$ 27.446.475,50</span>
                <p className='cardNome text-sm'>100% do Total</p>   
            </div>
            <div className='divider'></div>
        </div>
    )
}