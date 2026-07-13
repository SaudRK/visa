interface UsFlagProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function UsFlag({
  className = "",
  width = 120,
  height = 72,
}: UsFlagProps) {
  return (
    <svg
      viewBox="0 0 120 72"
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
    >
      <rect width="120" height="72" fill="#B22234" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={i}
          y={i * 11.08 + 5.54}
          width="120"
          height="5.54"
          fill="#fff"
        />
      ))}
      <rect width="48" height="38.88" fill="#3C3B6E" />
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4, 5].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={4 + col * 8 + (row % 2 ? 4 : 0)}
            cy={4 + row * 7.5}
            r="1.8"
            fill="#fff"
          />
        ))
      )}
    </svg>
  );
}
