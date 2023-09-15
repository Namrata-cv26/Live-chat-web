// import { post } from '../../../server/routes/userRoutes';

import axios from "axios";
// const fetch = require('node-fetch')
export const host = "http://localhost:8800";
export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;
export const setAvatarRoute = `${host}/api/auth/setAvatar`;
export const allUsersRoute = `${host}/api/auth/allUsers`;
export const logoutRoute = `${host}/api/auth/logout`;
export const sendMessageRoute = `${host}/api/message/addmsg`;
export const getAllMessagesRoute = `${host}/api/message/getmsg`;

// export const uploadFile = async(data)=>{
//     try{
//         return await axios.post(`${host}/file/upload`,data);
//     }
//     catch(error){
//         console.log("Error while calling upload file api" ,error.message);
//     }
// }

// export const uploadFile = async(data) => {
//     try {
//         return await fetch(`${host}/file/upload`, {
//             method: post,
//             body: JSON.stringify(data)
//         })
//     }
//     catch(error){
//         console.log("Error while calling upload file api" ,error.message);
//     }
// }
