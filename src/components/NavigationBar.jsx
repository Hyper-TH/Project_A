import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <>
            <Link to="/allMeetings" className="btn_collection_top">
                Check all meetings
            </Link>

            <Link to="/registerMeeting" className="btn_collection_middle">
                Register a meeting
            </Link>

            <Link to="/addMeeting" className="btn_collection_middle">
                Add a meeting
            </Link>

            <Link to="/allAvailabilities" className="btn_collection_middle">
                Check all availabilities
            </Link>

            <Link to="/createGroup" className="btn_collection_middle">
                Create Group
            </Link>

            <Link to="/addAvailability" className="btn_collection_bottom">
                Add an availability
            </Link>
        </>
    );
}

export default NavigationBar;