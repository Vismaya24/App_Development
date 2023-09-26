import React from "react";
import NavBar from "./Utils/NavBar";
import "../assets/css/Buy.css";
import Footer from "./Utils/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

const Buy = ({item}) =>{
      
    const [searchArt, setSearchArt] = useState('');
    const [items, setItems] = useState([
        { id: '1', name: 'Sorry fürs Anspritzen', artist: 'Aneta Kajzer', type: 'Painting', year: '2023', price: '₹ 13,77,485', imgUrl: 'https://img.freepik.com/free-photo/vintage-landscape-with-gondolas_1160-162.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=ais' },
        { id: '2', name: 'Study for a painting of Dora Breisach', artist: 'Gustav Klimt', type: 'Drawing', price: '1,67,82,514',year: '1917', imgUrl: 'https://img.freepik.com/free-photo/wonderful-holiday-destination_1160-160.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=ais' },
        { id: '3', name: 'Sunset Boulevard', artist: 'Aneta Kajzer', type: 'Painting', price: '12,01,012', year: '2023', imgUrl: 'https://img.freepik.com/premium-photo/painting-landscape-with-castle-horse-drawn-carriage-generative-ai_900814-1436.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=ais' },
        { id: '4', name: 'Choose Your Weapon (Slate)', artist: 'Banksy', type: 'Print', price: '81,42,070', year: '2010', imgUrl: 'https://img.freepik.com/free-vector/watercolor-impressionist-landscape_23-2147543830.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.1.359951465.1694546557&semt=ais' },
        { id: '5', name: 'Three Men with Trays', artist: 'Salman Toor', type: 'Painting', price: '4,57,07,750', year: '2018', imgUrl: 'https://img.freepik.com/premium-photo/artwork-sketch-natural-peaceful-illustration-fabulous-watercolor-landscape-mountains-flowers_713766-490.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.1.359951465.1694546557&semt=sph' },
        { id: '6', name: 'UP from Sanctum', artist: 'Damien Hirst',type: 'Print', price: '50,85,610', year: '2009/16', imgUrl: 'https://img.freepik.com/premium-photo/sunset-camcorder-effect-style-creative-digital-painting_743855-1888.jpg?size=626&ext=jpg&uid=R87373133&ga=GA1.2.359951465.1694546557&semt=sph' },
      ]);
      const [filteredItems, setFilteredItems] = useState(items);
      const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchArt(searchArt);
    
        const filteredItems = items.filter((item) =>
          Object.values(item).some(
            (value) =>
              value &&
              value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        setFilteredItems(filteredItems);
      };

      //code
          
    return(
        <>
       <NavBar /><br></br>
       <div style={{marginTop: "90px"}}>
       {/* <div style={{display: "inline-flex"}}>
        <div className="category-box"><img src="old.jpg" height="250px" width="280px" alt=""></img><h3>&emsp;&emsp;&emsp;&emsp;Old Paintings</h3></div>
        <div className="category-box"><img src="contemp.jpg" height="250px" width="280px" alt=""></img><h3>&emsp;&emsp;&emsp;Contemporary Art</h3></div>
        <div className="category-box"><img src="abstract.jpg" height="250px" width="280px" alt=""></img><h3>&emsp;&emsp;&emsp;&emsp;Abstract Art</h3></div>
        <div className="category-box"><img src="sculpture.jpg" height="250px" width="280px" alt=""></img><h3>&emsp;&emsp;&emsp;&emsp;&emsp;Sculpture</h3></div>
       </div> */}
       <select className="select-filter">
        <option className="option-filter">ArtWork Type</option>
        <option className="option-filter">Prints</option>
        <option className="option-filter">Paintings</option>
        <option className="option-filter">Drawings</option>
        <option className="option-filter">Sculptures</option>
        <option className="option-filter">Photographs</option>
       </select>
       <select className="select-filter">
        <option className="option-filter">Year</option>
        <option className="option-filter">1900 - 1950</option>
        <option className="option-filter">1950 - 2000</option>
        <option className="option-filter">2000 - 2023</option>
       </select>
       <div style={{display: 'inline-flex'}}>
       <input className="search-bar" type="text" placeholder="Search Art Works" id="search-art" name="search-art" onChange={handleSearch} />
       <button className="search-btn"><img src="search.png" height="20px" width="20px" alt=""></img></button>
       </div>
       <div style={{marginTop: "15px"}}>
        {filteredItems.map((item, index) => (
            <div style={{display: "inline-flex"}}>
                <div className="category-box">
                <img src={item.imgUrl} height="300px" width="400px" alt=""></img><br></br><br></br>
                <div className="buy-text1">{item.name}, {item.artist}</div>
                <div className="buy-text3">{item.type},{item.year}</div>
                <div className="buy-text2">{item.price}</div>
                <Link key={item.id} to={`/detail/${item.id}`}><button className="bidnow-btn">BID NOW</button></Link>
                
            </div>
            </div>
            
        ))}
       </div>
       
       </div><br></br><br></br><br></br><br></br><br></br><br></br>
       <Footer/>
        </>
    )
}
export default Buy;