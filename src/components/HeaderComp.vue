<script setup>
import InputComp from "../components/InputComp.vue";
import { Settings } from "lucide-vue-next";
import { Trash2 } from "lucide-vue-next";
import { AlertCircle } from "lucide-vue-next";
import { MoreVertical } from "lucide-vue-next";

defineProps({
  title: {
    type: String,
  },
});
</script>
<template>
  <div class="pb-4 px-6 flex flex-col gap-6">
    <h2 class="font-bold text-2xl px-4 pt-4">{{ title }}</h2>
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <InputComp placeholder="Search" />
        <button>
          <Settings />
        </button>
        <button>
          <Trash2 />
        </button>
        <button>
          <AlertCircle />
        </button>
        <button>
          <MoreVertical />
        </button>
      </div>
      <slot name="actions" />
    </div>
  </div>
</template>
