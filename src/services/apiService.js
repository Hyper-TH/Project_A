import * as Data from './fetchData';

export const addMeeting = async (meetingData, token) => {
    return Data.postMeeting(`/meeting`, meetingData, token);
}