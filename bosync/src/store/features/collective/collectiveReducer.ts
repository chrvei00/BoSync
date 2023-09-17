import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface CollectiveState {
    collective: string;
    collectiveError: string;
    collectiveLoading: boolean;
}

const initialDataState: CollectiveState = {
    collective: '',
    collectiveError: '',
    collectiveLoading: false
};

export const collectiveSlice = createSlice({
    name: 'collective',
    initialState: initialDataState,
    reducers: {
        setCollective: (state, action: PayloadAction<string>) => {
            state.collective = action.payload;
        }
    }
});

export const { setCollective } = collectiveSlice.actions;

export const collectiveReducer = collectiveSlice.reducer;

export const selectCollective = (state: RootState) => state.collective.collective;
