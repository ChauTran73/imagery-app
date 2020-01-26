import config from '../config'

const UserService = {
    saveUser(user, userId) {
        window.localStorage.setItem(config.USER_NAME_IMAGERY, user)
        window.localStorage.setItem(config.USER_ID_IMAGERY, userId)
    },
    getUser(){
        return window.localStorage.getItem(config.USER_NAME_IMAGERY, config.USER_ID_IMAGERY)
    },
    clearUser(){
        window.localStorage.removeItem(config.USER_NAME_IMAGERY)
        window.localStorage.removeItem(config.USER_ID_IMAGERY)
    },
    hasUser() {
        return !!this.getUser()
    },
}
export default UserService;