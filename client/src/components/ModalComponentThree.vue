<template lang="html">
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <button
          type="button"
          class="btn-close"
          @click="close"
          >x
        </button>
      </slot>
    </header>
    <section class="modal-body">
      <slot name="body">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4993sBLAzGA?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </slot>
    </section>

  </div>
</div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
  name: 'modal',

  methods: {
    close() {
      eventBus.$emit('close3');
    },
  },
};
</script>

<style lang="css" scoped>

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
}

.modal {
  background-color: #252e3d;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 0 auto;
  width: 0 auto;
  font-family: 'Russo One', sans-serif;
  letter-spacing: 0.1em;
  font-size: 1em
}

.modal-header,
.modal-footer,
.modal-body {
  width: 0 auto;
  height: 0 auto;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: orange;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 1.3em
}

.modal-body {
  height: 80vh;
  color: white;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: red;
  background: transparent;
}

</style>
