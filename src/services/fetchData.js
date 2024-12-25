const MAIN_API = import.meta.env.VITE_MAIN_API;
const AV_API = import.meta.env.VITE_AV_API;

export const getMeetings = async (endpoint, token, options = {}) => {
    try {
        const response = await fetch(`${MAIN_API}${endpoint}`, {
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
        console.error(`Error getting data from ${MAIN_API}${endpoint}`, err);

        throw err;
    }
}

export const registerMeeting = async (endpoint, token, options = {}) => {
    try {
        const response = await fetch(`${MAIN_API}${endpoint}`, {
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
        console.error(`Error posting data to ${MAIN_API}${endpoint}`, err);

        throw err;
    }
}

export const postMeeting = async (endpoint, meetingData, token, options = {}) => {
    try {
        const response = await fetch(`${MAIN_API}${endpoint}`, {
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
        console.error(`Error posting data to ${MAIN_API}${endpoint}`, err);

        throw err;
    }
}

export const putAttendees = async (endpoint, token, options = {}) => {
    try {
        const response = await fetch(`${MAIN_API}${endpoint}`, {
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
        console.error(`Error posting data to ${MAIN_API}${endpoint}`, err);

        throw err;
    }
}

export const deleteMeeting = async (endpoint, token, options = {}) => {
    try {
        const response = await fetch(`${MAIN_API}${endpoint}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            ...options
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

    } catch (err) {
        console.error(`Error deleting data to ${MAIN_API}${endpoint}`, err);

        throw err;
    }
}

export const getAvailabilities = async (endpoint, token, options = {}) => {
    try {
        const response = await fetch(`${AV_API}${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${token}`
            },
            ...options
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.error(`Error getting data from ${AV_API}${endpoint}`, err);

        throw err;
    }
}

export const getGroups = async (endpoint, token, options = {}) => {
    try {
        const response = await fetch(`${AV_API}${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${token}`
            },
            ...options
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.error(`Error getting data from ${AV_API}${endpoint}`, err);

        throw err;
    }
}


export const postAvailability = async (endpoint, availabilityData, token, options = {}) => {
    try {
        const response = await fetch(`${AV_API}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(availabilityData),
            ...options
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.error(`Error posting data to ${AV_API}${endpoint}`, err);

        throw err;
    }
}

export const postGroup = async (endpoint, groupData, token, options = {}) => {
    try {
        const response = await fetch(`${AV_API}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(groupData),
            ...options
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.error(`Error posting data to ${AV_API}${endpoint}`, err);

        throw err;
    }
}