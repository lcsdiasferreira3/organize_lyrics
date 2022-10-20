<template>
  <div
    :id="id"
    :draggable="draggable"
    @dragstart="dragStart"
    @dragover.stop
    @dragend="dragEnd"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: ["id", "draggable"],
  methods: {
    dragStart: (e) => {
      const target = e.target;

      e.dataTransfer.setData("card_id", target.id);

      document.getElementById("backNotDropZone").className = "backWithError";
      let el = document.getElementById("dropZoneStyle");
      el.classList.add("greenAlert");

      setTimeout(() => {
        target.style.display = "none";
      }, 0);
    },
    dragEnd: () => {
      document.getElementById("dropZoneStyle").className = "size2";
      document.getElementById("backNotDropZone").className = "backWithoutError";
    },
  },
};
</script>
