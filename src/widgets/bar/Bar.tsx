import { App, Astal, Gtk, Gdk } from "astal/gtk3";
import { Variable, GLib } from "astal";
import Date from "./buttons/Date";
import Launcher from "./buttons/Launcher";
import Networking from "./buttons/Networking";
import SysTray from "./buttons/SysTray";
import Battery from "./buttons/Battery";

export default (gdkmonitor: Gdk.Monitor) => {
  return (
    <window
      className="bar"
      name="bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={
        Astal.WindowAnchor.TOP |
        Astal.WindowAnchor.LEFT |
        Astal.WindowAnchor.RIGHT
      }
      application={App}
    >
      <centerbox>
        <box css="margin-left: 5px;" hexpand halign={Gtk.Align.START}>
          <Launcher />
        </box>
        <box>
          <Date />
        </box>
        <box css="margin-right: 5px;" hexpand halign={Gtk.Align.END}>
          <SysTray />
          <Battery />
          <Networking />
        </box>
      </centerbox>
    </window>
  );
};
