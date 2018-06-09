import moment from 'moment';
import React from 'react';

function Picker ({label, handler, date}) {
    return (
        <form>
            <label htmlFor="date">{label}</label>
            <input id="date" type="date" onChange={handler} value={moment(date).format('YYYY-MM-DD')}/>
        </form>
    );
}



export default Picker;