import { defineComponent, ref, unref } from "vue";

// 单独建立一个jsx文件并在vue组件中使用
export default defineComponent({
  name: "Index",
  props: {},
  emits: [],
  setup(_) {
    const TAG = "index.jsx=>";

    const message = ref("Hello, Vue! Hello Jsx!");

    return () => (
      <div>
        <h1>jsx文件</h1>
        <h2>时间：{Date.now()}</h2>
        <p>{unref(message)}</p>
      </div>
    );
  },
});
