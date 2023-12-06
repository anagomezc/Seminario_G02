const AuthService = {
  hardCodedUsers: {
    profesor: [{ username: 'profesor1', password: '1', id: 1 }, { username: 'profesor2', password: '1', id: 2 }],
    alumno: [{ username: 'JuanPaez', password: '1', id: 1 }, { username: 'GonzaloReyes', password: '1', id: 2 }],
  },

  login: (username, password) => {
    console.log("AUTH")
    for (const userType in AuthService.hardCodedUsers) {
      const users = AuthService.hardCodedUsers[userType];
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        const userData = { ...user, userType };
        sessionStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('isLoggedIn', 'true');
        console.log(sessionStorage);
        return true;
      }
    }

    return false;
  },

  logout: () => {
    sessionStorage.removeItem('userData');
    localStorage.removeItem('isLoggedIn');
  },

  isAuthenticated: () => {
    return localStorage.getItem('isLoggedIn') === 'true';
  },

  getUserData: () => {
    return JSON.parse(sessionStorage.getItem('userData'));
  },

  getUserType: () => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    return userData ? userData.userType : null;
  },
};

export default AuthService;
