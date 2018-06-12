import React from 'react';
import moment from 'moment';

import{DATE_FORMAT} from './constants';

function weeksInfo (weeks, sickPayEnds) {
    if (weeks > 0) return (
    <p>
        It will run out in <span className="info">
            {Math.trunc(weeks)} weeks.
        </span> on <span className="info">
            {sickPayEnds.format(DATE_FORMAT)}
        </span>
    </p>);

    else {
        return (
            <p>
                It ran out on <span className="info">.
                    {sickPayEnds.format(DATE_FORMAT)}
                </span>
            </p>
        );
    }


}

function Information ({inputDate, perWeek}) {
    const date = moment(inputDate);
    const sickPayCommences = date
        .clone()
        .add(4, 'days');
    const sickPayEnds = sickPayCommences
        .clone()
        .add(28, 'weeks');

    const weeksLeft = moment.duration(sickPayEnds.diff(moment())).asWeeks();

    return (
        <div>
            <h2>Results</h2>
            <p>
                You went off sick on <span className="info">
                    {date.format(DATE_FORMAT)}
                </span>.
            </p>
            <p>
                You will receive Statutory Sick Pay from <span className="info">{sickPayCommences.format(DATE_FORMAT)}</span>.
            </p>

            {weeksInfo(weeksLeft, sickPayEnds)}

            <p>
                At <span className="info">£{perWeek.toFixed(2)}</span> a week, for a maximum of <span className="info">28</span> weeks, this means you are entitled to a further <span className="info">
                £{(perWeek * Math.max(0, Math.min(28,weeksLeft))).toFixed(2)}</span>.
            </p>
        </div>
    );
}

export default Information;