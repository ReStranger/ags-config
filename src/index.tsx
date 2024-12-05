import { App, Astal } from "astal/gtk3";
import styles from "./styles/index.scss";
import Bar from "./widget/bar/Bar";

export const index: any = () => {
  return App.start({
    gtkTheme: "adw-gtk3",
    iconTheme: "MoreWaita",
    css: styles,
    main() {
      App.get_monitors().map(Bar);
    },
  });
};
