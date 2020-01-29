import config from '../config'

const UserService = {
    saveUser(user, userId) {
        window.localStorage.setItem(config.USER_NAME, user)
        window.localStorage.setItem(config.USER_ID, userId)
    },
    getUser(){
        return window.localStorage.getItem(config.USER_NAME, config.USER_ID)
    },
    clearUser(){
        window.localStorage.removeItem(config.USER_NAME)
        window.localStorage.removeItem(config.USER_ID)
    },
    hasUser() {
        return !!this.getUser()
    },
}
export default UserService;