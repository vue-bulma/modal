
export default {

  props: {
    card: Boolean,
    visible: Boolean,
    closable: Boolean,
    transition: {
      type: String,
      default: 'fade'
    }
  },

  mounted () {
    this.$nextTick(() => {
      document.body.appendChild(this.$el)
    })
  },

  methods: {
    close () {
      this.$emit('close')
    }
  },

  computed: {
    enterClass () {
      return `${this.transition}In`
    },

    leaveClass () {
      return `${this.transition}Out`
    }
  }

}
