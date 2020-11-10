import HelixService from "./helixService";

const LOGIN = "/api/userstore/login";
const USER_LIST = "/api/userstore/users";

const HelixUserstore = {

    login(login, password, callback) {

        return HelixService.post(LOGIN, JSON.stringify({
            login: login,
            password: password
        }), null);
    },

    userList(callback) {
        return HelixService.getWithAuth(USER_LIST, null);
    },
}

export default HelixUserstore;