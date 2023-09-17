import { createSlice } from '@reduxjs/toolkit';
import { Collective } from '../../../types/collective';
import { RootState } from '../../store';
import {
    createCollectiveThunk,
    getAllCollectivesThunk,
    getCollectiveByIdThunk,
    updateCollectiveThunk
} from './collectiveThunks';
import { addEventThunk } from './eventThunks';

interface CollectiveState {
    collective: Collective;
    allCollectives: Collective[];
    collectiveError: string;
    collectiveLoading: boolean;
}

const initialDataState: CollectiveState = {
    collective: {} as Collective,
    allCollectives: [],
    collectiveError: '',
    collectiveLoading: false
};

export const collectiveSlice = createSlice({
    name: 'collective',
    initialState: initialDataState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCollectiveByIdThunk.fulfilled, (state, action) => {
                state.collectiveLoading = false;
                state.collective = action.payload;
            })
            .addCase(getCollectiveByIdThunk.pending, (state) => {
                state.collectiveLoading = true;
            })
            .addCase(getAllCollectivesThunk.fulfilled, (state, action) => {
                state.allCollectives = action.payload;
            })
            .addCase(createCollectiveThunk.fulfilled, (state, action) => {
                state.collective = action.payload;
            })
            .addCase(updateCollectiveThunk.fulfilled, (state, action) => {
                state.collective = action.payload;
            })
            .addCase(addEventThunk.fulfilled, (state, action) => {
                state.collective = action.payload;
            });
    }
});

export const collectiveReducer = collectiveSlice.reducer;

export const selectCollective = (state: RootState) => state.collective.collective;

export const selectAllCollectives = (state: RootState) => state.collective.allCollectives;

export const selectCurrentEvents = (state: RootState) => state.collective.collective.event;

export const selectCurrentMembers = (state: RootState) => state.collective.collective.members;
