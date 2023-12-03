import Header from "./header";
import Menu from "./menu";
import Markdown from "./markdown";
import { useState } from "react";


export default function BlogEdit() {
    const [page, setPage] = useState("markdown")
    const [markdown, setMarkdown] = useState('')
    return(
        <div className='w-screen h-screen fixed'>
            <Header/>
            <div className='w-full h-3/4 px-7'>
                { page === "markdown" &&  <Markdown markdown={markdown} setMarkdown={setMarkdown}/> }
                <Menu />
            </div>
        </div>
    )
}