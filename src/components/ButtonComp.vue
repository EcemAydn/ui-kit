<script setup>
import { cva } from "class-variance-authority";

const button = cva(["whitespace-nowrap text-white text-xs font-medium"], {
  variants: {
    size: {
      xsmall: "p-1 px-2",
      small: "p-1 px-2",
      normal: "p-2 px-4",
      large: "p-3 px-6",
    },
    radius: {
      none: "rounded-none",
      normal: "rounded-md",
      large: "rounded-full",
    },
    color: {
      primary: "bg-indigo-600 border-indigo-700",
      secondary: "bg-indigo-100 border-indigo-300 text-indigo-700",
      none: "bg-white text-black border ",
      warn: "bg-red-600 border-red-700",
    },
  },

  compoundVariants: [
    {
      color: "primary",
    },
  ],
});

defineProps({
  buttonName: {
    type: String,
  },
  size: {
    type: String,
    default: "normal",
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
    :class="button({ size, radius, color, colorNone: color === 'none' })"
    :disabled="disabled"
  >
    <div class="flex items-center justify-center gap-1">
      <slot name="append"></slot>
      {{ buttonName }}
      <slot name="prepend"></slot>
    </div>
  </button>
</template>
