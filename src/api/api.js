import axios from "axios";

// - because crossdomain query (localhost => samuraijs.api), we need send cookie with query.
//      We add second parameter 'withCredentials'.
const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '9ba50d04-a62e-4b79-81da-db22d5a24da9'
  }
})

export const usersAPI = {

// (currentPage = 1, pageSize = 5) - function parameter by default.
  getUsers(currentPage = 1, pageSize = 5) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },

  follow(userId) {
    return instance.post(`follow/${userId}`);
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },

  getProfile(userId) {
    console.warn('Obsolete method. Please use "profileAPI" object.')
    // return instance.get(`profile/` + userId);
    return profileAPI.getProfile(userId);
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, {status: status});
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}

