import http from "./httpServices";
import API_PATH from "./config";
import { getJWT } from "../utils/storage";
// import { getJWT } from "../utils/storage";

export async function getAndSetJwt() {
  http.setJwt(getJWT());
}
const apiToken =
  "Basic Y3liZXJmcmF0OjAyNjg2NjMyNmE5ZDFkMmIyMzIyNmU0ZTg5MjkxOTJn";
export async function loginUser(data) {
  return http.post(API_PATH.apiUserLogin, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

export async function checkAnswer(data) {
  return http.post(API_PATH.apiAnswerCheck, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

export async function changeChapterStatus(data) {
  return http.post(API_PATH.apiChangeChapterStatus, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

export async function getChapterStatus(data) {
  return http.post(API_PATH.apiGetChapterStatus, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

export async function getUserDetails(userID) {
  return http.get(API_PATH.apiGetUser + userID, {
    headers: {
      Authorization: apiToken,
    },
  });
}
export async function getCourseList() {
  return http.get(API_PATH.apiCourseList, {
    headers: {
      Authorization: apiToken,
    },
  });
}

export async function getServiceList() {
  return http.get(API_PATH.apiServiceList, {
    headers: {
      Authorization: apiToken,
    },
  });
}

export async function getEventList() {
  return http.get(API_PATH.apiEventList, {
    headers: {
      Authorization: apiToken,
    },
  });
}

export async function getBannerList() {
  return http.get(API_PATH.apiBannerList, {
    headers: {
      Authorization: apiToken,
    },
  });
}

export async function getAllotedPackage(userId) {
  return http.get(API_PATH.apiShowClientPackage + userId, {
    headers: {
      Authorization: apiToken,
    },
  });
}

export async function getChapterList(courseId) {
  return http.get(API_PATH.apiChapterList + "/" + courseId, {
    headers: {
      Authorization: apiToken,
    },
  });
}

export async function getCourseDetails(idStored) {
  return http.get(API_PATH.apiCourseDetails + "/" + idStored, {
    headers: {
      Authorization: apiToken,
    },
  });
}

export async function getChapterDetails(idStored) {
  return http.get(API_PATH.apiChapterDetails + "/" + idStored, {
    headers: {
      Authorization: apiToken,
    },
  });
}

export async function editUserDetails(data) {
  return http.post(API_PATH.apiEditUser, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

export async function changePassword(data) {
  return http.post(API_PATH.apiChangePassword, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      Authorization: apiToken,
    },
  });
}

export async function forgetPass(data) {
  return http.post(API_PATH.apiForgetPassword, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

export async function fetchPackageDetails() {
  return http.get(API_PATH.showPackage, {
    headers: {
      Authorization: apiToken,
    },
  });
}

export async function fetchquiz(chapterId) {
  return http.get(API_PATH.apiQuizList + chapterId, {
    headers: {
      Authorization: apiToken,
    },
  });
}

export async function fetchCategoryList() {
  return http.get(API_PATH.apiCategoryList, {
    headers: {
      Authorization: apiToken,
    },
  });
}

export async function fetchChapterClientList(data) {
  return http.post(API_PATH.apiChapterClientList, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

export async function addCertificate(data) {
  return http.post(API_PATH.apiAddCertificate, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

export async function addQuery(data) {
  return http.post(API_PATH.apiAddQuery, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  })
}

export async function addUser(data) {
  return await http.post(API_PATH.apiAddUser, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

export async function showPackageCourse(data) {
  return await http.post(API_PATH.apiShowPackageCourse, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  });
}

export async function buyPackage(data){
  return await http.post(API_PATH.apiBuyPackage, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  })
}

export async function allotCourse(data){
  return await http.post(API_PATH.apiAllotCourse, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  })
}

export async function allotPackage(data){
  return await http.post(API_PATH.apiAllotPackage, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      Authorization: apiToken,
    },
  })
}


// export async function updateProfile(data) {
//   await getAndSetJwt();
//   return http.post(API_PATH.apiUpdateProfile, data, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       // "Content-Type": "application/json",
//       Accept: "*/*",
//       "Accept-Encoding": "gzip, deflate, br",
//     },
//   });
// }

// export async function getUserInfo(data) {
//   await getAndSetJwt();
//   return http.post(API_PATH.apiGetUserInfo, data, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       // "Content-Type": "application/json",
//       Accept: "*/*",
//       "Accept-Encoding": "gzip, deflate, br",
//     },
//   });
// }
