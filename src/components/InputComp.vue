<script setup>
import { cva } from "class-variance-authority";

const labelColor = cva(["pl-2"], {
  variants: {
    l_color: {
      primary: "text-black",
      secondary: "text-white",
    },
    l_size: {
      xsmall: "text-xs",
      small: "text-sm",
      normal: "text-md",
    },
    l_position: {
      primary: "absoulte bottom-2 left-1",
    },
  },
});

const input = cva(
  ["peer outline-gray-700 w-full font-light border border-gray-300"],
  {
    variants: {
      size: {
        xsmall: "p-1 pl-2 text-sm",
        small: "p-2 px-3 text-sm",
        normal: "p-2 px-4",
        large: "p-3 px-5",
        xlarge: "p-4",
      },
      radius: {
        none: "rounded-none",
        small: "rounded-sm",
        normal: "rounded-md",
        large: "rounded-lg",
        xlarge: "rounded-full",
      },
      color: {
        primary: "bg-white",
        secondary: "bg-gray-700 text-white",
        gray: "bg-gray-100",
      },
    },
  }
);
defineProps({
  label: {
    type: [String, Number],
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
  size: {
    type: String,
    default: "normal",
  },
  color: {
    type: String,
    default: "none",
  },
  showSelect: {
    type: Boolean,
    default: false,
  },
  radius: {
    type: String,
    default: "normal",
  },
  l_color: {
    type: String,
    default: "primary",
  },
  l_size: {
    type: String,
    default: "small",
  },

  validator(value) {
    return [
      "xsmall",
      "small",
      "normal",
      "large",
      "xlarge",
      "none",
      "primary",
      "gray",
      "secondary",
    ].includes(value.toLocaleLowerCase());
  },
});
defineEmits(["update:modelValue", "update:select"]);
</script>
<template>
  <label :for="forId" :class="labelColor({ l_color, l_size })">{{
    label
  }}</label>
  <input
    required
    v-bind="$attrs"
    :id="forId"
    :type="type"
    @input="(e) => $emit('update:modelValue', e.target.value)"
    :value="modelValue"
    :class="input({ size, radius, color })"
  />
</template>
