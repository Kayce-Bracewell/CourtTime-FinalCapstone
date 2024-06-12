import { Route, Routes } from "react-router-dom";
import { AuthorizedRoute } from "./auth/AuthorizedRoute";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { Home } from "../Home";
import { CourtList } from "./courts/CourtList";
import { CourtDetails } from "./courts/CourtDetails";
import { ProfileView } from "./prof/ProfileView";
import { ScheduleMatch } from "./match/ScheduleMatch";
import { MatchList } from "./match/MatchList";
import { MatchDetails } from "./match/MatchDetails";

export default function ApplicationViews({ loggedInUser, setLoggedInUser }) {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <Home />
            </AuthorizedRoute>
          }
        />
        <Route path="courts">
          <Route index element={<CourtList />} />
          <Route path=":id">
            <Route index element={<CourtDetails loggedInUser={loggedInUser}/>}/>
          </Route>
          <Route path=":id/schedule" element={<ScheduleMatch loggedInUser={loggedInUser}/>}/>
        </Route>
        <Route path="matches">
          <Route index element={<MatchList loggedInUser={loggedInUser} />} />
          <Route path=":id">
            <Route index element={<MatchDetails /> } />
          </Route>
        </Route>
        <Route path="profile" element={<ProfileView loggedInUser={loggedInUser}/>}/>
        <Route
          path="login"
          element={<Login setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="register"
          element={<Register setLoggedInUser={setLoggedInUser} />}
        />
      </Route>
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
    </Routes>
  );
}
