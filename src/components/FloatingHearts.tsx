const hearts = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  left: `${(index * 17) % 100}%`,
  delay: `${(index % 8) * 0.7}s`,
  duration: `${7 + (index % 6)}s`,
  size: `${14 + (index % 5) * 4}px`,
}));

export default function FloatingHearts() {
  return (
    <div className="hearts" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            fontSize: heart.size,
          }}
        >
          ♡
        </span>
      ))}
    </div>
  );
}
