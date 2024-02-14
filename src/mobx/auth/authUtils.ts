export class TokenStorage {
    static getToken() {
        return localStorage.getItem('access')
    }
    static setToken(value: string) {
        return localStorage.setItem('access', value)
    }

    static removeToken() {
        return localStorage.removeItem('access')
    }
}

export class RoleStorage {
    static getRole() {
        return localStorage.getItem('role')
    }
    static setRole(value: string) {
        return localStorage.setItem('role', value)
    }

    static removeRole() {
        return localStorage.removeItem('role')
    }
}