import Header from "./header"
import Menu from "./menu";
import Work from "./work";

export default function Works() {
    const works = [
        {
            "title": "Foop",
            "image": "/Foop.png",   
            "language": ["/nextjs.svg", "/typescript.svg", "/firebase.svg"],
            "url": "https://gy-project.vercel.app/",
            "description": "Foopは、IRのリゾートテーマパーク専用のSNSです。スマホの大きさには対応しておりませんのでPCでの閲覧をお願いします。"
        },
        
        {
            "title": "FocusRoom",
            "image": "/FocusRoom.png",
            "language": ["/nextjs.svg", "/typescript.svg", "/supabase.svg", "/Bootstrap.svg"],
            "url": "https://focus-room.vercel.app/",
            "description": "FocusRoomは、Zoomのようなビデオ会議アプリです。現在は、機能がローカルのみで動作しますので、デプロイ先では動きません。"
        },
    ]
    return(
        <div className="w-screen h-screen fixed bg-white">
            <Header/>
            <div className="w-full h-full px-7">
                <div className="w-full h-3/4 p-2 flex flex-col items-center justify-start gap-5 overflow-y-auto">
                    {works.map((item) => (
                        <Work work={item} />
                    ))}
                </div>
                <Menu />
            </div>
        </div>
    )
}