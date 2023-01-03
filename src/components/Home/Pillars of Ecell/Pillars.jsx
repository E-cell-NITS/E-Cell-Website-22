import React, {useRef} from "react";
import ItemCard from "./ItemCard";
import "./Pillars.css";


const Pillars = () => {
  let cardHolder = useRef();
  

  function handleNext () {
    cardHolder.current.scrollLeft += (cardHolder.current.offsetWidth);
  };

  function handlePrev () {
    cardHolder.current.scrollLeft -= (cardHolder.current.offsetWidth);
  };

  let info = [
    {
      id: "1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus necfringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.accumsan",
      name: "Prof. Shivaji Bandhopadhyay",
      designation: "Director, NIT Sichar",
    },
    {
      id: "2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus necfringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.accumsan",
      name: "Prof. Wasim Arif",
      designation: "Asso Dean SW, NIT Sichar",
    },
    {
      id: "3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus necfringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.accumsan",
      name: "Prof. Shivaji Bandhopadhyay",
      designation: "Director, NIT Sichar",
    },
    {
      id: "4",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus necfringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.accumsan",
      name: "Prof. Shivaji Bandhopadhyay",
      designation: "Director, NIT Sichar",
    },
    {
      id: "5",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus necfringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.accumsan",
      name: "Prof. Shivaji Bandhopadhyay",
      designation: "Director, NIT Sichar",
    }
  ];

  return (
    <div className="Pillar_of_Ecell">
      <div className="container">
        <h1 className="header">PILLARS OF ECELL</h1>
      </div>
      <hr className="horizontal-line" />
      <div className="Card-holder" ref={cardHolder}>
          {info.map((element) => {
            return (
              <ItemCard
                key={element.id}
                id={element.id}
                desc={element.desc}
                name={element.name}
                designation={element.designation}
              />
            )
          })}
      </div>
      <div className="btns">
        <button className="prev" onClick={handlePrev}>
          <i className="arrow left" />
        </button>
        <button className="next" onClick={handleNext}>
          <i className="arrow right" />
        </button>
      </div>
    </div>
  );
};

export default Pillars;
