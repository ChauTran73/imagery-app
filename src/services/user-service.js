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
    // saveUserId(id){ //should I save userId in the local storage like this?
    //     window.localStorage.setItem('id', id)
    // },
    // getUserId(){
    //     return window.localStorage.getItem('id')
    // },
}
export default UserService;