import { Link } from "react-router-dom"

export default function Header() {
    const menu = ['Profile', 'Works', 'Blog']
    return(
        <>
            <div className="bg-base-5 h-20 flex items-center justify-center">
                <div className="w-1/3 h-full">
                    <img src={"/profile.png"} alt="" className="rounded-full w-20 h-20 p-1" />
                </div>
                <div className="w-1/3">
                    <p className="text-center main-font text-xl">勝田紳太郎</p>
                </div>                
                <div className="w-1/3 flex justify-between">
                    {menu.map((item) => (
                        <Link to={`/${item.toLowerCase()}`} className="hidden iphone:block cursor-pointer">{item}</Link>                    
                    ))}
                </div>
            </div>
        </>
    )
}