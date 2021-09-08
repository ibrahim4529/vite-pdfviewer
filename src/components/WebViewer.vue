<template>
  <div id="webviewer" ref="viewer"></div>
</template>

<script>
import { ref, onMounted } from "vue";
import WebViewer from "@pdftron/webviewer";
export default {
  name: "WebViewer",
  props: { initialDoc: { type: String } },
  setup(props) {
    const viewer = ref(null);
    onMounted(() => {
      const path = '/webdriver';
      WebViewer({ path, initialDoc: props.initialDoc }, viewer.value).then(
        (instance) => {
          const { documentViewer, annotationManager, Annotations } =
            instance.Core;
          documentViewer.addEventListener("documentLoaded", () => {
            
          });
        }
      );
    });
    return {
      viewer,
    };
  },
};
</script>

<style>
#webviewer {
  height: 100vh;
}
</style>