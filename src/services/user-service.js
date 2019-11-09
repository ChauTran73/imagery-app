import config from '../config'

const UserService = {
    saveUser(user) {
        window.localStorage.setItem(config.USER_NAME, user)
    },
    getUser(){
        return window.localStorage.getItem(config.USER_NAME)
    },
    clearUser(){
        window.localStorage.removeItem(config.USER_NAME)
    },
    hasUser() {
        return !!this.getUser()
    },
}
export default UserService;