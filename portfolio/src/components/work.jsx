import { Link } from "react-router-dom"
import Language from "./language"

export default function Work(props) {
    return(        
        <>
            <div className="w-full pc:w-1/2  h-3/5 p-2 bg-white rounded-xl shadow-xl flex flex-col justify-start items-center">
                <div className="h-3/4 flex items-center gap-3">
                    <img src={props.work.image} alt="" className="w-16" />
                    <div className="flex flex-col items-start justify-start w-full h-full">
                        <div className="w-full h-full">
                            <div className="flex justify-between">
                                <p className="pc:text-xl iphone:text-sm tracking-wide">{props.work.title}</p>
                                <Link to={props.work.url} className="flex justify-start items-center gap-1">
                                    <p className="pc:text-base iphone:text-xs">作品を見る</p><img src="/arrow.svg" alt="" className="w-5" />
                                </Link>
                            </div>                            
                            <hr className="w-full" />
                            <div className="pl-3 h-2/3">
                                <p className="pc:text-base iphone:text-xs tracking-wide break-words">{props.work.summary}<span className="invisible pc:visible">{props.work.description}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <Language language={props.work.language} />
            </div>
        </>
    )
}