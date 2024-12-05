import * as Data from './fetchData';

export const createMeeting = async (meetingData, token) => {
    return Data.postMeeting(`/meeting`, meetingData, token);
}

export const allMeetings = async (uid, token) => {
    return Data.getMeetings(`/meetings/${uid}`, token);
}