import React from 'react'
import {Redirect} from "react-router-dom";
import TextEditor from './component/TextEditor/TextEditor';
import './index.css'

export default function PostAdmin() {
    const USERLOGIN = sessionStorage.getItem("userLogin");
    return USERLOGIN ? (
        <div className="PostAdmin__texteditor">
            <TextEditor />
        </div>
    ) : ( <Redirect to="/dang-nhap" /> ) 
}
