import Header from "./header";
import Menu from "./menu";
import { Link } from "react-router-dom";

export default function Profile() {
    return(
        <div className="w-screen h-screen fixed">
            <Header/>
            <div className="w-full h-full px-7">
                <div className="w-full h-3/4">
                    <div className="h-1/2 flex items-center justify-center">
                        <img src="/profile.png" alt="" className="h-full p-3" />
                    </div>
                    <div className="h-1/2 border border-black rounded-lg p-3 flex flex-col items-start justify-start gap-5 main-font">
                        <p className="text-lg">名前: <ruby>勝田<rt>かつた</rt></ruby>　<ruby>紳太郎<rt>しんたろう</rt></ruby></p>
                        <p className="text-lg">趣味: カプセルトイ</p>
                        <p className="text-lg">好きなプログラミング言語: JavaScript/TypeScript</p>
                        <p className="text-lg">現在の目標:<br /> インフラができるようになりたい！</p>
                        <div className="flex items-center justify-center gap-5">
                            <Link target="_blank" to="https://github.com/sintaro-katuta">
                                <img src="/github-mark.png" alt="" className="w-10 h-10" />
                            </Link>                            
                            <Link target="_blank" to="https://qiita.com/sintaro-katuta">
                                <img src="/qiita.png" alt="" className="w-10 h-10" />
                            </Link>    
                        </div>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}