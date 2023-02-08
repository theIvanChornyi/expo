export const selectUserId = state => state.auth.id;
export const selectUserStatus = state => state.auth.isAuth;
export const selectUser = state => state.auth.user;
export const avatarUser = state => state.auth.user.photoURL;
