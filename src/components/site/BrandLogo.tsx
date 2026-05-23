type BrandLogoProps = {
  className?: string;
  iconClassName?: string;
};

export function BrandLogo({ className = "", iconClassName = "" }: BrandLogoProps) {
  return (
    <div className={`brand-icon-shell ${className}`} aria-label="Sanraj Inn luxury monogram">
      <svg
        viewBox="0 0 100 100"
        className={`brand-icon-svg ${iconClassName}`}
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sr-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8df94" />
            <stop offset="45%" stopColor="#d8a73d" />
            <stop offset="100%" stopColor="#b67d1f" />
          </linearGradient>
        </defs>

        <circle cx="50" cy="52" r="34" fill="none" stroke="url(#sr-gold)" strokeOpacity="0.82" />
        <circle cx="50" cy="52" r="29" fill="none" stroke="url(#sr-gold)" strokeOpacity="0.3" />
        <path
          d="M50 10 53 15 59 16 54.5 20.2 55.6 26 50 22.8 44.4 26 45.5 20.2 41 16 47 15Z"
          fill="url(#sr-gold)"
        />
        <path
          d="M34 34c7-8 24-8 31 0"
          fill="none"
          stroke="url(#sr-gold)"
          strokeOpacity="0.56"
          strokeWidth="1.2"
        />
        <text
          x="50"
          y="63"
          textAnchor="middle"
          fill="url(#sr-gold)"
          fontSize="34"
          fontFamily="'Times New Roman', 'Playfair Display', serif"
          fontStyle="italic"
          letterSpacing="0.8"
        >
          SR
        </text>
      </svg>
    </div>
  );
}
