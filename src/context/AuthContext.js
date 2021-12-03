import React, { createContext, useEffect, useState } from "react";

// import { setJWT, getUserInfoFromJWT, cleanLocalStorage } from "utils/storage";
import {
  setJWT,
  getUserInfoFromJWT,
  cleanLocalStorage,
} from "../utils/storage";
// import { Redirect, useHistory } from "react-router";
import { toast } from "react-toastify";
import {
  loginUser,
  forgetPass,
  getCourseList,
  editUserDetails,
  getChapterDetails,
} from "../api/index";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  // const history = useHistory();

  // async function login(data) {
  //   return loginUser(data)
  //   .then(async (res) => {
  //     await console.log(res);
  //     await setJWT(res?.data.token);
  //     setCurrentUser(await getUserInfoFromJWT()(res.data.token));

  //   })
  //   .catch((error) => console.log(error));
  //   };
  // }

  const login = async (data) => {
    return loginUser(data)
      .then(async (response) => {
        if (response.data?.status === true) {
          await setJWT(response?.data?.data?.token);
          setCurrentUser(getUserInfoFromJWT(response.data?.data?.token));
          setIsSidebarOpen(false);
        } else {
          console.log("INVALID Login Details ");
        }
        return response;
      })
      .catch((error) => console.log(error));
  };

  const editDetails = async (data) => {
    return editUserDetails(data)
      .then(async (response) => {
        if (response.data?.status === true) {
          // await setJWT(response?.data?.data?.token);
          // setCurrentUser(getUserInfoFromJWT(response.data?.data?.token));
          toast.info("success edited");
        } else {
          console.log("INVALID Login Details ");
        }
        return response;
      })
      .catch((error) => console.log(error));
  };
  // const signup = (data) => {
  //   return addUser(data)
  //     .then(async (response) => {
  //       if (response.data?.status === true) {
  //         await console.log(response);
  //       } else {
  //         console.log("INVALID signup Details ");
  //       }
  //       return response;
  //     })
  //     .catch((error) => console.log(error));
  // };

  const forgetPasscode = async (data) => {
    return forgetPass(data)
      .then(async (response) => {
        console.log("response from context", response);
        return response;
      })
      .catch((error) => console.log(error));
  };

  const getdetailsForAllCourses = async () => {
    return getCourseList()
      .then(async (response) => {
        console.log("response from context", response);
        return response;
      })
      .catch((error) => console.log(error));
  };

  const fetchChapterDetails = async (id) => {
    return getChapterDetails(id)
      .then(async (response) => {
        console.log("response from context", response);
        return response;
      })
      .catch((error) => console.log(error));
  };

  function logout() {
    cleanLocalStorage();
    setCurrentUser(null);
    toast.success("Logged out Successfully");
  }

  useEffect(() => {
    (async () => {
      setCurrentUser(await getUserInfoFromJWT()());
      setLoading(false);
      setIsSidebarOpen(true);
    })();
  }, []);

  const value = {
    currentUser,
    isSidebarOpen,
    login,
    logout,
    forgetPasscode,
    getdetailsForAllCourses,
    editDetails,
    fetchChapterDetails,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
