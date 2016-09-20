# Modal

Modal component for Vue Bulma.


## Installation

```
$ npm install vue-bulma-modal --save
```


## Examples

```vue
<template>
  <div>
    <image-modal :visible="true" transition="roll">
      <p class="image is-4by3"><img src="http://placehold.it/1280x960"></p>
    </image-modal>
      <card-modal :visible="true" :title="title" transition="zoom">
      <div class="content has-text-centered"><img :src="src" height="120" alt="Vue Admin"></div>
    </card-modal>
  </div>
</template>

<script>
import { Modal, ImageModal, CardModal } from 'vue-bulma-modal'

export default {
  components: {
    Modal,
    ImageModal,
    CardModal
  }
}
</script>
```


## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)

---

> [fundon.me](https://fundon.me) &nbsp;&middot;&nbsp;
> GitHub [@fundon](https://github.com/fundon) &nbsp;&middot;&nbsp;
> Twitter [@_fundon](https://twitter.com/_fundon)
