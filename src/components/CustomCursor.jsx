import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate cursor on devices with mouse pointing capabilities
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'SELECT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  // Smooth lerp trailing position
  useEffect(() => {
    if (!isVisible) return;
    let animationFrameId;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const followMouse = () => {
      setTrailingPos((prev) => ({
        x: lerp(prev.x, position.x, 0.18),
        y: lerp(prev.y, position.y, 0.18)
      }));
      animationFrameId = requestAnimationFrame(followMouse);
    };

    animationFrameId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Sky Blue Dot */}
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isMouseDown ? '6px' : '10px',
          height: isMouseDown ? '6px' : '10px',
          backgroundColor: '#0284c7',
          boxShadow: '0 0 10px rgba(14, 165, 233, 0.8)'
        }}
      />

      {/* Smooth Trailing Inertia Glass Ring */}
      <div
        className="custom-cursor-ring"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isHovered ? '48px' : isMouseDown ? '24px' : '32px',
          height: isHovered ? '48px' : isMouseDown ? '24px' : '32px',
          border: isHovered
            ? '2px solid rgba(14, 165, 233, 0.8)'
            : '1.5px solid rgba(56, 189, 248, 0.5)',
          backgroundColor: isHovered
            ? 'rgba(14, 165, 233, 0.08)'
            : 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(2px)',
          boxShadow: isHovered ? '0 0 20px rgba(14, 165, 233, 0.25)' : 'none'
        }}
      />
    </>
  );
}
