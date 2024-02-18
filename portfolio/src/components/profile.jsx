import { Link } from "react-router-dom";

export default function Profile() {
    const content = [
        <p className="text-lg">名前: <ruby>勝田<rt>かつた</rt></ruby>　<ruby>紳太郎<rt>しんたろう</rt></ruby></p>,
        <p className="text-lg">生年月日: 2002年8月25日</p>,
        <p className="text-lg">学校: ECCコンピュータ専門学校</p>,
        <p className="text-lg">趣味: カプセルトイ</p>,
        <p className="text-lg">志望職種: Webエンジニア</p>,
        <p className="text-lg">好きなプログラミング言語: JavaScript/TypeScript</p>,
        <p className="text-lg">好きなフレームワーク: React, Next.js</p>,
        <p className="text-lg">現在の目標: インフラができるようになりたい！</p>
    ]
    return(
        <div className="w-full h-3/4 px-3 py-5">
            <div className="h-1/3 flex items-center justify-center">
                <img src="/profile.png" alt="" className="h-full p-3" />
            </div>
            <div className="h-2/3 border border-black rounded-lg p-3 flex flex-col items-start justify-start gap-5 overflow-y-auto">
                {content.map((item, i) => (
                    <div key={i}>
                        {item}
                    </div>
                ))}
                <div className="flex items-center justify-center gap-5">
                    <Link target="_blank" to="https://github.com/sintaro-katuta" className="flex items-center justify-center gap-3">
                        <img src="/github-mark.png" alt="" className="w-10 h-10" />
                        <p>Github</p>
                    </Link>                            
                    <Link target="_blank" to="https://qiita.com/sintaro-katuta" className="flex items-center justify-center gap-3">
                        <img src="/qiita.png" alt="" className="w-10 h-10" />
                        <p>Qiita</p>
                    </Link>    
                </div>
            </div>
        </div>
    )
}