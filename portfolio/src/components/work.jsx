import { Link } from "react-router-dom"
import Language from "./language"

export default function Work(props) {
    return(        
        <>
            <div className="w-full h-40 p-2 bg-white rounded-xl shadow-xl flex flex-col justify-center">
                <div className="h-3/4 flex items-center gap-3">
                    <img src={props.work.image} alt="" className="h-1/6" />
                    <div className="flex flex-col items-start justify-start w-full h-full">
                        <div className="w-full h-4/5">
                            <p>{props.work.title}</p>
                            <div className="pl-2">
                                <p className="text-xs">{props.work.description}</p>                                
                            </div>
                            <Link target="_blank" to={props.work.url} className="flex items-center gap-2">
                                <p className="text-sm">作品を見る</p><img src="/arrow.svg" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full h-1/4">
                    <Language language={props.work.language} />
                </div>
            </div>
        </>
    )
}