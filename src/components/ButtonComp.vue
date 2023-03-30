<script setup>
import { cva } from "class-variance-authority";

    const button = cva(['border-b-4 focus:border-none focus:shadow-inner'], {
      variants: {
        size: {
          small: 'p-1 px-2',
          normal: 'p-2 px-4',
          large: 'p-3 px-6',
        },
        radius: {
          none: 'rounded-none',
          normal: 'rounded-md',
          large: 'rounded-full'
        },
        color: {
          primary: 'bg-blue-300 border-blue-400',
          secondary: 'bg-yellow-300 border-yellow-400',
          warn: 'bg-red-300 border-red-400',
        }
      },
    })

defineProps({
  buttonName: {
    type: String,
  },
  size: {
    type: String,
    default: 'normal',
  },
  radius: {
    type: String,
    default: 'normal',
  },
  color: {
    type: String,
    default: 'primary',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  validator(value) {
    return ['small', 'normal', 'large', 'primary', 'secondary', 'warn', 'none'].includes(value.toLocaleLowerCase());
  }
})
</script>

<template>
    <button
    v-bind="$attrs"
    :class="button({ size, radius, color })"
    :disabled="disabled">
    {{ buttonName }}
  </button>
</template>
