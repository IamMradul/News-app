'use client';

import { useEffect, useState, useRef } from 'react';

interface CardPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}
const SherlockDetective = () => {
  const [position, setPosition] = useState({ x: 50, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [isClimbing, setIsClimbing] = useState(false);
  const [direction, setDirection] = useState(1);
  const [cards, setCards] = useState<CardPosition[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Constants for physics
  const GRAVITY = 0.5;
  const JUMP_FORCE = -12;
  const MOVE_SPEED = 5;
  const FRICTION = 0.8;

  useEffect(() => {
    // Get all news card positions and set initial detective position
    const updatePositions = () => {
      const newsCards = document.querySelectorAll('.news-card');
      const cardPositions = Array.from(newsCards).map(card => {
        const rect = card.getBoundingClientRect();
        return {
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height
        };
      });
      setCards(cardPositions);

      // Set initial position on the client side
      setPosition(prev => ({ ...prev, y: window.innerHeight - 150 })); // Adjust initial y based on detective height
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  useEffect(() => {
    const animate = (currentTime: number) => {
  if (!lastTimeRef.current) lastTimeRef.current = currentTime;
  lastTimeRef.current = currentTime;

      setPosition(prev => {
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;
        let newVelocityX = velocity.x * FRICTION;
        let newVelocityY = velocity.y + GRAVITY;
        let newIsClimbing = false; // Assume not climbing initially

        // Check for collisions with cards
        const sherlockHeight = 150;
        const sherlockWidth = 100;
        const sherlockBottom = newY + sherlockHeight;
        const sherlockRight = newX + sherlockWidth;

        let isOnCard = false;
        cards.forEach(card => {
          // Check if standing on a card
          if (sherlockBottom >= card.y && 
              sherlockBottom <= card.y + 20 && 
              sherlockRight > card.x && 
              newX < card.x + card.width) {
            newY = card.y - sherlockHeight;
            newVelocityY = 0;
            isOnCard = true;
          }

          // Check if climbing a card (simplified check)
          if (newX + sherlockWidth > card.x && 
              newX < card.x + card.width &&
              sherlockBottom > card.y &&
              newY < card.y + card.height) {
            newIsClimbing = true;
          }
        });

        // Apply gravity if not on a card and not climbing
        if (!isOnCard && !newIsClimbing) {
          newVelocityY += GRAVITY;
        }

        // Keep Sherlock within screen bounds
        if (newX < 0) {
          newX = 0;
          newVelocityX = 0;
        } else if (newX > window.innerWidth - sherlockWidth) {
          newX = window.innerWidth - sherlockWidth;
          newVelocityX = 0;
        }
        
        // Prevent falling below the bottom of the screen
        if (newY + sherlockHeight > window.innerHeight) {
            newY = window.innerHeight - sherlockHeight;
            newVelocityY = 0;
            isOnCard = true; // Treat bottom of screen as a surface
        }

        // Update direction based on movement
        if (newVelocityX > 0) {
          setDirection(1);
        } else if (newVelocityX < 0) {
          setDirection(-1);
        }

        setVelocity({ x: newVelocityX, y: newVelocityY });
        setIsClimbing(newIsClimbing);

        return { x: newX, y: newY };
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [velocity, cards, isClimbing, JUMP_FORCE]);

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          setVelocity(prev => ({ ...prev, x: -MOVE_SPEED }));
          break;
        case 'ArrowRight':
          setVelocity(prev => ({ ...prev, x: MOVE_SPEED }));
          break;
        case 'ArrowUp':
        case ' ':
          if (!isClimbing) {
            setVelocity(prev => ({ ...prev, y: JUMP_FORCE }));
          }
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        setVelocity(prev => ({ ...prev, x: 0 }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isClimbing]);

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: position.x,
        top: position.y,
        transform: `scaleX(${direction === 1 ? -1 : 1})`,
        transition: 'transform 0.1s linear',
      }}
    >
      <div className="relative">
        <img
          src="/sherlock-color.png"
          alt="Sherlock Holmes"
          width={120}
          height={180}
          className={`transition-transform duration-200 ${isClimbing ? 'rotate-90' : ''}`}
        />
      </div>
    </div>
  );
};

export default SherlockDetective; 