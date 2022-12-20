import {useState} from 'react';


export default function Buttons ( props ) {
    
    const [state, setState] = useState({ setState: false });
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async () => {

        setIsLoading(true);
        try {
        const response = await fetch('https://sphere-relay.azurewebsites.net/api/Mxchip1Control?code=Vt4WZR7G7Oit3augAdmMR9HH87u8QELjambh4GNuEdfWoC6jfA5NLQ==&SetSwitch=On&DeviceId=mxchip1', {
            method: 'GET',
            headers: {
            Accept: 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();

        console.log('result is: ', JSON.stringify(result, null, 4));

        setState(result);
        } catch (err) {
        setErr(err.message);
        } finally {
        setIsLoading(false);
        }
        console.log(state);
    };


    const handleClickOff = async () => {

        setIsLoading(true);
        try {
        const response = await fetch('https://sphere-relay.azurewebsites.net/api/Mxchip1Control?code=Vt4WZR7G7Oit3augAdmMR9HH87u8QELjambh4GNuEdfWoC6jfA5NLQ==&SetSwitch=Off&DeviceId=mxchip1', {
            method: 'GET',
            headers: {
            Accept: 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();

        console.log('result is: ', JSON.stringify(result, null, 4));

        setState(result);
        } catch (err) {
        setErr(err.message);
        } finally {
        setIsLoading(false);
        }
        console.log(state);
    };





    
    return (
        <div>
            {err && <h2>{err}</h2>}
            {isLoading && <h2>Loading...</h2>}
            <h1>sapin </h1>
            <button onClick={handleClick} SetSwitch='on'>Turn On</button>
            <button onClick={handleClickOff}  SetSwitch='off'>Turn Off</button>
        </div>
    );
}


