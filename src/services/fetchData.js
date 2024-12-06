const API = import.meta.env.VITE_MAIN_API;

export const getMeetings = async (endpoint, token, options = {}) => {
    try {
        const response = await fetch(`${API}${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            ...options
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.error(`Error getting data from ${API}${endpoint}`, err);

        throw err;
    }
}

export const registerMeeting = async (endpoint, token, options = {}) => {
    try {
        const response = await fetch(`${API}${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            ...options
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();

    } catch (err) {
        console.error(`Error posting data to ${API}${endpoint}`, err);

        throw err;
    }
}

export const postMeeting = async (endpoint, meetingData, token, options = {}) => {
    try {
        const response = await fetch(`${API}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(meetingData),
            ...options
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.error(`Error posting data to ${API}${endpoint}`, err);

        throw err;
    }
}

export const putAttendees = async (endpoint, token, options = {}) => {
    try {
        console.log(token);
        const response = await fetch(`${API}${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            ...options
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.error(`Error posting data to ${API}${endpoint}`, err);

        throw err;
    }
}