import * as axios from "axios";
import React from "react";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "3c39d918-4ac3-451c-8bf8-6101894221da"}
})

export const usersAPI = {
    get_users(current_page = 1, page_size = 10) {
        return instance.get(`users?page=${current_page}&count=${page_size}`)
            .then(response => {
                return response.data
            });
    }
}

//создать методы объекта, потом допилю
/*export const unfollow = (u) => {
    return instance.delete(`unfollow/${u.id}`)
        .then(response => {
            if (response.data.resultCode === 0) {
                unfollow(u)
            }
        })
}

export const follow = (u) => {
    return instance.post(`follow/'${u.id}`)
        .then(response => {
            if (response.data.resultCode === 0) {
                follow(u.id)
            }
        })
}*/


