import React from 'react';

function Picker ({label, handler}) {
    return (
        <form>
            <label htmlFor="date">{label}</label>
            <input id="date" type="date" onChange={handler}/>
        </form>
    );
}



export default Picker;