
export default {

  props: {
    card: Boolean,
    visible: Boolean,
    closable: Boolean,
    transition: {
      type: String,
      default: 'fade'
    },
    lockBackground: Boolean
  },

  data () {
    return {
      show: this.visible
    }
  },

  mounted () {
    document.body.appendChild(this.$el)
  },

  methods: {
    beforeEnter () {
      this.$emit('open')
    },

    afterLeave () {
      this.$emit('close')
    },

    active () {
      this.show = true
    },

    deactive () {
      this.show = false
    },

    clickBackground() {
      if (!this.lockBackground) {
        this.deactive()
      }
    }
  },

  computed: {
    enterClass () {
      return `${this.transition}In`
    },

    leaveClass () {
      return `${this.transition}Out`
    }
  },

  watch: {
    visible (val) {
      this.show = val
    }
  }

}
