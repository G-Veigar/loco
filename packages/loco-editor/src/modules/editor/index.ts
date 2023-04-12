import { LocoEditor } from "./editor";
import router from "../../router";

const locoEditor = new LocoEditor({
  // platform: "h5",
  platform: router.currentRoute.value.params?.platform as any,
});

export default locoEditor;
