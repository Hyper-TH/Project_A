import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const LogoutButton = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
		try {
			await logout();
			navigate('/');
			
			console.log(`Logged Out`)
		} catch (e) {
			console.log(e.message);
		}
	};

    return (
        <>
            <button className='btn_primary' onClick={handleLogout}>
                Logout
            </button>
        </>
    )
};

export default LogoutButton;