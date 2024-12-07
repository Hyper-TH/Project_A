import * as Data from './fetchData';

export const allMeetings = async (uid, token) => 
    Data.getMeetings(`/meetings/${uid}`, token);

export const attendMeeting = async (uid, mid, token) => 
    Data.registerMeeting(`/register/${uid}/${mid}`, token);

export const createMeeting = async (meetingData, token) => 
    Data.postMeeting(`/meeting`, meetingData, token);

export const unregisterMeeting = async (uid, mid, token) => 
    Data.putAttendees(`/unregister/${uid}/${mid}`, token);

export const removeMeeting = async (uid, mid, token) => 
    Data.deleteMeeting(`/meeting/${uid}/${mid}`, token);