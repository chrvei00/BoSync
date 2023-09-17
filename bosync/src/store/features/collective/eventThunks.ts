import { createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';
import { updateCollective } from '../../../api/collective';
import { Collective, Event } from '../../../types/collective';
import { RootState } from '../../store';
import { selectCollective } from './collectiveReducer';

export const addEventThunk = createAsyncThunk<Collective, Event, Record<string, never>>(
    'event/addEvent',
    async (event: Event, { getState }) => {
        const collective = selectCollective(getState() as RootState);
        const collectiveClone = _.cloneDeep(collective);
        collectiveClone.event.push(event);

        const updatedCollective = await updateCollective(collectiveClone);
        return updatedCollective.data as Collective;
    }
);
