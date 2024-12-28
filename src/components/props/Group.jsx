import PropTypes from 'prop-types';

const Group = ({ id, name, organizer, description }) => {
    return (
        <>
            <div className="group-card" id={id}>
                <p><strong>Name: </strong> {name}</p>
                <p><strong>Organizer: </strong> {organizer}</p>
                <p><strong>Description: </strong> {description}</p>
            </div>
        </>
    )
}

Group.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    organizer: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Group;