import * as axios from "axios";
import React from "react";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "3c39d918-4ac3-451c-8bf8-6101894221da"},
})

export const usersAPI = {
    get_users(current_page = 1, page_size = 10) {
        return instance.get(`users?page=${current_page}&count=${page_size}`)
            .then(response => {
                return response.data
            });
    },

    unfollow(user_id) {
        return instance.delete(`follow/${user_id}`)
    },
    follow(user_id) {
        return instance.post(`follow/${user_id}`)
    }
}

export const profileAPI = {
    get_profile(user_id) {
        return instance.get(`profile/${user_id}`)
    },
    get_status(user_id) {
        return instance.get(`profile/status/${user_id}`)
    },
    update_status(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}