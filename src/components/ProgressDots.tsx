interface ProgressDotsProps {
  step: number;
}

export default function ProgressDots({ step }: ProgressDotsProps) {
  return (
    <div className="progress-dots" aria-label={`Step ${step} of 5`}>
      {[1, 2, 3, 4, 5].map((number) => (
        <span key={number} className={number <= step ? 'dot active' : 'dot'} />
      ))}
    </div>
  );
}
