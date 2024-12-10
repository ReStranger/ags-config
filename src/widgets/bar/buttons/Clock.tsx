import BarButtonWrapper from "./BarButtonWrapper";
import { GLib, Variable } from "astal";

//format = "%H:%M - %A %e."
const LabelTimeFormat = ({
  format,
  name,
}: {
  format: string;
  name: string;
}) => {
  const time = Variable<string>("").poll(
    1000,
    () => GLib.DateTime.new_now_local().format(format)!,
  );

  return (
    <label
      className="LabelTimeFormat"
      onDestroy={() => time.drop()}
      label={time()}
    />
  );
};
const Time = () => {
  return (
    <button className="Time">
      <LabelTimeFormat format="%H:%M" name="time" />
    </button>
  );
};
const Date = () => {
  return (
    <button className="Date">
      <LabelTimeFormat format="%A %e" name="time" />
    </button>
  );
};

export default () => {
  return (
    <BarButtonWrapper>
      <box className="Clock">
        <Time />
        <Date />
      </box>
    </BarButtonWrapper>
  );
};
