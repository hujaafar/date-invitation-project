const pieces = ['💖', '✨', '💕', '🎉', '💗', '⭐'];

export default function Confetti() {
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: 30 }, (_, index) => (
        <span
          key={index}
          style={{
            left: `${(index * 13) % 100}%`,
            animationDelay: `${(index % 10) * 0.13}s`,
            animationDuration: `${2.6 + (index % 5) * 0.35}s`,
          }}
        >
          {pieces[index % pieces.length]}
        </span>
      ))}
    </div>
  );
}
