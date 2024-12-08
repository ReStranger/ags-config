import { App } from "astal/gtk3";
import style from "./styles/index.scss";
import Bar from "./widgets/bar/Bar";
export default () => {
  App.start({
    css: style,
    main() {
      App.get_monitors().map(Bar);
    },
  });
};
