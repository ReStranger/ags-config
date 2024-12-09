import { App, Astal, Gtk, Gdk } from "astal/gtk3";
import { Variable } from "astal";
import BarButtonWrapper from "./buttons/BarButtonWrapper";

const time = Variable("").poll(1000, "date");

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
        <box />
        <BarButtonWrapper>
          <label label="sdss" />
        </BarButtonWrapper>
        <button onClick={() => print("hello")} halign={Gtk.Align.CENTER}>
          <label label={time()} />
        </button>
      </centerbox>
    </window>
  );
};
