<script setup>
import { ref } from "vue";
import { cva } from "class-variance-authority";

const forId = ref(new Date().getTime());
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
const borderDiv = cva(
  ["flex w-full border rounded-lg justify-between items-center"],
  {
    variants: {
      color: {
        primary: "border-gray-300",
        secondary: "border-white",
        gray: "border-gray-50",
      },
    },
  }
);
const input = cva(["outline-none w-full font-light"], {
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
});
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
    default: "gray",
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
  l_position: {
    type: String,
    default: "primary",
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
  <div class="flex flex-col relative">
    <label :for="forId" :class="labelColor({ l_color, l_size, l_position })">{{
      label
    }}</label>
    <div :class="borderDiv({ color })">
      <div class="relative flex items-center w-full">
        <slot name="append"></slot>
        <input
          required
          v-bind="$attrs"
          :id="forId"
          :type="type"
          @input="(e) => $emit('update:modelValue', e.target.value)"
          :value="modelValue"
          :class="input({ size, radius, color })"
        />
        <slot name="prepend"></slot>
      </div>
    </div>
  </div>
</template>
