export const Button = ({ color, text, functionCLick , icon}) => {


    
    return <button onClick={functionCLick} style={{ backgroundColor: color }} className='btn-add'>{icon}</button>
}