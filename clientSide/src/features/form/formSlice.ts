import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance'


interface FormState {
    forms: any[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null | undefined
}

const initialState: FormState = {
    forms: [],
    status: 'idle',
    error: null
};
export const fetchForms = createAsyncThunk('forms/fetchForms', async () => {
    const response = await axiosInstance.get('/api/forms');
    console.log("heyyyyyyy", response)
    const data = await response.json();
    return data;
});

export const submitForm = createAsyncThunk('forms/submitForm', async (formData: any) => {
    const response = await axiosInstance.post('/api/forms/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    return data;
  });

const formSlice = createSlice({
    name: 'forms',
    initialState,
    reducers: {
        getFormsStart(state) {
            state.status = 'loading'
        },
        getFormsSuccess(state, action: PayloadAction<any[]>) {
            state.status = 'succeeded';
            state.forms = action.payload;
        },
        getFormsFailure(state, action: PayloadAction<string>) {
            state.status = 'failed';
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchForms.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchForms.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.status = 'succeeded';
                state.forms = action.payload;
            })
            .addCase(fetchForms.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(submitForm.pending, (state) => {
                state.status = 'loading';
              })
              .addCase(submitForm.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded';
                state.forms = action.payload
              })
              .addCase(submitForm.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
              });

    }
});

export const { getFormsStart, getFormsSuccess, getFormsFailure } = formSlice.actions;

export default formSlice.reducer;