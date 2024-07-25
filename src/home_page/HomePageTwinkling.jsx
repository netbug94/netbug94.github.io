import { useEffect, useState } from 'react';
const dotImageSrc = '../netbug_lobby/STAR_BLACK.webp';

const DotImageComponent = () => {
  const dotCount = 30;
  const [dotPositions, setDotPositions] = useState([]);

  const getRandomPosition = () => {
    const maxWidth = window.innerWidth - 50;
    const maxHeight = window.innerHeight - 50;
    return {
      left: `${Math.random() * maxWidth}px`,
      top: `${Math.random() * maxHeight}px`,
      display: 'block' // Initially set to block
    };
  };

  useEffect(() => {
    const initialPositions = Array.from({ length: dotCount }, () => getRandomPosition());
    setDotPositions(initialPositions);

    const intervalId = setInterval(() => {
      setDotPositions(Array.from({ length: dotCount }, () => getRandomPosition()));
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timeoutIds = dotPositions.map((position, index) => {
      return setTimeout(() => {
        const newPositions = [...dotPositions];
        newPositions[index] = { ...newPositions[index], display: 'none' };
        setDotPositions(newPositions);
      }, 200);
    });

    return () => timeoutIds.forEach(id => clearTimeout(id));
  }, [dotPositions]);

  return (
      <>
        {dotPositions.map((position, index) => (
            <img
                key={index}
                src={dotImageSrc}
                style={{
                  position: 'absolute',
                  left: position.left,
                  top: position.top,
                  zIndex: 1, // Ensure zIndex is a number
                  display: position.display
                }}
                alt="Dot"
            />
        ))}
      </>
  );
};

export default DotImageComponent;
