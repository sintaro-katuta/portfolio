import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components';
import Profile from './components/profile';
import Works from './components/works';
import Blog from './components/blog';
import BlogEdit from './components/blogEdit';
import NotFound from './components/notfound';
import Header from './components/header';
import Menu from './components/menu';

export default function RouterConfig() {
    return(
        <div className='w-screen h-screen fixed flex flex-col justify-between items-center'>
            <BrowserRouter>
                <Header/>
                <Routes>
                    {/* ホーム */}
                    <Route path="/" element={<Index/>} />
                    {/* コンテンツ */}
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/blog" element={<Blog/>} />
                    <Route path="/blog/edit" element={<BlogEdit/>} />
                    <Route path="/works" element={<Works/>} />
                    
                    {/* ページが見つからなかった時 */}
                    <Route path="*" element={<NotFound />}/>
                </Routes>
                <Menu/>
            </BrowserRouter>
        </div>
    )
}