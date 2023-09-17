import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    createCollective,
    getAllCollectives,
    getCollectiveById,
    getCollectiveByName,
    updateCollective
} from '../../../api/collective';
import { Collective } from '../../../types/collective';

export const getCollectiveByIdThunk = createAsyncThunk<Collective, string, Record<string, never>>(
    'collective/getCollective',
    async (collectiveId: string) => {
        const collective = await getCollectiveById(collectiveId);
        return collective.data as Collective;
    }
);

export const getCollectiveByNameThunk = createAsyncThunk<Collective, string, Record<string, never>>(
    'collective/getCollectiveByName',
    async (collectiveName: string) => {
        const collective = await getCollectiveByName(collectiveName);
        return collective.data as Collective;
    }
);

export const getAllCollectivesThunk = createAsyncThunk<Collective[], void, Record<string, never>>(
    'collective/getAllCollectives',
    async () => {
        const collectives = await getAllCollectives();
        return collectives.data as Collective[];
    }
);

export const createCollectiveThunk = createAsyncThunk<
    Collective,
    Collective,
    Record<string, never>
>('collective/createCollective', async (collective: Collective) => {
    const createdCollective = await createCollective(collective);
    return createdCollective.data as Collective;
});

export const updateCollectiveThunk = createAsyncThunk<
    Collective,
    Collective,
    Record<string, never>
>('collective/updateCollective', async (collective: Collective) => {
    const createdCollective = await updateCollective(collective);
    return createdCollective as Collective;
});
