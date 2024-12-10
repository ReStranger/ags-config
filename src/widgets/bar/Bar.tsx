import { App, Astal, Gtk, Gdk } from "astal/gtk3";
import BarButtonWrapper from "./buttons/BarButtonWrapper";
import Clock from "./buttons/Clock";

export default (gdkmonitor: Gdk.Monitor) => {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor;
  const { START, CENTER, END } = Gtk.Align;
  return (
    <window
      className="Bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={TOP | LEFT | RIGHT}
      application={App}
    >
      <centerbox>
        <box>
          <BarButtonWrapper>
            <label label="sdss" />
          </BarButtonWrapper>
        </box>
        <box className="BarCenterWidgets">
          <BarButtonWrapper>
            <Clock />
          </BarButtonWrapper>
        </box>
        <box>
          <button onClick={() => print("hello")} halign={END}></button>
        </box>
      </centerbox>
    </window>
  );
};
