import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateCollective } from '../../../api/collective';
import { Collective, Event } from '../../../types/collective';
import { RootState } from '../../store';

export const addEventThunk = createAsyncThunk<Collective, Event, Record<string, never>>(
    'event/addEvent',
    async (event: Event, { getState }) => {
        const collective = (getState() as RootState).collective.collective;
        collective.event.push(event);
        const updatedCollective = await updateCollective(collective);
        return updatedCollective as Collective;
    }
);
