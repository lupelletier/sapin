import React, { useState } from 'react';
import { useCookies } from 'react-cookie';


export default function Cookie() {
    const [code, setCode] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['code']);
    
    function handleCookie() {
        setCookie('code', code, { path: '/' }, );

    }
    return (
        <div>
      <h1>Enter configuration code:</h1>
      <input
         placeholder="Code"
         value={code}
         onChange={(e) => setCode(e.target.value)}
      />
        <button onClick={handleCookie}>Configure Code</button>
            <div >
                <p>Code configured : {cookies.code}</p>
            </div>
        </div>
    );
 };
