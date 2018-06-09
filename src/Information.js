import React from 'react';

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function addDays(date, days) {
    const answer = new Date(date);
    answer.setDate(answer.getDate() + days);
    return answer;
}

const formatDate = date => date.toLocaleDateString('en-UK', dateOptions);

function Information ({date, perWeek}) {

    return (
        <div>
            <h2>Results</h2>
            <p>
                You went off sick on {formatDate(date)}.
            </p>
            <p>
                You will receive SSP from {formatDate(addDays(date, 4))}.
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