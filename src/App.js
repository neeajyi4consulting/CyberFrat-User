import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserAction } from "./redux/actions/authActions";
import Profile from "../src/layout/Profile";
import LoginScreen from "./layout/Auth/Login";
import SignupScreen from "./layout/Auth/SignupScreen";
import ForgetPassword from "./layout/Auth/ForgetPassword";
import Navbar from "./component/header/Navbar";
import Footer from "./component/footer/Footer";
import Courses from "./layout/AllotedCourses";
import AllCourses from "./layout/AllCourses";
import ChapterVideo from "./layout/chapter/ChapterVideo";
import ChapterQuiz from "./layout/chapter/ChapterQuiz";
import Dashboard from "./layout/Dashboard";
import Certificate from "./Pages/certificate/export-pdf.component";
import Landingpage from "./layout/LandingPage";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAction());
  }, []);
  return (
    <>
      {!currentUser ? (
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/signup" component={SignupScreen} />
          <Route exact path="/forgetpassword" component={ForgetPassword} />
          <Redirect from="/dashboard" to="/" />
        </Switch>
      ) : (
        <>
          <Navbar />
          <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/allcourses" component={AllCourses} />
            <Route
              exact
              path="/courses/chapterquiz/:id"
              component={ChapterQuiz}
            />
            <Route
              exact
              path="/courses/chaptervideo/:id"
              component={ChapterVideo}
            />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/certificate/:id" component={Certificate} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
