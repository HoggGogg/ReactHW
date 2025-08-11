import type {IComment} from "../../models/IComment.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type CommentSliceType = {
    comments: IComment[]
}

const initCommentSliceState: CommentSliceType = { comments: []};

const loadComment = createAsyncThunk('loadComment', async (_, thunkAPI)=> {
    try {
        const comments = await getAll<IComment[]>('/comments');
        return comments;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const commentSlice = createSlice({
    name : 'commentSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadComment.fulfilled, (state, action: PayloadAction<IComment[]>) => {
        state.comments = action.payload;
    })
});

export const commentAction = {...commentSlice, loadComment};