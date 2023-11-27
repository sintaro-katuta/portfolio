export default function Header() {
    return(
        <>
            <div className="bg-base-5 h-20 flex items-center justify-center">
                <div className="w-1/3">
                    <img src={"/profile.png"} alt="" className="rounded-full w-20 h-20 p-1" />
                </div>            
                <p className="w-1/3 text-center main-font text-2xl">勝田紳太郎</p>
                <div className="w-1/3" />
            </div>
        </>
    )
}