import React from "react";
import CircularImageWithContent from "./CircularImageWithContent";
import sun from "../media/circlelogo/sun.png";
import sunSur from "../media/circlelogo/sun-surrounding.png";
// import { Flex, Box } from "@chakra-ui/react";
import problem1 from "../media/circlelogo/problemLogo/Love.png";
import problem2 from "../media/circlelogo/problemLogo/Marriage.png";
import problem3 from "../media/circlelogo/problemLogo/Job.png";
import problem4 from "../media/circlelogo/problemLogo/Rupees Coins.png";
import problem5 from "../media/circlelogo/problemLogo/Global Education.png";
import problem6 from "../media/circlelogo/problemLogo/Medical sign.png";
import problem7 from "../media/circlelogo/problemLogo/Orbit.png";
import problem8 from "../media/circlelogo/problemLogo/Birth.png";
import problem9 from "../media/circlelogo/problemLogo/Family Care.png";
import problem10 from "../media/circlelogo/problemLogo/Number Block.png";

const ImageContent = () => {
  return (
    <img
      src={sun}
      alt="Sun"
      style={{ maxWidth: "60%", background: "transparent" }}
    />
  );
};
//   const IconAndText = ({ icon, text }) => {
//     return (
//       <Box p="4">
//         <Flex alignItems="center">
//           <Box mr="4">
//             <FontAwesomeIcon icon={icon} />
//           </Box>
//           <Box>
//             <p>{text}</p>
//           </Box>
//         </Flex>
//       </Box>
//     );
//   };
const TheCircle = () => {
  const iconAndText = [
    { icon: problem1, text: "Love and Relationships" },
    { icon: problem2, text: "Career and Money" },
    { icon: problem3, text: "Education and Learning" },
    { icon: problem4, text: "Health and Wellness" },
    { icon: problem5, text: "Business and Startups" },
    { icon: problem6, text: "Legal and Court Cases" },
    { icon: problem7, text: "Travel and Visa" },
    { icon: problem8, text: "Family and Children" },
    { icon: problem9, text: "Spirituality and Religion" },
    { icon: problem10, text: "Other Personal Problems" },
  ];
  //       const leftIconAndText = iconAndText.slice(0, 5);
  //   const rightIconAndText = iconAndText.slice(5);
  return (
    <div className="circle">
      <h1 className="heading">Many Problem One Solution</h1>
      <div
        className="container "
        style={{ display: "inline-flex", justifyContent: "space-between" }}
      >
        <div id="left">
          {iconAndText.slice(0, 5).map((item, index) => (
            <div key={index} className="icon-card">
              <div
                className="icon-wrapper"
                style={{ backgroundColor: "orangered" }}
              >
                <img src={item.icon} alt={item.text} />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div>
          <CircularImageWithContent
            image={sunSur}
            size={300}
            style={{ maxWidth: "100%" }}
            content={<ImageContent />}
          />
        </div>
        <div id="right">
          {iconAndText.slice(5).map((item, index) => (
            <div key={index} className="icon-card">
             
              <p>{item.text}</p>
              <div
                className="icon-wrapper"
                style={{ backgroundColor: "orangered" }}
              >
                <img src={item.icon} alt={item.text} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheCircle;
