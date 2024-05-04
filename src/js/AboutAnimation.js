// import React, { useEffect, useState } from 'react';

// const AboutAnimation = () => {
//     const [animatedText, setAnimatedText] = useState('');
//     const [aboutText, setAboutText] = useState('');
//     const textElement = document.querySelector('.about-text');
//     if (textElement) {
//         setAboutText(textElement.textContent);
//     }
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setAnimatedText(originalText.charAt(index));
//             setIndex(index + 1);
//         }, 100); // Adjust the delay here (milliseconds)

//         return () => clearTimeout(timer);
//     }, [index]);

//     return (
//         <p className="mb-4">{animatedText}<span style={{ color: 'red' }}>{originalText.charAt(index)}</span></p>
//     );
// };

// export default AboutAnimation;
