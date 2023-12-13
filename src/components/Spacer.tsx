interface SpacerProps {
  height?: string;
}
export default function Spacer({ height }: SpacerProps) {
  return <div style={{ height: height === undefined ? "24px" : height }}></div>;
}
