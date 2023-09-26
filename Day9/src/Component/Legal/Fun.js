import React from "react";
import Footer from "../Utils/Footer";
import { useState } from "react";
import '../../assets/css/Legal.css';
import { useEffect } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { CountDownTimer } from "../CountDown";
const Fun = () =>{
  
  const targetDate = new Date('2023-09-27T23:59:59');

    function Function1(){
        return(
            <div>
                <h1>Function1</h1>
                <p>This is the context for function 1.</p>
            </div>
        );
    }
    function Function2(){
        return(
            <div style={{color: "red"}}>
                <h1>Function2</h1>
                <p>This is the context for function 2.</p>
            </div>
        );
    } 
    const [showFunction1, setShowFunction1] = useState(true);
    const toggleFunction = () =>{
        setShowFunction1(!showFunction1);
    }
    const [isToggled, setToggled] = useState(false);
    const handleToggle = (event, newAlignment) =>{
        setToggled(!isToggled);
        setShowButton1(!showButton1);
    setShowButton2(!showButton2);
    setAlignment(newAlignment);
    }


    const [showButton1, setShowButton1] = useState(true);
  const [showButton2, setShowButton2] = useState(true);

  const handleSwitch = (event, newAlignment) => {
    // Toggle the visibility of both buttons
    setShowButton1(!showButton1);
    setShowButton2(!showButton2);
    setAlignment(newAlignment);
  };


  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  const [faqs, setFaqs] = useState([
    {
      question: 'What is this website about?',
      answer: 'This website is about...'
    },
    {
      question: 'How do I use this website?',
      answer: 'To use this website, simply...'
    },
    // Add more FAQ items here
  ]);
  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index) => {
    if (expanded === index) {
      setExpanded(null); // Close the FAQ if it's already open
    } else {
      setExpanded(index); // Open the clicked FAQ
    }
  };

  // Timer code
  const [seconds, setSeconds] = useState(20);
  useEffect(() => {
    if(seconds <= 0 ){
      return 60;
    }
    // Define a function to update the timer every second
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000); // 1000 milliseconds = 1 second

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
      }
  }, [seconds]);

  const [selectedDetail, setSelectedDetail] = useState(null);

  const details = [
    { id: 1, name: 'Detail 1', content: 'This is the content for Detail 1.' },
    { id: 2, name: 'Detail 2', content: 'This is the content for Detail 2.' },
    { id: 3, name: 'Detail 3', content: 'This is the content for Detail 3.' },
    // Add more details as needed
  ];

  const handleDetailClick = (id) => {
    setSelectedDetail(id);
  };
  
    return(
        <><br></br>
        <div>
        <div style={{marginTop: "200px"}}>
            {showFunction1 ? <Function1 /> : <Function2 />}
            <button onClick={toggleFunction}>Toggle</button>
         </div>
         <button onClick={handleToggle}>
        {isToggled ? 'Toggle Off' : 'Toggle On'}
      </button>
      {isToggled ? <Function1 /> : <Function2 />}


      <button onClick={handleSwitch}>Switch Buttons</button>

      {showButton1 ? <button>Button 1</button> : <button>Button2</button>}

     
      <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleToggle}
      aria-label="Platform"
    >
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="android">Android</ToggleButton>
      <ToggleButton value="ios">iOS</ToggleButton>
    </ToggleButtonGroup></div> 
    <div>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${expanded === index ? 'open' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </div>
          {expanded === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>

    <div>
      <h1>Display Specific Detail</h1>
      <ul>
        {details.map((detail) => (
          <li key={detail.id}>
            <button onClick={() => handleDetailClick(detail.id)}>
              {detail.name}
            </button>
          </li>
        ))}
      </ul>
      {selectedDetail !== null && (
        <div>
          <h2>{details[selectedDetail - 1].name}</h2>
          <p>{details[selectedDetail - 1].content}</p>
        </div>
      )}
    </div>

    {/* Timer Code */}
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div><br></br>
    <div>
      <CountDownTimer targetDate={targetDate}/>
    </div>
        </>
    )
}
export default Fun;

// import React, { useState } from 'react';

// function Fun() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [items, setItems] = useState([
//     { name: 'John', age: 25, country: 'old.jpg' },
//     { name: 'Alice', age: 30, country: 'abstract.jpg' },
//     { name: 'Bob', age: 28, country: 'contemp.jpg' },
//     { name: 'Eva', age: 32, country: 'Germany' },
//     { name: 'Lisa', age: 22, country: 'Canada' },
//   ]);
//   const [filteredItems, setFilteredItems] = useState(items);

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value;
//     setSearchTerm(searchTerm);

//     // Use the filter() method to search for objects with matching details
//     const filteredItems = items.filter((item) =>
//       Object.values(item).some(
//         (value) =>
//           value &&
//           value.toString().toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );

//     // Update the state with the filtered items
//     setFilteredItems(filteredItems);
//   };

//   return (
//     <div>
//       <h1>Search Multiple Details</h1>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <ul>
//         {filteredItems.map((item, index) => (
//           <li key={index}>
//             Name: {item.name}, Age: {item.age}, Country: 
//             <img src={item.country} alt="" height="70px" width="70px"></img>
//             {item.country}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Fun;