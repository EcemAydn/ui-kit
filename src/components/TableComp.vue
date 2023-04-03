<script setup>
defineProps({
  headers: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },

  selectable: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["selected"]);
</script>
<template>
  <table class="w-full text-sm">
    <thead class="hidden lg:table-header-group text-gray-700 bg-zinc-100">
      <tr class="text-left">
        <th v-if="selectable" class="p-4">
          <input type="checkbox" class="p-4" />
        </th>
        <td
          v-for="(header, index) in headers"
          :key="index"
          class="p-4 font-medium"
        >
          {{ header.name }}
        </td>
      </tr>
    </thead>

    <tbody class="flex flex-col gap-2 lg:table-row-group p-4 pb-0">
      <tr
        v-for="(item, index) in items"
        :key="index"
        class="flex flex-col lg:table-row shadow-none border first:rounded-t-lg last:rounded-b-lg last:border-b-0 lg:text-left relative bg-white border-b transition duration-500 ease-in-out lg:hover:bg-zinc-50 lg:even:bg-zinc-50"
      >
        <td v-if="selectable" class="p-4 text-left">
          <input type="checkbox" @click="$emit('selected', item.id)" />
        </td>

        <td
          v-for="(header, index) in headers"
          :key="index + 'asdadsa'"
          class="flex flex-col gap-4 p-4 border-b lg:border-b-0 lg:table-cell"
        >
          <p class="font-bold lg:hidden whitespace-nowrap">
            {{ header.name.toUpperCase() }}
          </p>

          <div class="lg:flex gap-4 w-full items-center text-sm">
            <div class="w-full">
              <slot :name="header.value" :item="item">
                {{ item[header.value] }}
              </slot>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
