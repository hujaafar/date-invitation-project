interface AnimalGifProps {
  src: string;
  alt: string;
}

export default function AnimalGif({ src, alt }: AnimalGifProps) {
  return (
    <div className="gif-shell">
      <img src={src} alt={alt} className="animal-gif" loading="eager" />
    </div>
  );
}
