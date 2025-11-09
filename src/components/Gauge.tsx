import { Box, Typography } from "@mui/material";
import FlagIcon from "./FlagIcon";

interface GaugeProps {
  value: number; // 0-100
  countryCode?: "US" | "CA" | "GB" | "EU" | "JP" | "CN";
}

const countryNames: Record<string, string> = {
  US: "United States",
  CA: "Canada",
  GB: "United Kingdom",
  EU: "European Union",
  JP: "Japan",
  CN: "China",
};

const Gauge = ({
  value,
  countryCode = "US",
}: GaugeProps) => {
  // Ensure value is between 0 and 100
  const clampedValue = Math.max(0, Math.min(100, value));

  // Calculate needle angle (from -90 to 90 degrees for a semicircle)
  const needleAngle = -180 + (clampedValue / 100) * 180;

  // Gauge dimensions
  const width = 400;
  const height = 220;
  const centerX = width / 2;
  const centerY = height - 20;
  const radius = 160;
  const arcWidth = 40;

  // Define 5 color segments (each is 36 degrees of the 180-degree semicircle)
  const colors = [
    "#ff0000", // Red
    "#ff6666", // Light Red
    "#ffcc00", // Yellow
    "#99ff99", // Light Green
    "#00cc00", // Green
  ];

  // Create arcs for each segment
  const createArc = (startAngle: number, endAngle: number, color: string) => {
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);

    const innerRadius = radius - arcWidth;
    const x3 = centerX + innerRadius * Math.cos(endRad);
    const y3 = centerY + innerRadius * Math.sin(endRad);
    const x4 = centerX + innerRadius * Math.cos(startRad);
    const y4 = centerY + innerRadius * Math.sin(startRad);

    return (
      <path
        key={`arc-${startAngle}`}
        d={`
          M ${x1} ${y1}
          A ${radius} ${radius} 0 0 1 ${x2} ${y2}
          L ${x3} ${y3}
          A ${innerRadius} ${innerRadius} 0 0 0 ${x4} ${y4}
          Z
        `}
        fill={color}
      />
    );
  };

  // Create the needle
  const needleRad = (needleAngle * Math.PI) / 180;
  const needleLength = radius - arcWidth / 2;
  const needleX = centerX + needleLength * Math.cos(needleRad);
  const needleY = centerY + needleLength * Math.sin(needleRad);

  // Determine status label based on value
  const getStatusLabel = (val: number): string => {
    if (val <= 20) return 'Distressed';
    if (val <= 40) return 'Struggling';
    if (val <= 60) return 'Moderate';
    if (val <= 80) return 'Healthy';
    return 'Thriving';
  };

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: width + 48,
        mx: "auto",
      }}
    >
      {/* Flag Icon in top right */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <FlagIcon countryCode={countryCode} size={32} />
      </Box>

      {/* Title */}
      <Typography variant="h5" align="center" gutterBottom sx={{ mb: 3 }}>
        State of {countryNames[countryCode]} Economy
      </Typography>

      {/* SVG Gauge */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <svg width={width} height={height} style={{ overflow: "visible" }}>
          {/* Create 5 segments */}
          {colors.map((color, index) => {
            const segmentAngle = 180 / 5; // 36 degrees per segment
            const startAngle = 180 + index * segmentAngle;
            const endAngle = 180 + (index + 1) * segmentAngle;
            return createArc(startAngle, endAngle, color);
          })}

          {/* Needle */}
          <line
            x1={centerX}
            y1={centerY}
            x2={needleX}
            y2={needleY}
            stroke="#333"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Needle center dot */}
          <circle cx={centerX} cy={centerY} r="8" fill="#333" />
          <circle cx={centerX} cy={centerY} r="5" fill="#666" />
        </svg>
      </Box>

      {/* Value Display */}
      <Typography
        variant="h4"
        align="center"
        sx={{ mt: 2, fontWeight: "bold" }}
      >
        {getStatusLabel(clampedValue)}
      </Typography>
    </Box>
  );
};

export default Gauge;
