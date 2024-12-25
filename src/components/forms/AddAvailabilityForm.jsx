import { useState, useEffect } from "react";
import { useAuth } from '../../hooks/useAuth.jsx';
import { useTimezone } from '../../hooks/useTimezone.jsx';
import { createAvailability, allGroups } from '../../services/apiService.js';
import Error from '../props/Error.jsx';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AddAvailabilityForm = () => {
    const { uID, token } = useAuth();
    const { timezone } = useTimezone();
    const [error, setError] = useState(null);
    const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState("12:00");
    const [endTime, setEndTime] = useState("12:00");
    const [selectedGroup, setSelectedGroup] = useState("");
    const [userGroups, setUserGroups] = useState([]);
    const [availabilityData, setAvailabilityData] = useState({
        uID: '',
        gID: '',
        Date: '',
        StartTime: '',
        EndTime: '',
        Timezone: ''
    });
    const [darkMode, setDarkMode] = useState(false);

    const fetchData = async () => {
        try {
            const data = await allGroups(uID, token);
            console.log(data);
            setUserGroups(data);
        } catch (err) {
            setError(err);
        }
    };

    useEffect(() => {
        fetchData();

        if (uID && token) {
            setAvailabilityData((prevData) => ({
                ...prevData,
                uID: uID,
                Timezone: timezone
            }));
        }
    }, [uID, timezone, token]);

    const handleChange = async (e) => {
        const { name, value } = e.target;

        setAvailabilityData((prevAvail) => ({
            ...prevAvail,
            [name]: value
        }));

    };
    const handleDateChange = async (newDate) => {
        setDate(newDate);

        setAvailabilityData((prevMeeting) => ({
            ...prevMeeting,
            Date: newDate
        }));
    };

    const handleStartTimeChange = async (e) => {
        setStartTime(e.target.value);

        setAvailabilityData((prevMeeting) => ({
            ...prevMeeting,
            StartTime: e.target.value
        }));
    };

    const handleEndTimeChange = async (e) => {
        setEndTime(e.target.value);

        setAvailabilityData((prevMeeting) => ({
            ...prevMeeting,
            EndTime: e.target.value
        }));
    };

    const handleGroupSelect = (e) => {
        const selected = e.target.value;
        const selectedGroupData = userGroups.find(group => group.name === selected);
        setSelectedGroup(selected);

        setAvailabilityData((prev) => ({
            ...prev,
            gID: selectedGroupData ? selectedGroupData.gID : ''
        }));
    };

    const toggle = () => {
        setDarkMode(!darkMode);
    };

    const putData = async (e) => {
        e.preventDefault();

        try {
            const data = await createAvailability(availabilityData, token);

            console.log(data);
        } catch (err) {
            console.error('Error:', err);
            setError(err);
        }
    }

    return (
        <>
            <div className='sub_container'>
                <div className='add_availability_form'>
                    <div className='add_availability'>
                        <h1 className='page_title'>
                            Add New Availability
                        </h1>

                        <form className='form'>
                            <div className={darkMode ? 'dark-mode' : ''}>
                                <button onClick={toggle}>
                                    Toggle {darkMode ? 'Light' : 'Dark'} Mode
                                </button>

                                <Calendar onChange={handleDateChange} value={date} />
                            </div>

                            <div>
                                <label>
                                    Name:
                                    <select value={selectedGroup} onChange={handleGroupSelect}>
                                        <option value="">Select a group</option>
                                        {userGroups.map((group) => (
                                            <option key={group.gID} value={group.name}>
                                                {group.name}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                            </div>

                            <div>
                                <label htmlFor="time">Start Time:</label>
                                <input
                                    id="startTime"
                                    type="time"
                                    value={startTime}
                                    onChange={handleStartTimeChange}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="time">End Time:</label>
                                <input
                                    id="endTime"
                                    type="time"
                                    value={endTime}
                                    onChange={handleEndTimeChange}
                                    required
                                />
                            </div>

                            <div>
                                <p>Selected date: {date?.toDateString()}</p>
                            </div>

                            <button className="submit" onClick={putData}>Submit</button>

                        </form>
                    </div>
                </div>

                {error && <Error error={error} />}
            </div>
        </>
    )
};

export default AddAvailabilityForm;