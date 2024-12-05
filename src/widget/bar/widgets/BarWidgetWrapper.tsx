import { Widget } from "astal/gtk3";

export interface BarWidgetWrapperProps extends Widget.BoxProps {
  child?: JSX.Element;
}

export default (boxprops: BarWidgetWrapperProps) => {
  const { child } = boxprops;
  return <box className="barWidgetWrapper">{child}</box>;
};
