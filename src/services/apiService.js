// TODO: Add a validation before calling fetchData
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

export const allAvailabilities = async (uid, token) =>
    Data.getAvailabilities(`/availabilities/${uid}`, token);

export const allGroups = async (uid, token) =>
    Data.getGroups(`/groups/${uid}`, token);

export const joinGroup = async (uid, gid, token) =>
    Data.putGroup(`/group/${uid}/${gid}`, token);

export const createAvailability = async (availability, token) =>
    Data.postAvailability(`/availability`, availability, token);

export const createGroup = async (group, token) =>
    Data.postGroup(`/group`, group, token);

  