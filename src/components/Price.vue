<template>
  <div :class="classes">{{ pricePretty }}</div>
</template>

<script>
export default {
  name: "AppPrice",
  props: {
    value: { type: Number, required: true },
    bold: { type: Boolean, default: true },
  },

  computed: {
    pricePretty() {
      return this.numberFormatUSD(this.value);
    },
    classes() {
      return {
        "fw-bold": this.bold,
      };
    },
  },

  methods: {
    numberFormatUSD(number) {
      return Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
      }).format(number);
    },
  },
};
</script>
