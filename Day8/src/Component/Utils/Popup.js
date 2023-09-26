import React from "react";
import "../../assets/css/Popup.css";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";


const Popup = ({ togglePopup, handleGotItClick, message: { type, content, btn } }) => {

    const popupRef = useRef(null);
    
    useEffect(() => {
        if(popupRef.current){
            const contentWidth = popupRef.current.scrollWidth;
            if(contentWidth){
                popupRef.current.style.width = '${contentWidth}px';
            }
        }
    }, [type, content]);
    return(
       <div className="popup" ref={popupRef}>
        <div className="popup-header">{type}
        <span className="close toggle" onClick={togglePopup}></span></div>
        <div className="popup-body">{content}</div>
        <div className="popup-footer">
            <button className="popup-button" onClick={() => { togglePopup(); handleGotItClick() }}>GOT IT</button>
        </div>
       </div>
    )
}
export default Popup;