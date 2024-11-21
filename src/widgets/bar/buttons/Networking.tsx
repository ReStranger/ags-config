import { bind } from "astal";
import Network from "gi://AstalNetwork";

export default () => {
  const { wifi } = Network.get_default();
  return (
    <button className="bar-button">
      <icon
        tooltipText={bind(wifi, "ssid").as(String)}
        className="Wifi"
        icon={bind(wifi, "iconName")}
      />
    </button>
  );
};
