import { App } from "astal/gtk3";
export default () => {
  return (
    <button
      className="bar-button"
      onClicked={() => App.toggle_window("AppLauncher")}
    >
      <icon className="system-icon" icon="nix-snowflake" />
    </button>
  );
};
