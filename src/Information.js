import React from 'react';
import moment from 'moment';

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


const formatString = 'dddd, MMMM Do YYYY';

function Information ({inputDate, perWeek}) {
    const date = moment(inputDate);


    return (
        <div>
            <h2>Results</h2>
            <p>
                You went off sick on {date.format(formatString)}.
            </p>
            <p>
                You will receive SSP from {
                    date
                    .clone()
                    .add(4, 'days')
                    .format(formatString)}.
            </p>

            <p>
                It will run out in TIMEDELTA

                which is DATE
            </p>

            <p>
                You receive £{perWeek.toFixed(2)} for 28 weeks.
            </p>

            <p>
                There are WEEKS weeks left, which means you will receive PAY.
            </p>

        </div>
    );
}

export default Information;