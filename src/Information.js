import React from 'react';
import moment from 'moment';

const formatString = 'dddd, MMMM Do YYYY';

function weeksInfo (weeks, sickPayEnds) {
    if (weeks > 0) return (
    <p>
        It will run out in <span className="info">
            {Math.trunc(weeks)} weeks
        </span> on <span className="info">
            {sickPayEnds.format(formatString)}
        </span>
    </p>);

        else {
            return (
            <p>
                It ran out on <span className="info">{sickPayEnds.format(formatString)}</span>
            </p>
        );}


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
                    {date.format(formatString)}
                </span>.
            </p>
            <p>
                You will receive Statutory Sick Pay from <span className="info">{sickPayCommences.format(formatString)}</span>.
            </p>

            {weeksInfo(weeksLeft, sickPayEnds)}

            <p>
                At <span className="info">£{perWeek.toFixed(2)}</span> a week, this means you are entitled to a further <span className="info">
                £{(perWeek * Math.max(0, weeksLeft)).toFixed(2)}</span>.
            </p>
        </div>
    );
}

export default Information;