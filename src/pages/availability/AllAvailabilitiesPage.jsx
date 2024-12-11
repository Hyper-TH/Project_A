import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { allAvailabilities } from "../../services/apiService.js";
import ReturnButton from "../../components/ReturnButton.jsx";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth.jsx";
import Error from "../../components/props/Error.jsx";
import Availability from "../../components/props/Availability.jsx";

const AllAvailabilitiesPage = ({ backTo }) => {
    const { uID, token } = useAuth();
    const [availabilitiesData, setAvailabilitiesData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const data = await allAvailabilities(uID, token);
            console.log(data);
            setAvailabilitiesData(data);
        } catch (err) {
            setError(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, [uID, token]);

    return (
        <>
            <h1>All your availabilities</h1>
            <Link to={backTo}>
                <ReturnButton />
            </Link>

            {availabilitiesData.map((availability) => (
                <Availability
                    key={availability.Id}
                    id={availability.Id}
                    date={availability.Date}
                    startTime={availability.StartTime}
                    endTime={availability.EndTime}
                    timezone={availability.Timezone}
                />
            ))}

            {error && <Error error={error} />}
        </>
    )
}

AllAvailabilitiesPage.propTypes = {
    backTo : PropTypes.string.isRequired
};

export default AllAvailabilitiesPage;