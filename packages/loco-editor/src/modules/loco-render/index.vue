<script lang="ts">
import type { VNode } from "vue";
import { defineComponent, h } from "vue";
import { schema2RenderParmas, emitter } from "./utils";
import { initActionScope } from "@/modules/loco-action";

export default defineComponent({
  name: "loco-render",
  props: {
    schema: {
      type: Object,
      required: true,
    },
    mode: {
      type: String,
      default: "edit", // mode: "edit" | "prod"
    },
  },
  render(): VNode | null {
    if (!this.schema) return null;
    const { tag, prop, children } = schema2RenderParmas.call(
      this,
      this.schema.rootNode,
      h,
      {
        mode: this.mode,
        schemaStates: this.schema.states,
        schemaActions: this.schema.actions,
      }
    );
    return h(
      "div",
      {
        id: "cooker-app",
      },
      [h(tag, prop, children)]
    );
  },
  watch: {
    schema: {
      handler(val) {
        if (val?.states) {
          initActionScope(val.states);
        }
      },
      immediate: true,
    },
  },
  mounted() {
    if (this.mode === "edit") {
      emitter.on("hoverEl", (data) => {
        this.$emit("hover", data);
      });
    }
  },
});
</script>
