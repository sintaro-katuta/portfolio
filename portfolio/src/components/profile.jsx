import Header from "./header";
import Menu from "./menu";

export default function Profile() {
    return(
        <div className="w-screen h-screen fixed">
            <Header/>
            <div className="w-full h-full px-7">
                <div className="w-full h-3/4 flex items-center justify-center">
                    <p className="text-xl text-center main-font">Profile</p>
                </div>
                <Menu />
            </div>
        </div>
    )
}