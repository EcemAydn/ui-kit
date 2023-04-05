<!-- eslint-disable vue/require-valid-default-prop -->
<script setup>
import { cva } from "class-variance-authority";

const select = cva(
  ["text-sm rounded-r-md bg-transparent border border-gray-50"],
  {
    variants: {
      size: {
        xsmall: "p-1 text-xs",
        small: "p-1 px-4 text-xs",
        normal: "p-2 px-4 text-sm",
        large: "p-3",
        xlarge: "p-3 px-6",
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
        secondary: "bg-gray-600 text-white",
        gray: "bg-gray-100",
      },
    },
  }
);

defineProps({
  select: {
    type: [String, Number],
    default: "",
  },
  selectItems: {
    type: Array,
    default: [],
  },
  size: {
    type: String,
    default: "normal",
  },
  radius: {
    type: String,
    default: "large",
  },
  color: {
    type: String,
    default: "gray",
  },
  label: {
    type: String,
    default: "",
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
</script>
<template>
  <div class="flex flex-col">
    <label class="text-sm pl-2">{{ label }}</label>
    <select
      :value="select"
      @input="(e) => $emit('update:select', e.target.value)"
      name="currency"
      :class="select({ size, radius, color })"
    >
      <option
        v-for="(item, index) in selectItems"
        :key="index + new Date().getTime()"
        :value="item.value"
      >
        {{ item.label }}
      </option>
    </select>
  </div>
</template>
