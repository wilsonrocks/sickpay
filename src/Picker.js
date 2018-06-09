import React from 'react';

function Picker ({label}) {
    return (
        <form>
            <label htmlFor="date">{label}</label>
            <input id="date" type="date"/>
        </form>
    );
}



export default Picker;