type Credentials = {
    email: string,
    password: string,
}

//just for testing
const delay = (ms: number) => new Promise((_) => setTimeout(_,ms))

export class AuthApi {
    static async signIn(payload: Credentials) {
        await delay(10)
        return {
            success: true,
            message: "Logged in successfuly",
            data: {
                "_id": "65a12b271bcb1e19f4184c26",
                "email": "user@example.com",
                "profile": null,
                "role": "student",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1YTEyYjI3MWJjYjFlMTlmNDE4NGMyNiIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsInJvbGUiOiJzdHVkZW50In0sImlwIjoiMjEyLjExMi4xMTguNiwgMTYyLjE1OC45NC4xMiwgMTAuMjE3LjcuMTM3IiwiaWF0IjoxNzA3OTQxMjQwLCJleHAiOjE3MDgwMjc2NDB9.9Ijm_JAtOR2387CuAzAZ2qWe7jFyBfDY9__fAueXmr8"
            }
        }
    }

    static async signUp(payload: Credentials & { role: string }) {
        await delay(10)
        return {
            success: true, message: 'signed up', data: {
                "_id": "65cd1d58e52a7828bdc09654",
                "email": "usewr@example.com",
                "profile": null,
                "role": "mentor",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1Y2QxZDU4ZTUyYTc4MjhiZGMwOTY1NCIsImVtYWlsIjoidXNld3JAZXhhbXBsZS5jb20iLCJyb2xlIjoibWVudG9yIn0sImlwIjoiMjEyLjExMi4xMTguNiwgMTYyLjE1OC45NC4xOTUsIDEwLjIxNy4xNTQuOCIsImlhdCI6MTcwNzk0MTIwOCwiZXhwIjoxNzA4MDI3NjA4fQ.X0gppTjLq2nUJmsQwfrAkrrw0-i3SKVU8iO19-YMG7Q"
            }
        }
    }

    static async logOut() {
        await delay(10)
        return {success: true, message: 'logged out'}
    }
}

