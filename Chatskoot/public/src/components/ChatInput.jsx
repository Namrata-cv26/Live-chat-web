import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import Picker from 'emoji-picker-react'
import {IoMdSend} from 'react-icons/io'
import {BsEmojiSmileFill} from 'react-icons/bs'
//import axios from 'axios'
//import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
//import { uploadFile } from '../utils/APIRoutes';
export default function ChatInput({handleSendMsg}) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState("");
    // const [file,setFile]=useState();

    const handleEmojiPickerHideShow = ()=>{
        setShowEmojiPicker(!showEmojiPicker);
    };

    const handleEmojiClick = (e,emoji)=>{
        let message= msg;
        message += emoji.emoji;
        setMsg(message);
    }

    const sendChat = (e)=>{
        e.preventDefault();
        if(msg.length>0){
            handleSendMsg(msg);
            setMsg('');
        }
    }
    
    // useEffect(()=>{
    //     const getImage=async(e)=>{
    //         if(file){
    //         const data = new FormData();
            
    //         data.append("name",file.name);
    //         data.append("file",file);
    //         const response = await uploadFile(data);
    //         setImage(response.data);
    //         }
    //     }
    //     getImage();
    // },[file])

    // const onFileChange=(e)=>{
    //     setValue(e.target.files[0].name);
    //     setFile(e.target.files[0]);
    // }
  return (
    <Container>
        <div className="button-container">
            <div className="emoji" >
                <BsEmojiSmileFill onClick={handleEmojiPickerHideShow}/>
                { showEmojiPicker && <Picker onEmojiClick={handleEmojiClick}/> }
            </div>
           <div>
            <input type="file" name="Choose file" className='file'/>
           </div>
            
        </div>
        <form className='input-container' onSubmit={(e)=>sendChat(e)}>
            <input type="text" placeholder='Type your message here!' value={msg} onChange={(e)=>{setMsg(e.target.value)}}/>
            <button className="submit">
                <IoMdSend />
            </button>
        </form>
    </Container>
  )
}

const Container = styled.div`
display: grid;
grid-template-columns: 5% 95%;
align-items: center;
background-color: black;
padding: 0 2rem;
padding-bottom: 0.3rem;
@media screen and (min-width: 720px) and (max-width: 1080px){
    padding: 0 1rem;
    gap: 1rem;
}
.button-container{
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji{
        position: relative;
        svg{
            font-size: 1.5rem;
            color: #ffff00c8;
            cursor: pointer;
        }
        .emoji-picker-react{
            position: absolute;
            top: -350px;
            background-color: black;
            box-shadow: 0 5px 10px #cfaa41;
            border-color: #cfaa41;
            .emoji-scroll-wrapper::-webkit-scrollbar{
                background-color: black;
                width: 5px;
                &-thumb {
                    background-color: #cfaa41;
                }
            }
            .emoji-categories{
                button{
                    filter: contrast(0);
                }
            }
            .emoji-search{
                background-color: transparent;
                border-color: ;
                color: white;
            }
            .emoji-group:before {
                background-color: black;
            }
        }
    }
}

.input-container{
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 10rem;
    background-color: black;
    input{
        width: 100%;
        height: 100%;
        background-color: transparent;
        color: white;
        border: none;
        padding-left: 1rem;
        font-size: 1.2rem;
        &::selection{
            background-color: black;
        }
        &:focus{
            outline:none;
        }
    }
    button{
        padding: 0.3rem 2rem;
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #cfaa41;
        border: none;
        cursor: pointer;
        @media screen and (min-width: 720px) and (max-width: 1080px){
            padding: 0.3rem 1rem;
            svg{
            font-size: 1rem;
            color: white;
        }
        }
        svg{
            font-size: 2rem;
            color: white;
        }
    }
}

.file{
    height:70px;
    width:100px;
    color:#cfaa41;
    background-color:#cfaa41;
    
}
`;
