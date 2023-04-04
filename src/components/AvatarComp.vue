<script setup>
import { cva } from "class-variance-authority";

const badge = cva(
  ["rounded-full ring ring-white absolute -right-1 -bottom-1"],
  {
    variants: {
      color: {
        primary: "bg-indigo-600",
        secondary: "bg-gray-500",
        warning: "bg-yellow-500",
        error: "bg-red-600",
        success: "bg-green-600",
        info: "bg-blue-500",
      },

      size: {
        xsmall: "w-2 h-2",
        small: "w-3 h-3",
        normal: "w-3 h-3",
        large: "w-4 h-4",
        xlarge: "w-4 h-4",
      },
    },
  }
);

const image = cva([""], {
  variants: {
    size: {
      xsmall: "w-6 h-6",
      small: "w-10 h-10",
      normal: "w-12 h-12",
      large: "w-16 h-16",
      xlarge: "w-20 h-20",
      full: "w-full h-full",
    },
    radius: {
      none: "rounded-none",
      small: "rounded-sm",
      normal: "rounded-md",
      large: "rounded-xl",
      full: "rounded-full",
    },
  },
});

const imageText = cva(
  ["flex items-center justify-center bg-gray-500 text-white"],
  {
    variants: {
      size: {
        xsmall: "w-6 h-6",
        small: "w-10 h-10",
        normal: "w-12 h-12",
        large: "w-16 h-16",
        xlarge: "w-20 h-20",
        full: "w-full h-full",
      },
      radius: {
        none: "rounded-none",
        small: "rounded-sm",
        normal: "rounded-md",
        large: "rounded-xl",
        full: "rounded-full",
      },
    },
  }
);
defineProps({
  avatarText: {
    type: String,
  },
  imageLink: {
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
  showBadge: {
    type: Boolean,
    default: true,
  },
  validator(value) {
    return [
      "none",
      "xsmall",
      "small",
      "normal",
      "large",
      "xlarge",
      "full",
      "primary",
      "secondary",
      "warning",
      "success",
      "error",
      "info",
    ].includes(value.toLocaleLowerCase());
  },
});
</script>
<template>
  <div class="relative flex-shrink-0">
    <div v-if="showBadge" :class="badge({ color, size })"></div>
    <div v-if="!imageLink" :class="imageText({ size, radius })">
      {{ avatarText.split(" ")[0].charAt(0)
      }}{{ avatarText.split(" ")[1].charAt(0) }}
    </div>
    <img v-else :class="image({ size, radius })" :src="imageLink" alt="Photo" />
  </div>
</template>
