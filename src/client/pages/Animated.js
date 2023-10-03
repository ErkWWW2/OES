import React, { useEffect, useState } from 'react'; // Import your CSS file with animation styles

function AnimatedText({ text }) {
  const [animatedText, setAnimatedText] = useState('');
  const [animationStyle, setAnimationStyle] = useState({ opacity: 0 });

  useEffect(() => {
    const characters = text.split('');
    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex < characters.length-1) {
        setAnimatedText((prevText) => prevText + characters[charIndex]);
        charIndex++;

        setAnimationStyle({ opacity: 2 });
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return (
    <div className="AnimatedText" style={animationStyle}>
      {animatedText}
    </div>
  );
}

export default AnimatedText;
