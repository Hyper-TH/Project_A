import PropTypes from 'prop-types';

const Availability = ({ id, date, startTime, endTime, timezone }) => {
    return (
        <>
            <div className="availability-card" id={id}>
                <p><strong>Date: </strong> {date}</p>
                <p><strong>Start Time: </strong> {startTime}</p>
                <p><strong>End Time: </strong> {endTime}</p>
                <p><strong>Timezone: </strong> {timezone}</p>
            </div>
        </>
    )
}

Availability.propTypes = {
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
};

export default Availability;