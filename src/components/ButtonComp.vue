<script setup>
import { cva } from "class-variance-authority";

const button = cva(
  [
    "border-b-4 focus:border-none focus:shadow-inner whitespace-nowrap text-white",
  ],
  {
    variants: {
      size: {
        xsmall: "px-2",
        small: "p-1 px-2 md:p-2 md:px-4",
        normal: "p-2 px-4",
        large: "p-3 px-6",
      },
      radius: {
        none: "rounded-none",
        normal: "rounded-md",
        large: "rounded-full",
      },
      color: {
        primary: "bg-green-500 border-green-600",
        secondary: "bg-blue-500 border-blue-600",
        none: "bg-transparent text-black ",
        warn: "bg-red-500 border-red-600",
      },
    },
  }
);

defineProps({
  buttonName: {
    type: String,
  },
  size: {
    type: String,
    default: "small",
  },
  radius: {
    type: String,
    default: "normal",
  },
  color: {
    type: String,
    default: "primary",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  validator(value) {
    return [
      "xsmall",
      "small",
      "normal",
      "large",
      "primary",
      "secondary",
      "warn",
      "none",
    ].includes(value.toLocaleLowerCase());
  },
});
</script>

<template>
  <button
    v-bind="$attrs"
    :class="button({ size, radius, color })"
    :disabled="disabled"
  >
    {{ buttonName }}
  </button>
</template>
