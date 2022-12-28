import React from 'react';
import {useState} from 'react';
import {useCookies} from 'react-cookie';
import { Cookies } from 'react-cookie';




export default function Buttons () {
    
    const [state, setState] = useState({ setState: false });
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [status, setStatus] = useState('');
    const [cookies, setCookie] = useCookies(['status']);
    const [counter, setCounter] = useState(10);
    const codeCookie = new Cookies();
    const code = codeCookie.get('code', { path: '/' });

    const handleClickOn = async () => {
        // after 1000000ms, call handleClickOff and switch off the lights

        // useEffect{{
        //     const timer = setTimeout(() => {
        //         handleClickOff();
        //     }, 1000000);
        //     return () => clearTimeout(timer);
        // }
        setCounter(setTimeout( function() { handleClickOff()},10000, clearTimeout()), [counter]);
        // hide the lights status 
        document.querySelector('.cookie').setAttribute("hidden",true)
        setStatus(undefined);
        setIsLoading(true);
        try {
        const response = await fetch(`https://sphere-relay.azurewebsites.net/api/Mxchip1Control?code=${code}&SetSwitch=On&DeviceId=mxchip1`, {
            method: 'GET',
            headers: {
            Accept: 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status} Please check your code configuration. `);
        }

        const result = await response.json();

        console.log('result is: ', JSON.stringify(result, null, 4));

        setState(result);
        } catch (err) {
        setErr(err.message);
        } finally {
            setIsLoading(false);
            setStatus(`The lights are on !`);
            document.querySelector('.cookie').innerHTML = status;        
        }
        console.log(state);


    };


    const handleClickOff = async () => {
        document.querySelector('.cookie').setAttribute("hidden",true)

        setStatus(undefined);
        setIsLoading(true);
        try {
        const response = await fetch(`https://sphere-relay.azurewebsites.net/api/Mxchip1Control?code=${code}&SetSwitch=Off&DeviceId=mxchip1`, {
            method: 'GET',
            headers: {
            Accept: 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status} Please check your code configuration.`);
        }

        const result = await response.json();

        console.log('result is: ', JSON.stringify(result, null, 4));

        setState(result);
        } catch (err) {
        setErr(err.message);
        } finally {
            setIsLoading(false);
            setStatus(`The lights are off !`);
        }
    };
    const handleCookie = () => {
        setCookie('status', status, { path: '/' });
        console.log(cookies.status);
    }
    status && handleCookie();



   

    
    return (
        <div>
            {err && <h2>{err}</h2>}
            {isLoading && <h1>Loading...</h1>}
            {status && <h1>{status}</h1>}

                <div className='lights-control'>
            <div className="lights-btn-control">
            <div>Countdown: {counter}</div>
            <button className='lights-btn' onClick={handleClickOn}>Turn lights on</button>
            <button className='lights-btn' onClick={handleClickOff}>Turn lights off</button>
                </div>
            </div>
        </div>
    );
}


