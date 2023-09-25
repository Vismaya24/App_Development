import React from "react";
import { Link } from "react-router-dom";
import { useParams
 } from "react-router-dom";
 import "../assets/css/Buy.css";
 import { useState } from "react";
 import { FaArrowLeft } from "react-icons/fa";
import NavBar from "./Utils/NavBar";
import { CountDownTimer } from "./CountDown";

const ArtDetails = () => {
    const targetDate = new Date('2023-09-29T23:59:59');
    const { detailId } = useParams();
    const [details, setDetails] = useState([
        { id: '1', name: 'Sorry fürs Anspritzen', artist: 'Aneta Kajzer', type: 'Painting', year: '2023', price: '₹ 13,77,485', imgUrl: 'https://img.freepik.com/free-photo/vintage-landscape-with-gondolas_1160-162.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=ais', size: '100 x 100'},
        { id: '2', name: 'Study for a painting of Dora Breisach', artist: 'Gustav Klimt', type: 'Drawing', price: '1,67,82,514',year: '1917', imgUrl: 'https://img.freepik.com/free-photo/wonderful-holiday-destination_1160-160.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=ais', size: '100 x 100' },
        { id: '3', name: 'Sunset Boulevard', artist: 'Aneta Kajzer', type: 'Painting', price: '12,01,012', year: '2023', imgUrl: 'https://img.freepik.com/premium-photo/painting-landscape-with-castle-horse-drawn-carriage-generative-ai_900814-1436.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=ais' , size: '100 x 100'},
        { id: '4', name: 'Choose Your Weapon (Slate)', artist: 'Banksy', type: 'Print', price: '81,42,070', year: '2010', imgUrl: 'https://img.freepik.com/free-vector/watercolor-impressionist-landscape_23-2147543830.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.1.359951465.1694546557&semt=ais', size: '100 x 100' },
        { id: '5', name: 'Three Men with Trays', artist: 'Salman Toor', type: 'Painting', price: '4,57,07,750', year: '2018', imgUrl: 'https://img.freepik.com/premium-photo/artwork-sketch-natural-peaceful-illustration-fabulous-watercolor-landscape-mountains-flowers_713766-490.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.1.359951465.1694546557&semt=sph', size: '100 x 100' },
        { id: '6', name: 'UP from Sanctum', artist: 'Damien Hirst',type: 'Print', price: '50,85,610', year: '2009/16', imgUrl: 'https://img.freepik.com/premium-photo/sunset-camcorder-effect-style-creative-digital-painting_743855-1888.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=sph' , size: '100 x 100'},
      ]);
      const detail = details.find((detail) => detail.id === detailId);
      if (!detail) {
        return <div>Detail not found.</div>;
      }
    return(
        <>
        <div><NavBar/><br></br>
            {/* <Link style={{marginLeft: "30px"}} to="/buy"><FaArrowLeft color="black" size={35} /></Link><br></br> */}
            <div style={{marginTop: "100px"}} className="countdown"><CountDownTimer targetDate={targetDate}/></div>
            <div style={{display: "inline-flex", marginTop: "60px", marginLeft: "80px"}}>
                <img src={detail.imgUrl} height="450px" width="650px" alt=""></img>
                <div className="detail-box">
                    <div className="detail-text1">{detail.name}</div>
                    <div className="detail-text2">{detail.artist}, {detail.year}</div><br></br>
                    <div className="detail-text3">{detail.type}&emsp;Frame included &emsp;{detail.size} cm </div>
                    <div className="detail-text4">{detail.price}</div>
                    <button className="purchase">Purchase</button><br></br>
                    <button className="offer">Make an Offer</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default ArtDetails;