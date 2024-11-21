import Battery from "gi://AstalBattery";
import { bind } from "astal";

export default () => {
  const battery = Battery.get_default();

  return (
    <button className="bar-button">
      <box className="Battery" visible={bind(battery, "isPresent")}>
        <icon icon={bind(battery, "batteryIconName")} />
        <label
          label={bind(battery, "percentage").as(
            (p) => `${Math.floor(p * 100)} %`,
          )}
        />
      </box>
    </button>
  );
};
