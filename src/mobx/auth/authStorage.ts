import {makeAutoObservable, runInAction} from "mobx";
import {RoleStorage, TokenStorage} from "./authUtils";
import {AuthApi} from "./authApi";

class AuthStorage {
    isAuth: boolean = false
    role: string | null = null

    constructor() {
        this.checkAuth()
        makeAutoObservable(this)
    }

    checkAuth = () => {
        this.isAuth = !!TokenStorage.getToken()
        if (this.isAuth)
            this.role = RoleStorage.getRole()
        else
            this.role = null
    }

    signIn = async (email: string, password: string) => {
        try {
            const response = await AuthApi.signIn({email, password})
            runInAction(() => {
                const token = response.data.token;
                const role = response.data.role;
                TokenStorage.setToken(token)
                RoleStorage.setRole(role)
                this.checkAuth()
            })
        } catch (err) {
            return err
        }
    }

    signUp = async (email: string, password: string, role: string) => {
        try {
            const response = await AuthApi.signUp({email, password, role})
            runInAction(() => {
                const token = response.data.token;
                const role = response.data.role;
                TokenStorage.setToken(token)
                RoleStorage.setRole(role)
                this.checkAuth()
            })
        } catch (err) {
            return err
        }
    }

    logOut = async () => {
        try {
            const response = await AuthApi.logOut()
            runInAction(() => {
                TokenStorage.removeToken()
                RoleStorage.removeRole()
                this.checkAuth()
            })
        } catch (err) {
            return err
        }
    }
}

export const authStorage = new AuthStorage()