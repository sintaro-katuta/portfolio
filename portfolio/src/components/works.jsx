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
            "image": "/FocusRoom.svg",
            "language": ["/nextjs.svg", "/typescript.svg", "/supabase.svg", "/Bootstrap.svg"],
            "url": "https://focus-room.vercel.app/",
            "summary": "FocusRoomは、Zoomのようなビデオ会議アプリです。現在は、機能がローカルのみで動作しますので、デプロイ先では動きません。",
            "description": "WebRTCとP2Pという技術を使って開発しました。データベースはRDBのBaaSのSupabaseを使用しました。"
        },
        {
            "title":"カプコレ",
            "image": "/kapukore.svg",
            "language": ["/nextjs.svg", "/typescript.svg","supabase.svg", "/tailwind.svg"],
            "url": "https://capsule-collection.vercel.app/",
            "summary": "カプコレは、カプセルトイのコレクションを管理するアプリです。",
            "description": "今までにしたガチャガチャを持っていますか？コレクションの魅力をもっと伝えるために手軽にガチャガチャをまとめることができるサービスです"
        }
    ];
    return(
        <div className="w-full h-3/4 flex flex-col items-center justify-start gap-5 overflow-y-auto px-3 py-5">
            {works.map((item) => (
                <Work work={item} />
            ))}
        </div>
    )
}