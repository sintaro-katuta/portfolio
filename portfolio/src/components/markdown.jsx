import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Markdown(props) {
    const [display, setDisplay] = useState("half")
    const [title, setTitle] = useState("")
    const [tags, setTags] = useState([])

    const addTag = (tag) => {
        setTags(tag.split(" ").filter((t) => t !== ""))
    }

    
    return(
        <div className="w-full h-full py-2 flex flex-col gap-3">
            <div className="w-full h-full flex flex-col gap-3">
                <div className='w-full h-10'>
                    <input type="text" placeholder='タイトル' className='w-full h-full p-2 border-2 border-black rounded-xl' onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='w-full h-8'>
                    <input type="text" placeholder='タグ' className='w-full h-full p-2 border-2 border-black rounded-xl' onChange={(e) => addTag(e.target.value)} />
                </div>
                <div className='w-full h-7 flex items-center justify-center gap-3'>
                    <button className="w-1/3 h-full bg-base-2 text-white rounded-xl" onClick={() => setDisplay("markdown")}>マークダウン</button>
                    <button className="w-1/3 h-full bg-base-2 text-white rounded-xl hidden pc:block" onClick={() => setDisplay("half")}>半分</button>
                    <button className="w-1/3 h-full bg-base-2 text-white rounded-xl" onClick={() => setDisplay("preview")}>プレビュー</button>
                </div>
                { display === "half" && 
                    <div className='w-full h-full flex gap-3'>
                        <div className="w-1/2 h-full">
                            <textarea className="w-full h-full p-2 rounded-xl border-2 border-black" name="" id="" cols="30" rows="10" value={props.markdown} onChange={(e) => props.setMarkdown(e.target.value)}></textarea>
                        </div>
                        <div className="w-1/2 h-full rounded-xl border-2 border-black p-2">
                            <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>{props.markdown}</ReactMarkdown>
                        </div>
                    </div>
                }
                { display === "preview" &&
                    <div className="w-full h-full rounded-xl border-2 border-black p-2">
                        <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>{props.markdown}</ReactMarkdown>
                    </div>
                }
                { display === "markdown" &&
                    <div className="w-full h-full">
                        <textarea className="w-full h-full p-2 rounded-xl border-2 border-black" name="" id="" cols="30" rows="10" value={props.markdown} onChange={(e) => props.setMarkdown(e.target.value)}></textarea>
                    </div>
                }
                <div className='w-full h-10'>
                    <button className="w-full h-10 bg-base-2 text-white rounded-xl" onClick={() => console.log(tags)}>次へ</button>
                </div>
            </div>
        </div>
    )
}