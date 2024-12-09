// Add availability to a calendar
// Think UI
import { Link } from "react-router-dom";
import ReturnButton from '../../components/ReturnButton.jsx';
import PropTypes from "prop-types";
import AddAvailabilityForm from "../../components/forms/AddAvailabilityForm.jsx";

const AddAvailabilityPage = ({ backTo }) => {
    return (
        <>
            <Link to={backTo}>
                <ReturnButton />
            </Link>

            <AddAvailabilityForm />
        </>
    )
};

AddAvailabilityPage.propTypes = {
    backTo: PropTypes.string.isRequired,
};

export default AddAvailabilityPage;