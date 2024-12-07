import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { allMeetings, unregisterMeeting, removeMeeting } from "../../services/apiService.js";
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

            setMeetingsData(data);
        } catch (err) {
            setError(err);
        }
    }

    const unregister = async (uid, mid, token) => {
        try {
            await unregisterMeeting(uid, mid, token);

            fetchData();
        } catch (err) {
            console.error('Error:', err);

            setError(err);
        }
    }

    const deleteMeeting = async (uid, mid, token) => {
        try {
            await removeMeeting(uid, mid, token);

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
                    deleteMeeting={deleteMeeting}
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