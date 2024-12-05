import * as Data from './fetchData';

export const allMeetings = async (uid, token) => {
    return Data.getMeetings(`/meetings/${uid}`, token);
}

export const attendMeeting = async (uid, mid, token) => {
    return Data.registerMeeting(`/register/${uid}/${mid}`, token);
}

export const createMeeting = async (meetingData, token) => {
    return Data.postMeeting(`/meeting`, meetingData, token);
}