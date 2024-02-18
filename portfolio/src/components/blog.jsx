import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "./header"
import Menu from "./menu";
import axios from "axios";
import dayjs from 'dayjs'

export default function Blog() {
    const [articles, setArticles] = useState([])

    const icons = ["/likes_count.svg", "/stocks_count.svg", "/comments_count.svg", "/page_views_count.svg"];
    
    const getArticlesFromQiita = async () => {
        try{
            const response =  await axios.get("https://qiita.com/api/v2/users/sintaro-katuta/items",
                {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_QIITA_ACCESS_TOKEN}`,
                    },
                }
            )
            return response.data
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        getArticlesFromQiita().then(setArticles)
    }, [])

    return(
        <div className="w-full h-full flex flex-col gap-10 justify-start items-center overflow-y-auto px-3 py-5">
            {articles.map((article, i) => (
                <div key={i} className="flex-none border-2 border-qiita w-full h-1/5 rounded-xl p-3 shadow-xl flex flex-col justify-center gap-10">
                    <Link className="w-fit" to={article.url}>
                        <p className="text-lg font-semibold underline decoration-solid cursor-pointer tracking-wide">{article.title}</p>
                    </Link>                            
                    <div className="w-full flex items-center justify-start gap-3">
                        <div className="flex justify-center items-center">
                            <img src="/likes_count.svg" alt="" className="w-5 h-full" />
                            <p className="text-sm">{article.likes_count}</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="/stocks_count.svg" alt="" className="w-5 h-full" />
                            <p className="text-sm">{article.stocks_count}</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="/comments_count.svg" alt="" className="w-5 h-full" />
                            <p className="text-sm">{article.comments_count}</p>
                        </div>
                        {/* <p>{item.tags}</p> */}
                        <p className="text-sm">{dayjs(article.created_at).format('YYYY年MM月DD日 HH:MM')}</p>
                    </div>
                </div>
            ))}
            <Link to="/blog/edit">
                <img src="/upload_file.svg" alt="" className="absolute w-20 h-20 cursor-pointer bottom-20 right-10" />
            </Link>
        </div>
    )
}
