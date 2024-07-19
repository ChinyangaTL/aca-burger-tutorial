interface Props {
  type: string;
  color: string;
}

const Filling: React.FC<Props> = ({ color, type }) => {
  return <div style={{ color: color }}>{type}</div>;
};

export default Filling;
