import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'movieSearch',
  initialState: "",
  reducers: {
    setSearch: (state, action) => action.payload
  },
})

export const { setSearch } = searchSlice.actions
export default searchSlice.reducer