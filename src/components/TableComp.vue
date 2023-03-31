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
  <table class="w-full mt-8 text-sm">
    <thead class="hidden md:table-header-group text-gray-700 bg-zinc-100">
      <tr class="text-left">
        <th v-if="selectable" class="p-4">
          <input type="checkbox" class="p-4" />
        </th>
        <td v-for="(header, index) in headers" :key="index" class="p-4">
          {{ header.name }}
        </td>
      </tr>
    </thead>

    <tbody class="flex flex-col gap-2 lg:table-row-group p-4">
      <tr
        v-for="(item, index) in items"
        :key="index"
        class="flex flex-col text-right p-8 md:p-0 lg:table-row shadow-lg border first:rounded-t-lg last:rounded-b-lg lg:text-left relative bg-white border-b transition duration-500 ease-in-out lg:hover:bg-zinc-50 lg:even:bg-zinc-50"
      >
        <td
          v-if="selectable"
          class="p-4 border-b-4 w-full lg:w-fit lg:border-b-0"
        >
          <input type="checkbox" @click="$emit('selected', user.id)" />
        </td>

        <td
          v-for="(header, index) in headers"
          :key="index + 'asdadsa'"
          class="flex gap-4 items-center p-4 border-b lg:border-b-0 lg:table-cell"
        >
          <p class="font-bold lg:hidden">{{ header.name.toUpperCase() }}</p>
          <div class="lg:flex gap-4 w-full items-center">
            <div class="w-full">
              <p>{{ item[header.value] }}</p>
              <slot v-if="header.value === 'name'" name="name"></slot>
              <slot v-if="header.value === 'actions'" name="actions"></slot>
            </div>
          </div>
        </td>

        <!-- <img
              :src="user.avatar"
              class="rounded-full w-12 h-12 lg:w-8 lg:h-8 absolute lg:static top-6 left-12"
            /> -->
        <!-- <p class="text-gray-500">{{ user.email }}</p> -->

        <!-- <td
          class="p-4 border-b lg:border-b-0 flex justify-between lg:table-cell"
        >
          <p class="font-bold lg:hidden">POSITION</p>
          <p>{{ user.position }}</p>
        </td>
        <td
          class="p-4 border-b lg:border-b-0 flex justify-between lg:table-cell"
        >
          <p class="font-bold lg:hidden">COUNTRY</p>
          <p>{{ user.country }}</p>
        </td>
        <td
          class="p-4 border-b lg:border-b-0 flex justify-between lg:table-cell"
        >
          <p class="font-bold lg:hidden">STATUS</p>
          <div class="flex items-center gap-1">
            <div class="bg-green-500 w-3 h-3 rounded-full"></div>
            <p>{{ user.status }}</p>
          </div>
        </td> -->
        <!-- <td class="mt-4">
          <div class="flex gap-2 justify-center">
            <ButtonComp
              button-name="Edit User"
              color="secondary"
              @click="editUser(user)"
            />

            <ButtonComp
              button-name="Delete User"
              color="warn"
              @click="deleteUser(user.id)"
            />
          </div>
        </td> -->
      </tr>
    </tbody>
  </table>
</template>

<!-- <th class="p-4">
  <ButtonComp button-name="+" size="xsmall" @click="createUser" />
</th> -->
