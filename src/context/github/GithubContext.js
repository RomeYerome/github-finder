import { createContext, useReducer } from "react"
// import { useState } from "react"
import githubReducer from './GithubReducer'


const GithubContext = createContext()


export const GithubProvider = ({ children }) => {
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // Get initial users for testing purposes
    // const fetchUsers = async () => {
    //     setLoading()

    //     const response = await fetch(`${GITHUB_URL}/users`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })

    //     const data = await response.json()
    //     // setUsers(data)
    //     // setLoading(false)

    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: data
    //     })
    // }


    // const searchUsers = async (text) => {
    //     setLoading()

    //     const params = new URLSearchParams({
    //         q: text,
    //     })

    //     const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })

    //     const { items } = await response.json()
    //     // setUsers(data)
    //     // setLoading(false)

    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: items
    //     })

    // }


    // const getUser = async (login) => {
    //     setLoading()


    //     const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })

    //     if (response.status === 404) {
    //         // window.location = '/notfound'
    //         console.log(response.status)
    //     } else {

    //         const data = await response.json()
    //         // setUsers(data)
    //         // setLoading(false)

    //         dispatch({
    //             type: 'GET_USER',
    //             payload: data
    //         })

    //     }


    // }

    // Get User Repos
    // const getUserRepos = async (login) => {
    //     setLoading()

    //     const params = new URLSearchParams({
    //         sort: 'created',
    //         per_page: 10
    //     })

    //     const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })

    //     const data = await response.json()

    //     dispatch({
    //         type: 'GET_REPOS',
    //         payload: data
    //     })

    // }





    return <GithubContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </GithubContext.Provider>
}


export default GithubContext