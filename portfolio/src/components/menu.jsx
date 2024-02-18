import { Link } from "react-router-dom"

export default function Menu(){
    const menu = ['Profile', 'Works', 'Blog']
    return(
        <div className='w-full flex justify-center items-center gap-10 pb-5'>
            {menu.map((item, i) => (
                <Link key={i} to={`/${item.toLowerCase()}`} className='bg-base-2 text-white font-bold py-2 px-4 rounded iphone:hidden'>{item}</Link>
            ))}
        </div>
    )
}