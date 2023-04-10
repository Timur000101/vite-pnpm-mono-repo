import { defineComponent as n, openBlock as o, createElementBlock as r, renderSlot as l } from "vue";
const s = ["id"], u = /* @__PURE__ */ n({
  __name: "KButton",
  props: {
    variant: null,
    id: null
  },
  setup(t) {
    return (e, c) => (o(), r("button", { id: t.id }, [
      l(e.$slots, "default")
    ], 8, s));
  }
});
export {
  u as KButton
};
