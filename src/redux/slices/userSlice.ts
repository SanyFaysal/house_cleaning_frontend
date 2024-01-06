import { getBaseUrl } from '@/helpers/config/envConfig';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IUser {
    id?: string,
    fullName?: string,
    email?: string,
    phoneNumber?: string;
    createdAt?: string;
    updatedAt?: string;
    cart?: any;
    review?: any;
    role?: string
}
type InitialStateType = {
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean,
    error: string,
    user: IUser
}

const initialState: InitialStateType = {
    user: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: ""
}

export const fetchUser = createAsyncThunk('user/fetchUser', async (token: string) => {
    const response = await fetch(`${getBaseUrl()}/user/me`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data?.data;
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        },
        logoutUser: (state) => {
            state.user = {}
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.error = '';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                // state.isLoading = false;
                // state.isError = false;
                // state.isSuccess = true;
                // state.user = action.payload;
                // state.error = '';
                state.user = action.payload
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = false;
                state.error = action.error.message as string;
            });
    },
})


export const { setUser, logoutUser } = userSlice.actions

export default userSlice.reducer