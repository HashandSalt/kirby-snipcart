<template>
  <div>
  <k-grid gutter="medium" class="k-snipcart-vitals">
    <k-column width="1/1">
      <discounts />
    </k-column>
  </k-grid>
  </div>
</template>

<script lang="js">

import Discounts from './components/discountlist.vue';

export default {
  name: 'Discounts',
  components: {
    'discounts': Discounts
  },
}
</script>
