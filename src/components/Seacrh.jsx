import { useState } from 'react';

function Seacrh({ cb = Function.prototype }) {
    const [value, setValue] = useState('');

    const handleKay = (e) => {
        if(e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className='row'>
            <div className='input-field col s12'>
                <input type='search' id='search-field' placeholder='search' onKeyDown={handleKay} onChange={(e) => setValue(e.target.value)} value={value} />
                <button className='btn' style={{position: 'absolute', top: 0, right: 0}} onClick={handleSubmit}>Search</button>
            </div>
        </div>
    );
}

export { Seacrh };
