import PropTypes from 'prop-types';

const Meeting = ({ mid, name, organizer, description, date, timezone, uid, unregister, deleteMeeting, token }) => {
    return (
        <>
            <div className="meeting-card" id={mid}>
                <h2>{name}</h2>
                <p><strong>Organizer: </strong> {organizer}</p>
                <p><strong>Description: </strong> {description}</p>
                <p><strong>Date: </strong> {date}</p>
                <p><strong>Timezone: </strong> {timezone}</p>

                {uid === organizer ? (
                    <button onClick={() => deleteMeeting(uid, mid, token)}>Delete meeting</button>
                ) : (
                    <button onClick={() => unregister(uid, mid, token)}>Unregister meeting</button>
                )}
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
    timezone: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    unregister: PropTypes.func.isRequired,
    deleteMeeting: PropTypes.func.isRequired
};

export default Meeting;