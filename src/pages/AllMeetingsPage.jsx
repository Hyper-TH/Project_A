import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { allMeetings } from "../services/apiService.js";
import ReturnButton from '../components/ReturnButton.jsx'; 
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth.jsx";
import Meeting from "../components/props/Meeting.jsx";

const AllMeetingsPage = ({ backTo }) => {
    const { uID, token } = useAuth();
    const [meetingsData, setMeetingsData] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await allMeetings(uID, token);
                console.log(data);
                setMeetingsData(data);
            } catch (err) {
                setError(err);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <h1>All your meetings</h1>
            
            {meetingsData.map((meeting) => (
                <Meeting
                    key={meeting.Id}
                    mid={meeting.mID}
                    name={meeting.Name}
                    description={meeting.Description}
                    organizer={meeting.Organizer}
                    date={meeting.Date}
                    timezone={meeting.Timezone}
                />
            ))}
            
            <Link to={backTo}>
                <ReturnButton />
            </Link>
        </>
    )
};


AllMeetingsPage.propTypes = {
    backTo: PropTypes.string.isRequired,   
};

export default AllMeetingsPage;