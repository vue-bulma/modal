<template>
  <transition
    :name="transition"
    mode="in-out"
    appear
    :appear-active-class="enterClass"
    :enter-active-class="enterClass"
    :leave-active-class="leaveClass"
  >
    <div :class="['modal', 'animated', visible ? 'is-active' : '']" v-if="visible">
      <div class="modal-background" @click="close"></div>
      <div class="modal-content">
        <slot></slot>
      </div>
      <button class="modal-close" @click="close" v-if="closable"></button>
    </div>
  </transition>
</template>

<script>
import BaseModal from './BaseModal'

export default {
  mixins: [BaseModal],

  props: {
    closable: {
      type: Boolean,
      default: true
    }
  }
}
</script>
