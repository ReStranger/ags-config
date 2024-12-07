import { Variable, GLib } from "astal";

export default ({ format = "%H:%M - %A %e/%m" }) => {
  const time = Variable<string>("").poll(
    1000,
    () => GLib.DateTime.new_now_local().format(format)!,
  );

  return (
    <button className="bar-button">
      <label className="date" onDestroy={() => time.drop()} label={time()} />
    </button>
  );
};
