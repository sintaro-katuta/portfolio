import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import RouterConfig from './RouterConfig';
import "./style.css"    //tailwindとglobal.cssの読み込み

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        {/* RouterConfig.jsでルーティングを設定 */}
        <RouterConfig />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
