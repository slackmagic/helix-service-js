import decode from 'jwt-decode';
import helixUserstore from './helixUserstore';

const HelixAuth =
{
    authenticate(login, password, callback) {

        return helixUserstore.login(login, password, null)
            .then(data => {
                    this.saveItem('access-token', data.access_token);
                    this.saveItem('access-exp', decode(data.access_token).exp);
                    this.saveItem('user', decode(data.access_token).user);
                    this.saveItem('user_uuid', decode(data.access_token).user_uuid);
                    this.saveItem('person_uuid', decode(data.access_token).person_uuid);
                    this.saveItem('refresh-token', data.refresh_token);
                    this.saveItem('refresh-exp', decode(data.refresh_token).exp);
    
                    console.log(new Date(decode(data.access_token).exp * 1000));
                    console.log(new Date(decode(data.refresh_token).exp * 1000));
                    return true;
            })
            .catch(error =>  false)            
            .finally(() => {
                setTimeout(callback, 500);
            });
    },


    signout(callback) {
        sessionStorage.removeItem('access-token');
        sessionStorage.removeItem('access-exp');
        sessionStorage.removeItem('refresh-token');
        sessionStorage.removeItem('refresh-exp');
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('user_uuid');
        sessionStorage.removeItem('person_uuid');
    },


    isAuthenticated() {
        console.log("TOKEN EXPIRED:" + this.isTokenExpired(sessionStorage.getItem('access-token')));
        if ('access-token' in sessionStorage) {
            if (this.isTokenExpired(sessionStorage.getItem('access-token'))) {
                this.signout(null);
                return false;
            } else { return true; }
        } else { return false; }
    },

    whoIAm(){
      return sessionStorage.getItem('user');
    },

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            } else return false;
        } catch (err) { return false; }
    },

    async saveItem(item, selectedValue) {
        try {
            await sessionStorage.setItem(item, selectedValue);
        } catch (error) {
            console.error('sessionStorage error: ' + error.message);
        }
    },

}
export default HelixAuth;