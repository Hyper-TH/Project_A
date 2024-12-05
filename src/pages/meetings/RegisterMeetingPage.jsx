// TODO: Register to a meeting using its UID
import { useState } from "react";
import { Link } from "react-router-dom";
import ReturnButton from "../../components/ReturnButton";
import PropTypes from "prop-types";
import Error from "../../components/props/Error";
import { attendMeeting } from "../../services/apiService";
import { useAuth } from "../../hooks/useAuth";

const RegisterMeetingPage = ({ backTo }) => {
    const { uID, token } = useAuth();
    const [mid, setMid] = useState("");
    const [error, setError] = useState(null);

    const handleChange = async (e) => {
        setMid(e.target.value);
    };

    const putData = async (e) => {
        e.preventDefault();

        try {
            const data = await attendMeeting(uID, mid, token);

            console.log(data);
        } catch (err) {
            console.error('Error: ', err);
            setError(err);
        }
    };

    return (
        <>
            <Link to={backTo}>
                <ReturnButton />
            </Link>

            <div className='sub_container'>
                <div className='register_meeting_form'>
                    <div className='register_meeting'>
                        <h1 className='register_meeting_title'>
                            Register Meeting
                        </h1>

                        <form className='form'>
                            <div>
                                <label>Enter MID:</label>
                                <input
                                    type="text"
                                    name="mid"
                                    placeholder="ID of meeting"
                                    value={mid}
                                    onChange={handleChange}

                                    required
                                />
                            </div>

                            <button className='submit' onClick={putData}>Register</button>
                        </form>
                    </div>
                </div>

                {error && <Error error={error} />}
            </div>

        </>
    )
}

RegisterMeetingPage.propTypes = {
    backTo: PropTypes.string.isRequired,
};

export default RegisterMeetingPage;