import { createAsyncThunk } from '@reduxjs/toolkit';

const mockApiCall = async (collective: string) => {
    return {
        data: collective
    };
};

export const getCollective = createAsyncThunk<string, string, Record<string, never>>(
    'collective/getCollective',
    async (collective: string) => {
        const { data } = await mockApiCall(collective);
        return data;
    }
);
