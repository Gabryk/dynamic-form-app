import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  RejectedActionFromAsyncThunk,
  FulfilledActionFromAsyncThunk,
  PendingActionFromAsyncThunk,
} from "@reduxjs/toolkit/dist/matchers";
import fakeApplication from "services/fakeApplication";

type Data = { [x: string]: string | number };
export interface UserApplication {
  loading?: boolean;
  error?: string;
  data?: Data;
}

const initialState: UserApplication = {};

export const uploadUserApplication = createAsyncThunk(
  "user/upload",
  async (data: Data, { signal }) => {
    const [promise, abort] = fakeApplication(data);

    signal.addEventListener("abort", () => {
      abort();
    });

    return await promise;
  }
);
const setSuccessUserApplication = (
  _: UserApplication,
  action: FulfilledActionFromAsyncThunk<typeof uploadUserApplication>
) => ({
  loading: false,
  data: action.payload,
});
const setLoadingUserApplication = (
  _: UserApplication,
  action: PendingActionFromAsyncThunk<typeof uploadUserApplication>
) => ({
  loading: true,
});
const setFailUserApplication = (
  _: UserApplication,
  action: RejectedActionFromAsyncThunk<typeof uploadUserApplication>
): UserApplication => ({
  loading: false,
  error: action.error.message,
});

const setUserData = (
  _: UserApplication,
  action: PayloadAction<Data>
): UserApplication => {
  return { data: action.payload, loading: false };
};

export const userApplicationSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData,
  },
  extraReducers(builder) {
    builder.addCase(uploadUserApplication.pending, setLoadingUserApplication);
    builder.addCase(uploadUserApplication.fulfilled, (state, action) =>
      setSuccessUserApplication(state, action)
    );
    builder.addCase(uploadUserApplication.rejected, setFailUserApplication);
  },
});

export const { setUserData: setUserDataAction } = userApplicationSlice.actions;

export default userApplicationSlice.reducer;
