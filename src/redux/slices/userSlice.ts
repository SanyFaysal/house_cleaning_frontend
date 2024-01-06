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
    user: IUser
}

const initialState: InitialStateType = {
    user: {},
    isLoading: false,
    isSuccess: false,
    isError: false
}



export const fetchUser = createAsyncThunk('user/fetchUser', async (token: string) => {
    const response = await fetch(`${getBaseUrl}/user/me`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data?.data;
});

export const UserSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isError = false;
            state.isLoading = false;

        },
    },
})


export const { setUser } = UserSlice.actions

export default UserSlice.reducer