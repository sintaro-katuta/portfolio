import Header from "./header";
import Menu from "./menu";

export default function Index() {
    return(
        <div className='w-screen h-screen fixed'>
            <Header/>
            <div className='w-full h-full px-7'>
                <section className="main w-full h-3/4 flex items-center justify-center">
                        <span>Hello!</span>
                </section>
                <Menu />
            </div>
        </div>
    )
}