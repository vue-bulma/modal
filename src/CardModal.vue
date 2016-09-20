<template>
  <transition
    :name="transition"
    mode="in-out"
    appear
    :appear-active-class="enterClass"
    :enter-active-class="enterClass"
    :leave-active-class="leaveClass"
    @after-leave="afterLeave"
  >
    <div :class="['modal', 'animated', show ? 'is-active' : '']" v-if="show">
      <div class="modal-background" @click="close"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ title }}</p>
          <button class="delete" @click="close"></button>
        </header>
        <section class="modal-card-body">
          <slot></slot>
        </section>
        <footer class="modal-card-foot">
          <a class="button is-primary" @click="ok">{{ okText }}</a>
          <a class="button" @click="cancel">{{ cancelText }}</a>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import BaseModal from './BaseModal'

export default {
  mixins: [BaseModal],

  props: {
    title: {
      type: String
    },
    okText: {
      type: String,
      default: 'Ok'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    }
  },

  methods: {
    ok () {
      this.close()
    },

    cancel () {
      this.close()
    }
  }
}
</script>
