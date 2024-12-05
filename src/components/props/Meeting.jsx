import PropTypes from 'prop-types';

const Meeting = ({ mid, name, organizer, description, date, timezone }) => {
    return (
        <>
            <div className="meeting-card" id={mid}>
                <h2>{name}</h2>
                <p><strong>Organizer: </strong>: {organizer}</p>
                <p><strong>Description: </strong>: {description}</p>
                <p><strong>Date: </strong>: {date}</p>
                <p><strong>Timezone: </strong>: {timezone}</p>
            </div>
        </>
    )
}

Meeting.propTypes = {
    mid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    organizer: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired
};

export default Meeting;