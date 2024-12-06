import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { allMeetings, unregisterMeeting } from "../../services/apiService.js";
import ReturnButton from '../../components/ReturnButton.jsx'; 
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth.jsx";
import Error from "../../components/props/Error";
import Meeting from "../../components/props/Meeting.jsx";

const AllMeetingsPage = ({ backTo }) => {
    const { uID, token } = useAuth();
    const [meetingsData, setMeetingsData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const data = await allMeetings(uID, token);
            console.log(data);
            setMeetingsData(data);
        } catch (err) {
            setError(err);
        }
    }

    const unregister = async (uid, mid, token) => {
        try {
            const response = await unregisterMeeting(uid, mid, token);
            console.log(response);

            fetchData();
        } catch (err) {
            console.error('Error:', err);
            setError(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, [uID, token]);


    return (
        <>
            <h1>All your meetings</h1>
            
            <Link to={backTo}>
                <ReturnButton />
            </Link>

            {meetingsData.map((meeting) => (
                <Meeting
                    key={meeting.Id}
                    mid={meeting.mID}
                    name={meeting.Name}
                    description={meeting.Description}
                    organizer={meeting.Organizer}
                    date={meeting.Date}
                    timezone={meeting.Timezone}
                    uid={uID}
                    token={token}
                    unregister={unregister}
                />
            ))}

            {error && <Error error={error} />}

        </>
    )
};

AllMeetingsPage.propTypes = {
    backTo: PropTypes.string.isRequired,   
};

export default AllMeetingsPage;