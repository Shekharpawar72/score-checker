// import React, { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";

// const cards = [
//   { id: 1, title: "AI Prep", description: "Practice Interviews", color: "from-purple-900 to-red-900" },
//   { id: 2, title: "Resume Tips", description: "Get Noticed", color: "from-blue-900 to-teal-900" },
//   { id: 3, title: "Skill Tests", description: "Assess Yourself", color: "from-green-900 to-indigo-900" },
//   { id: 4, title: "Mock Interviews", description: "Simulate Real", color: "from-yellow-900 to-orange-900" },
//   { id: 5, title: "Analytics", description: "Track Progress", color: "from-indigo-900 to-purple-900" },
// ];

// const Floating3DCarousel = () => {
//   const cardsRef = useRef([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const total = cards.length;
//   const autoPlayRef = useRef(null);

//   const updateCards = () => {
//     const isMobile = window.innerWidth < 768;
//     const radius = isMobile ? 120 : 220;
//     const translateX = isMobile ? 80 : 140;
//     const translateZ = isMobile ? -Math.abs(1) * 100 : -Math.abs(1) * radius + 200;
//     const rotateY = isMobile ? 12 : 15;
//     const scale = isMobile ? 0.8 : 0.75;

//     cardsRef.current.forEach((card, i) => {
//       let offset = i - currentIndex;
//       if (offset < -Math.floor(total / 2)) offset += total;
//       if (offset > Math.floor(total / 2)) offset -= total;

//       const finalRotateY = offset * rotateY + (offset === 0 ? 0 : offset * 5);
//       const finalRotateX = offset === 0 ? 0 : -5 * Math.abs(offset);
//       const finalTranslateX = offset * translateX;
//       const finalTranslateZ = -Math.abs(offset) * radius + (isMobile ? 100 : 200);
//       const finalScale = offset === 0 ? 1 : scale;
//       const opacity = offset === 0 ? 1 : 0.4;
//       const zIndex = -Math.abs(offset) + 10;
//       const boxShadow = offset === 0 ? "0px 25px 60px rgba(255,255,255,0.15)" : "0px 10px 30px rgba(0,0,0,0.4)";

//       gsap.to(card, {
//         duration: 1.2,
//         x: finalTranslateX,
//         z: finalTranslateZ,
//         rotationY: finalRotateY,
//         rotationX: finalRotateX,
//         scale: finalScale,
//         opacity: opacity,
//         ease: "power4.inOut",
//         zIndex: zIndex,
//         boxShadow: boxShadow,
//       });
//     });
//   };

//   // Autoplay and card updates
//   useEffect(() => {
//     updateCards();
//     autoPlayRef.current = setInterval(() => {
//       setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
//     }, 4000);

//     return () => clearInterval(autoPlayRef.current);
//   }, [currentIndex, total]);

//   // Handle window resize for responsiveness
//   useEffect(() => {
//     const handleResize = () => updateCards();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const prevCard = () => {
//     clearInterval(autoPlayRef.current);
//     setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
//   };
//   const nextCard = () => {
//     clearInterval(autoPlayRef.current);
//     setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="relative w-full max-w-6xl mx-auto py-20  text-white font-sans">
//       <div className="relative flex justify-center items-center perspective-[2500px] h-96">
//         {cards.map((card, index) => (
//           <div
//             key={card.id}
//             ref={(el) => (cardsRef.current[index] = el)}
//             className={`absolute w-64 h-48 rounded-3xl flex flex-col justify-center items-center text-white bg-gradient-to-br ${card.color} transform-style-preserve transition-transform duration-300 hover:scale-105`}
//             style={{ userSelect: "none" }}
//           >
//             <h2 className="text-2xl font-semibold">{card.title}</h2>
//             <p className="mt-2 text-sm tracking-wide opacity-75">{card.description}</p>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-16 gap-8">
//         <button
//           onClick={prevCard}
//           className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
//         >
//           <svg className="w-6 h-6 transform rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//             <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
//             <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
//           </svg>
//         </button>
//         <button
//           onClick={nextCard}
//           className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
//         >
//           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//             <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
//             <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Floating3DCarousel;





// import React, { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";

// // ✅ Replace these with your real images
// const team = [
//   {
//     id: 1,
//     name: "Shekhar Barkhade",
//     role: "Frontend Developer",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     color: "bg-[#0D1B2A]  ",
//   },
//   {
//     id: 2,
//     name: "Nandkishore Mufadale",
//     role: "UI/UX Designer",
//     image: "https://randomuser.me/api/portraits/men/45.jpg",
//     color: "bg-[#0D1B2A] ",
//   },
//   {
//     id: 3,
//     name: "Sanjana Patel",
//     role: "Backend Developer",
//     image: "https://randomuser.me/api/portraits/women/56.jpg",
//     color: "bg-[#0D1B2A]",
//   },
//   {
//     id: 4,
//     name: "Nikunj Bisani",
//     role: "Database Engineer",
//     image: "https://randomuser.me/api/portraits/men/78.jpg",
//     color: "bg-[#0D1B2A] ",
//   },
//   {
//     id: 5,
//     name: "Ananya Sharma",
//     role: "Project Manager",
//     image: "https://randomuser.me/api/portraits/women/12.jpg",
//     color: "bg-[#0D1B2A] ",
//   },
// ];

// const Team3DCarousel = () => {
//   const cardsRef = useRef([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const total = team.length;
//   const autoPlayRef = useRef(null);

//   const updateCards = () => {
//     const isMobile = window.innerWidth < 768;
//     const radius = isMobile ? 130 : 240;
//     const translateX = isMobile ? 90 : 150;
//     const rotateY = isMobile ? 14 : 16;
//     const scale = isMobile ? 0.85 : 0.75;

//     cardsRef.current.forEach((card, i) => {
//       let offset = i - currentIndex;
//       if (offset < -Math.floor(total / 2)) offset += total;
//       if (offset > Math.floor(total / 2)) offset -= total;

//       const finalRotateY = offset * rotateY;
//       const finalTranslateX = offset * translateX;
//       const finalTranslateZ = -Math.abs(offset) * radius + (isMobile ? 100 : 200);
//       const finalScale = offset === 0 ? 1 : scale;
//       const opacity = offset === 0 ? 1 : 0.4;
//       const zIndex = -Math.abs(offset) + 10;
//       const boxShadow =
//         offset === 0
//           ? "0px 25px 60px rgba(255,255,255,0.15)"
//           : "0px 10px 30px rgba(0,0,0,0.4)";

//       gsap.to(card, {
//         duration: 1.2,
//         x: finalTranslateX,
//         z: finalTranslateZ,
//         rotationY: finalRotateY,
//         scale: finalScale,
//         opacity,
//         ease: "power4.inOut",
//         zIndex,
//         boxShadow,
//       });
//     });
//   };

//   // autoplay rotation
//   useEffect(() => {
//     updateCards();
//     autoPlayRef.current = setInterval(() => {
//       setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
//     }, 9000);
//     return () => clearInterval(autoPlayRef.current);
//   }, [currentIndex, total]);

//   // responsive handling
//   useEffect(() => {
//     const handleResize = () => updateCards();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const prevCard = () => {
//     clearInterval(autoPlayRef.current);
//     setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
//   };
//   const nextCard = () => {
//     clearInterval(autoPlayRef.current);
//     setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="relative w-full max-w-6xl mx-auto py-20 text-white font-sans">
//       <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
//         Meet Our <span className="text-blue-500">Team</span>
//       </h1>

//       <div className="relative flex justify-center items-center perspective-[2500px] h-[24rem] ">
//         {team.map((member, index) => (
//           <div
//             key={member.id}
//             ref={(el) => (cardsRef.current[index] = el)}
//             className={`absolute w-64 h-66 rounded-3xl flex flex-col justify-center items-center text-white bg-gradient-to-br ${member.color} p-6 shadow-2xl shadow-blue-500/50 transform-style-preserve transition-transform duration-300 hover:scale-105`}
//             style={{ userSelect: "none" }}
//           >
//             <img
//               src={member.image}
//               alt={member.name}
//               className="w-24 h-24 rounded-full border-4 border-white shadow-md mb-4"
//             />
//             <h2 className="text-xl font-semibold">{member.name}</h2>
//             <p className="mt-1 text-sm opacity-90">{member.role}</p>
//           </div>
//         ))}
//       </div>
//   <div className="flex justify-center mt-16 gap-8">
//         <button
//          onClick={prevCard}
//          className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
//        >
//           <svg className="w-6 h-6 transform rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//             <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
//            <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
//          </svg>
//        </button>
//        <button
//           onClick={nextCard}
//          className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
//        >
//          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//          <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
//             <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
//           </svg>
//         </button>
//      </div>
      
//     </div>
//   );
// };

// export default Team3DCarousel;








import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

import shekharImage from '../assets/shekhar-ceo.jpg';
import sakshiImage from '../assets/sakshi-FE.jpg';
import siyaImage from '../assets/siya-Tl.jpg';
import sanskarImage from '../assets/sanskar-test.jpg';
import sonamImage from '../assets/sonam-legals.jpg';





const team = [
   { id: 1, name: "Shekhar Barkhade", role: "Frontend Developer", image: shekharImage, color: "bg-[#0D1B2A]" },
  { id: 2, name: "Sakshi", role: "Frontend Engineer", image: sakshiImage, color: "bg-[#0D1B2A]" },
  { id: 3, name: "Siya", role: "Team Lead", image: siyaImage, color: "bg-[#0D1B2A]" },
  { id: 4, name: "Sanskar", role: "Database Engineer", image: sanskarImage, color: "bg-[#0D1B2A]" },
  { id: 5, name: "Sonam", role: "Legal Advisor", image: sonamImage, color: "bg-[#0D1B2A]" },
];

const Team3DCarousel = () => {
  const cardsRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = team.length;
  const autoPlayRef = useRef(null);

  const updateCards = () => {
    const isMobile = window.innerWidth < 640; // sm breakpoint
    const radius = isMobile ? 100 : 220;
    const translateX = isMobile ? 70 : 150;
    const rotateY = isMobile ? 10 : 16;
    const scale = isMobile ? 0.85 : 0.75;

    cardsRef.current.forEach((card, i) => {
      let offset = i - currentIndex;
      if (offset < -Math.floor(total / 2)) offset += total;
      if (offset > Math.floor(total / 2)) offset -= total;

      const finalRotateY = offset * rotateY;
      const finalTranslateX = offset * translateX;
      const finalTranslateZ = -Math.abs(offset) * radius + (isMobile ? 60 : 200);
      const finalScale = offset === 0 ? 1 : scale;
      const opacity = offset === 0 ? 1 : 0.4;
      const zIndex = -Math.abs(offset) + 10;

      gsap.to(card, {
        duration: 1.2,
        x: finalTranslateX,
        z: finalTranslateZ,
        rotationY: finalRotateY,
        scale: finalScale,
        opacity,
        ease: "power4.inOut",
        zIndex,
      });
    });
  };

  useEffect(() => {
    updateCards();
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(autoPlayRef.current);
  }, [currentIndex, total]);

  useEffect(() => {
    const handleResize = () => updateCards();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevCard = () => {
    clearInterval(autoPlayRef.current);
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };
  const nextCard = () => {
    clearInterval(autoPlayRef.current);
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-10 sm:py-20 text-white font-sans ">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12">
        Meet Our <span className="text-blue-500">Team</span>
      </h1>

      <div className="relative flex justify-center items-center perspective-[2500px] h-[18rem] sm:h-[24rem] ">
        {team.map((member, index) => (
          <div
            key={member.id}
            ref={(el) => (cardsRef.current[index] = el)} 
            className={`absolute w-40 h-52 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-2xl sm:rounded-3xl flex flex-col justify-center items-center text-white bg-gradient-to-br ${member.color} p-3 sm:p-6 shadow-lg sm:shadow-2xl transform-style-preserve transition-transform duration-300 hover:scale-105  shadow-blue- `}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-2xl mb-3 sm:mb-4 shadow-blue-500/50"
            />
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-center">{member.name}</h2>
            <p className="mt-1 text-xs text-blue-500 hover:shadow-blue-500 shadow-lg sm:text-sm md:text-base opacity-90 text-center">{member.role}</p>
          </div>
        ))} 
      </div>
           
      <div className="flex justify-center items-center mt-10 gap-4">
  <button
    onClick={prevCard}
    className="px-8 py-3 bg-gray-800 hover:bg-blue-500 text-white rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 text-sm sm:text-base w-auto"
  >
    Prev
  </button>
  <button
    onClick={nextCard}
    className="px-8 py-3 bg-gray-800 hover:bg-blue-500 text-white rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 text-sm sm:text-base w-auto"
  >
    Next
  </button>
</div>






    </div>
  );
};

export default Team3DCarousel;
