import Markdown from "./markdown";
import { useState } from "react";


export default function BlogEdit() {
    const [page, setPage] = useState("markdown")
    const [markdown, setMarkdown] = useState('')
    return(
        <div className='w-full h-3/4 px-7'>
            { page === "markdown" &&  <Markdown markdown={markdown} setMarkdown={setMarkdown}/> }
        </div>
    )
}