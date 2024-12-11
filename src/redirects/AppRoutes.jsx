import { Routes, Route } from 'react-router-dom';
import * as Pages from './RouteImports.js';
import ProtectedRoute from './ProtectedRoute.jsx';

const AppRoutes = () => (
    <Routes>
        <Route
            path="/"
            element={<Pages.LoginPage />}
        />

        <Route
            path="/signup"
            element={<Pages.SignUpPage />}
        />

        <Route
            path="/home"
            element={<ProtectedRoute element={<Pages.HomePage />} />}
        />

        <Route
            path="/allMeetings"
            element={<ProtectedRoute element={<Pages.AllMeetingsPage backTo="/home" />} />}
        />
        
        <Route
            path="/registerMeeting"
            element={<ProtectedRoute element={<Pages.RegisterMeeting backTo="/home"/>} />}
        />

        <Route
            path="/addMeeting"
            element={<ProtectedRoute element={<Pages.AddMeetingPage backTo="/home" />} />}
        />

        <Route
            path="/allAvailabilities"
            element={<ProtectedRoute element={<Pages.AllAvailabilitiesPage backTo="/home" />} />}
        />

        <Route
            path="/addAvailability"
            element={<ProtectedRoute element={<Pages.AddAvailabilityPage backTo="/home" />} />}
        />
    </Routes>
);

export default AppRoutes;