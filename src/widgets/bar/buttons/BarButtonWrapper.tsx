type Props = {
  child?: JSX.Element;
};

export default ({ child }: Props) => {
  return <box className="BarButtonWrapper">{child}</box>;
};
