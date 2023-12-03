import Header from "./header"
import Menu from "./menu";
import Work from "./work";

export default function Works() {
    /**
     * Array of work objects.
     * @typedef {Object} Work
     * @property {string} title - The title of the work.
     * @property {string} image - The image path of the work.
     * @property {string[]} language - The array of language icons for the work.
     * @property {string} url - The URL of the work.
     * @property {string} description - The description of the work.
     */

    /**
     * Array of works.
     * @type {Work[]}
     */
    const works = [
        {
            "title": "Foop",
            "image": "/Foop.svg",   
            "language": ["/nextjs.svg", "/typescript.svg", "/firebase.svg"],
            "url": "https://gy-project.vercel.app/",
            "summary": "Foopは、IRのリゾートテーマパーク専用のSNSです。この制作ではスマホの大きさには対応しておりませんのでPCでの閲覧をお願いします。",
            "description": "IRと聞くとギャンブルのイメージがありますが、リゾートテーマパークでホテルやレストランなどの施設があり、海外では経済効果があったほどメリットがあります。そんなIRをSNSを使って盛り上げていくサービスです。"
        },
        
        {
            "title": "FocusRoom",
            "image": "/FocusRoom.png",
            "language": ["/nextjs.svg", "/typescript.svg", "/supabase.svg", "/Bootstrap.svg"],
            "url": "https://focus-room.vercel.app/",
            "summary": "FocusRoomは、Zoomのようなビデオ会議アプリです。現在は、機能がローカルのみで動作しますので、デプロイ先では動きません。",
            "description": "WebRTCとP2Pという技術を使って開発しました。データベースはRDBのBaaSのSupabaseを使用しました。"
        },
    ];
    return(
        <div className="w-screen h-screen fixed bg-white">
            <Header/>
            <div className="w-full h-full px-7">
                <div className="w-full h-3/4 p-2 flex flex-col items-center justify-center gap-5 overflow-y-auto">
                    {works.map((item) => (
                        <Work work={item} />
                    ))}
                </div>
                <Menu />
            </div>
        </div>
    )
}