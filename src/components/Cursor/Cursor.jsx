import React from 'react'
import './index.css'


export default function Cursor() {
   

    window.addEventListener('mousemove', function(e) {
        var mouseCursor = document.querySelector(".cursor");
        mouseCursor.style.top = e.pageY + "px";
        mouseCursor.style.left = e.pageX + "px";
    });

    // const HandleCursor = (e) => {
    //     mouseCursor.style.top = e.pageY + "px";
    //     mouseCursor.style.left = e.pageX + "px";
    // }

    return (
        <div>
            <div className="cursor">
                <div className="cursor__dot">
                    <div className="icon--cursor">

                    </div>
                </div>
            </div>
        </div>
    )
}
