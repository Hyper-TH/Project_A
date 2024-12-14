import { Link } from "react-router-dom";
import CreateGroupForm from "../../components/forms/CreateGroupForm";
import ReturnButton from "../../components/ReturnButton.jsx";
import PropTypes from "prop-types";

const CreateGroupPage = ({ backTo }) => {
    return (
        <>
            <Link to={backTo}>
                <ReturnButton />
            </Link >

            <CreateGroupForm />
        </>
    )
}

CreateGroupPage.propTypes = {
    backTo: PropTypes.string.isRequired,
};

export default CreateGroupPage;