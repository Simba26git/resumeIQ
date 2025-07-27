const ScoreCircle = ({ score = 75 }: { score: number }) => {
    const radius = 45;
    const stroke = 8;
    const normalizedRadius = radius - stroke / 2;
    const circumference = 2 * Math.PI * normalizedRadius;
    const progress = score / 100;
    const strokeDashoffset = circumference * (1 - progress);

    // Dynamic color based on score
    const getScoreColor = (score: number) => {
        if (score >= 80) return { start: "#10b981", end: "#059669" }; // Green
        if (score >= 60) return { start: "#f59e0b", end: "#d97706" }; // Yellow
        return { start: "#ef4444", end: "#dc2626" }; // Red
    };

    const scoreColor = getScoreColor(score);

    return (
        <div className="relative w-[110px] h-[110px] group">
            <svg
                height="100%"
                width="100%"
                viewBox="0 0 110 110"
                className="transform -rotate-90 drop-shadow-sm"
            >
                {/* Background circle */}
                <circle
                    cx="55"
                    cy="55"
                    r={normalizedRadius}
                    stroke="#e2e8f0"
                    strokeWidth={stroke}
                    fill="transparent"
                />
                {/* Partial circle with dynamic gradient */}
                <defs>
                    <linearGradient id={`grad-${score}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={scoreColor.start} />
                        <stop offset="100%" stopColor={scoreColor.end} />
                    </linearGradient>
                </defs>
                <circle
                    cx="55"
                    cy="55"
                    r={normalizedRadius}
                    stroke={`url(#grad-${score})`}
                    strokeWidth={stroke}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                />
            </svg>

            {/* Score and label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-bold text-lg text-slate-700 group-hover:scale-110 transition-transform duration-200">{score}</span>
                <span className="text-xs text-slate-500 font-medium">/ 100</span>
            </div>
        </div>
    );
};

export default ScoreCircle;
