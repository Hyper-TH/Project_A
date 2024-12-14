import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import Error from '../props/Error';
import { createGroup } from "../../services/apiService.js";

const CreateGroupForm = () => {
    const { uID, token } = useAuth();
    const [groupData, setGroupData] = useState({
        Name: '',
        Organizer: '',
        Description: '',
        Users: [],
    });
    const [user, setUser] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (uID && token) {
            setGroupData((prevData) => ({
                ...prevData,
                Organizer: uID,
            }))
        }
    }, [uID, token]);

    const handleAddUser = () => {
        if (user.trim()) {
            setGroupData((prevData) => ({
                ...prevData,
                Users: [...prevData.Users, user.trim()],
            }));

            setUser('');
        }
    }

    const handleRemoveUser = (index) => {
        setGroupData((prevData) => ({
            ...prevData,
            Users: prevData.Users.filter((_, i) => i !== index),
        }));
    }

    const handleChange = async (e) => {
        const { name, value } = e.target;

        setGroupData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const putData = async (e) => {
        e.preventDefault();

        try {
            const data = await createGroup(groupData, token);

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
                <div className='add_group_form'>
                    <div className='add_group'>
                        <h1 className='add_group_title'>
                            Create New Group
                        </h1>
                    </div>

                    <form className='form'>
                        <div>
                            <label>Name</label>
                            <input
                                type="text"
                                name="Name"
                                placeholder="Name of meeting"
                                value={groupData.Name}
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
                                value={groupData.Description}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label>
                                Add Users:
                                <input
                                    type="text"
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                />
                                <button type="button" onClick={handleAddUser}>
                                    Add User
                                </button>
                            </label>
                        </div>

                        <div>
                            <label>Users:</label>
                            <ul>
                                {groupData.Users.map((user, index) => (
                                    <li key={index}>
                                        {user}{' '}
                                        <button type="button" onClick={() => handleRemoveUser(index)}>
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </form>

                    <div>
                        <h3>Current Group Data:</h3>
                        <pre>{JSON.stringify(groupData, null, 2)}</pre>
                    </div>

                    <button className="submit" onClick={putData}>Submit</button>
                </div>

                {error && <Error error={error} />}
            </div>
        </>
    )

}

export default CreateGroupForm;