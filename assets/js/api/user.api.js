const defaultUser = {
  id:"user_1",
  username:"viewer01",
  role:"viewer",
  balance:1000,
  vipLevel:0,
  referralCode:"ABC123",
  invitedBy:null,
  createdAt:Date.now()
};

// Single user mock for PHASE 2A
let currentUser = JSON.parse(localStorage.getItem("hola_user")) || defaultUser;
localStorage.setItem("hola_user", JSON.stringify(currentUser));

export const UserAPI = {
  async getCurrentUser(){
    return JSON.parse(localStorage.getItem("hola_user"));
  },
  async updateUser(userData){
    currentUser = {...currentUser, ...userData};
    localStorage.setItem("hola_user", JSON.stringify(currentUser));
    return currentUser;
  }
};
