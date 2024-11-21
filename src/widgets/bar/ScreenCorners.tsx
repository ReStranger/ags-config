import { App, Astal, Gtk, Gdk } from "astal/gtk3";

export default (gdkmonitor: Gdk.Monitor) => {
  return (
    <window
      className="screen-corner"
      gdkmonitor={gdkmonitor}
      name={`corner${gdkmonitor}`}
      anchor={
        Astal.WindowAnchor.TOP |
        Astal.WindowAnchor.BOTTOM |
        Astal.WindowAnchor.LEFT |
        Astal.WindowAnchor.RIGHT
      }
      clickThrough={true}
      layer={Astal.Layer.BOTTOM}
    >
      <box className="shadow">
        <box className="border" expand={true}>
          <box className="corner" expand={true} />
        </box>
      </box>
    </window>
  );
};
