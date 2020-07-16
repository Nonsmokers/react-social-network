export const get_users = (state) => {
    return state.users_page.users
}

export const get_page_size = (state) => {
    return state.users_page.page_size
}

export const get_total_users_count = (state) => {
    return state.users_page.total_users_count
}

export const get_current_page = (state) => {
    return state.users_page.current_page
}

export const get_is_fetching = (state) => {
    return state.users_page.is_fetching
}
export const get_following_in_progress = (state) => {
    return state.users_page.following_in_progress
}