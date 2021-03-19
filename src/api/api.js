import axios from "axios";

// - because crossdomen query (localhost: => samuraijs.api), we need send cookie with query.
//      We add second parameter 'withCredentials'.
const instance = axios.create({
  // withCredentials: true,
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
    return instance.get(`profile/` + userId);
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}

