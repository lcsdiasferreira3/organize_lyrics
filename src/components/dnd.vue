<template>
  <div
    :id="id"
    @dragover.prevent
    @drop.prevent="drop"
    @dragenter="dragEnter"
    @dragleave="dragLeave"
    @dragover="dragOver"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: ["id"],

  methods: {
    drop: (e) => {
      const card_id = e.dataTransfer.getData("card_id");
      const card = document.getElementById(card_id);

      card.style.display = "block";
      e.target.style.border = "";

      const el = document.getElementById("dropZoneStyle");
      e.target.replaceChild(card, el.childNodes[0]);

      document.getElementById("dropZoneStyle").className = "musicAfterDrop";

      document.getElementById("backNotDropZone").className = "backWithoutError";
    },
    dragEnter: (e) => {
      document.getElementById("dropZoneStyle").className = "size2";
      e.target.style.border = "4px ridge green";
    },
    dragLeave: (e) => {
      e.target.style.border = "";
      let el = document.getElementById("dropZoneStyle");
      el.classList.add("greenAlert");
      console.log("Leave");
    },
    dragOver: () => {
      document.getElementById("dropZoneStyle").className = "size2";
      console.log("over");
    },
  },
};
</script>
