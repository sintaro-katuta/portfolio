import { Link } from "react-router-dom"

export default function Menu(){
    const menu = ['Profile', 'Works', 'Blog']
    return(
        <div className='flex justify-between'>
            {menu.map((item) => (
                <Link to={`/${item.toLowerCase()}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{item}</Link>
                // <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => move()} >{item}</button>                    
            ))}
        </div>
    )
}