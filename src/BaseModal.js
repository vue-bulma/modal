
export default {

  props: {
    card: Boolean,
    visible: Boolean,
    closable: Boolean,
    transition: {
      type: String,
      default: 'fade'
    },
    transitionDirection: {
      type: String,
      default: ''
    }
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
    
    afterEnter () {
      this.$emit('opened')
    },

    beforeLeave () {
      this.$emit('before-close')
    },
    
    afterLeave () {
      this.$emit('close')
    },

    active () {
      this.show = true
    },

    deactive () {
      if(this.closable)
        this.show = false
    }
  },

  computed: {
    enterClass () {
      return `${this.transition}In${this.transitionDirection}`
    },

    leaveClass () {
      return `${this.transition}Out${this.transitionDirection}`
    }
  },

  watch: {
    visible (val) {
      this.show = val
    }
  }

}
