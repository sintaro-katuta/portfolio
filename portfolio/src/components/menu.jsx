import { Link } from "react-router-dom"

export default function Menu(){
    const menu = ['Profile', 'Works', 'Blog']
    return(
        <div className='flex justify-between pt-3'>
            {menu.map((item) => (
                <Link to={`/${item.toLowerCase()}`} className='bg-base-2 text-white font-bold py-2 px-4 rounded iphone:hidden'>{item}</Link>
                // <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => move()} >{item}</button>                    
            ))}
        </div>
    )
}