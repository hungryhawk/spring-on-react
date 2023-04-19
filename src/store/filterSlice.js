import { createSlice } from '@reduxjs/toolkit';
import blocks from '../utils/blocks';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    data: blocks,
    filteredBlocks: blocks,
    searchTerm: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    filterByName: (state, action) => {
      const filteredResult = state.data.filter(
        (block) =>
          block.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          block.description.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredBlocks:
          action.payload.length > 0 ? filteredResult : [...state.data],
      };
    },
  },
});

export const { filterByName, setSearchTerm } = filterSlice.actions;
export default filterSlice.reducer;

// import { createSlice, createStore } from "@reduxjs/toolkit";
// import { useDispatch, useSelector, Provider } from "react-redux";
// import { useEffect, useState } from "react";
// import * as ReactDOM from "react-dom";

// const users = createSlice({
//   name: "users",
//   initialState: {
//     users: [{ name: "aldo" }, { name: "kiv" }],
//     filteredUsers: [{ name: "aldo" }, { name: "kiv" }],
//     isLoading: true,
//     search: ""
//   },
//   reducers: {
//     usersSuccess: (state, action) => {
//       state.users = action.payload;
//       state.isLoading = false;
//       return {
//         users: action.payload,
//         filteredUsers: [...action.payload],
//         isLoading: false
//       };
//     },
//     searchByName: (state, action) => {
//       const filteredUsers = state.users.filter((user) =>
//         user.name.toLowerCase().includes(action.payload.toLowerCase())
//       );
//       return {
//         ...state,
//         filteredUsers:
//           action.payload.length > 0 ? filteredUsers : [...state.users]
//       };
//     }
//   }
// });

// const userActions = users.actions;

// // store
// var store = createStore(users.reducer);

// component
// function App() {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.users);
//   const filteredUsers = useSelector((state) => state.filteredUsers);
//   const [searchTerm, setSearchTerm] = useState("");

//   console.log(users);

//   const changeSearchTerm = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   useEffect(() => {
//     dispatch(userActions.searchByName(searchTerm));
//   }, [searchTerm, dispatch]);

//   return (
//     <div>
//       <input onChange={changeSearchTerm} type="text" value={searchTerm} />
//       <div>
//         {filteredUsers.map((user) => (
//           <div>{user.name}</div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
