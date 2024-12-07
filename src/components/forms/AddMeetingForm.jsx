import { useState, useEffect } from "react";
import { useAuth } from '../../hooks/useAuth.jsx';
import { useTimezone } from '../../hooks/useTimezone.jsx';
import Error from '../props/Error';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { createMeeting } from '../../services/apiService.js';

const AddMeetingForm = () => {
    const { uID, token } = useAuth();
    const { timezone } = useTimezone();
    const [error, setError] = useState(null);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState("12:00"); // Default time as HH:mm
    const [darkMode, setDarkMode] = useState(false);
    const [meetingData, setMeetingData] = useState({
        Name: '',
        Organizer: '',
        Description: '',
        Date: '',
        Timezone: '',
    });

    useEffect(() => {
        if (uID && token) {
            setMeetingData((prevData) => ({
                ...prevData,
                Organizer: uID,
                Timezone: timezone,
            }));
        }
    }, [uID, timezone, token]);

    const handleChange = async (e) => {
        const { name, value } = e.target;

        setMeetingData((prevMeeting) => ({
            ...prevMeeting,
            [name]: value
        }));
    };

    const handleDateChange = (newDate) => {
        setDate(newDate);
        updateMeetingDate(newDate, time); // Combine date and time
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
        updateMeetingDate(date, e.target.value); // Combine date and time
    };

    const updateMeetingDate = (selectedDate, selectedTime) => {
        const [hours, minutes] = selectedTime.split(":");
        const updatedDate = new Date(selectedDate);
        updatedDate.setHours(parseInt(hours, 10));
        updatedDate.setMinutes(parseInt(minutes, 10));

        setMeetingData((prevMeeting) => ({
            ...prevMeeting,
            Date: updatedDate.toISOString(), // ISO format for backend
        }));

    };

    const toggle = () => {
        setDarkMode(!darkMode);
    };

    const putData = async (e) => {
        e.preventDefault();

        try {
            const data = await createMeeting(meetingData, token);

            console.log(data);
        } catch (err) {
            console.error('Error:', err);
            setError(err);

            alert('Error adding meeting.');
        }
    };

    return (
        <>
            <div className='sub_container'>
                <div className='add_meeting_form'>
                    <div className='add_meeting'>
                        <h1 className='add_meeting_title'>
                            Add New Meeting
                        </h1>

                        <form className='form'>
                            <div>
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="Name"
                                    placeholder="Name of meeting"
                                    value={meetingData.Name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label>Description</label>
                                <input
                                    type="text"
                                    name="Description"
                                    placeholder="Description of meeting"
                                    value={meetingData.Description}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={darkMode ? 'dark-mode' : ''}>
                                <button onClick={toggle}>
                                    Toggle {darkMode ? 'Light' : 'Dark'} Mode
                                </button>

                                <Calendar onChange={handleDateChange} value={date} />
                            </div>

                            <div>
                                <label htmlFor="time">Time:</label>
                                <input
                                    id="time"
                                    type="time"
                                    value={time}
                                    onChange={handleTimeChange}
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
    );
};

export default AddMeetingForm;