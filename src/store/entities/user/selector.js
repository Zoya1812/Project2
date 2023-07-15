import { REQUEST_STATUSES } from "../../../constants/statuses";

export const selectUserModule = (state) => state.user;

export const selectUserById = (state, {userId}) => 
selectUserModule(state).entities[userId];

export const selectUserIds = (state) => 
selectUserModule(state).ids;

export const selectUsers = (state) => 
Object.values(selectUserModule(state).entities);

export const selectUsersLoadingStatus = (state) => 
selectUserModule(state).status;

export const selectIsUsersLoading = (state) => 
selectUsersLoadingStatus(state) === REQUEST_STATUSES.pending;

export const selectIsUsersLoaded = (state) => 
selectUsersLoadingStatus(state) === REQUEST_STATUSES.success;