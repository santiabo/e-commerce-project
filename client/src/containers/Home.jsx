import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Styles
import '../containers/Home.css';

export const SlideData = [
  {
    banner: "https://matrixwarehouse.co.za/wp-content/uploads/2020/07/ASUS-PC-GPUs-Graphics-Cards.jpg"
  },
  {
    banner: "https://images.alphacoders.com/104/1044522.jpg"
  },
  {
    banner: "https://wallpaperaccess.com/full/1523187.jpg"
  },
  {
    banner: "https://i.pinimg.com/originals/78/53/fa/7853faec83b090f2ad4233142e5810c7.jpg"
  },
]

const Home = () => {

  const [current, setCurrent] = useState(0)

  const goLeft = () => {
    current === 0 ? setCurrent(-100 * (SlideData.length - 1)) : setCurrent(current + 100);
  }

  const goRight = () => {
    current === -100 * (SlideData.length - 1) ? setCurrent(0) : setCurrent(current - 100);
  }

  return (
    <div className="slider">
      <FaChevronLeft className="left-arrow" onClick={goLeft} />
      <FaChevronRight className="right-arrow" onClick={goRight} />
      {
        SlideData.map((slide, index) => {
          return (
            <div key={index} className="slide" style={{
              transform: `translateX(${current}%)`
            }}>
              <img src={slide.banner} key={index} className="img-slide" />
            </div>
          )
        })
      }
    </div>
  );
};
export default Home;