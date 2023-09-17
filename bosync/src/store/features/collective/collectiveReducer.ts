import { createSelector, createSlice } from '@reduxjs/toolkit';
import { Collective } from '../../../types/collective';
import { RootState } from '../../store';
import {
    createCollectiveThunk,
    getAllCollectivesThunk,
    getCollectiveByIdThunk,
    getCollectiveByNameThunk,
    updateCollectiveThunk
} from './collectiveThunks';
import { addEventThunk, updateEventThunk } from './eventThunks';

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
    reducers: {
        addEvent: (state, action) => {
            state.collective.event.push(action.payload);
        }
    },
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
            .addCase(getCollectiveByNameThunk.fulfilled, (state, action) => {
                state.collective = action.payload;
            })
            .addCase(updateEventThunk.fulfilled, (state, action) => {
                state.collective = action.payload;
            })
            .addCase(addEventThunk.fulfilled, (state, action) => {
                state.collective = action.payload;
            });
    }
});

export const { addEvent } = collectiveSlice.actions;

export const collectiveReducer = collectiveSlice.reducer;

export const selectCollective = (state: RootState) => state.collective.collective;

export const selectAllCollectives = (state: RootState) => state.collective.allCollectives;

export const selectCurrentEvents = (state: RootState) => state.collective.collective.event;

export const selectCurrentMembers = (state: RootState) => state.collective.collective.members;

export const selectEventsOnDate = (date: Date) =>
    createSelector(selectCurrentEvents, (events) =>
        events?.filter(
            (event) =>
                new Date(event.deadline).getFullYear() === date.getFullYear() &&
                new Date(event.deadline).getMonth() === date.getMonth() &&
                new Date(event.deadline).getDate() === date.getDate()
        )
    );
