import { App, Astal } from "astal/gtk3";
import styles from "./styles/index.scss";
import Bar from "./widgets/bar/Bar";
import ScreenCorners from "./widgets/bar/ScreenCorners";
import AppLauncher from "./widgets/launcher/AppLauncher";

export const index: any = () => {
  return App.start({
    gtkTheme: "adw-gtk3",
    iconTheme: "MoreWaita",
    css: styles,
    main() {
      App.get_monitors().map(Bar);
      App.get_monitors().map(ScreenCorners);
      AppLauncher();
      App.get_window("AppLauncher")!.hide();
    },
  });
};
