<script setup>
import ButtonComp from "./ButtonComp.vue";
const users = [
      {
        id: 1,
        avatar: "https://i.pravatar.cc/40",
        name: "Ecem Beyza Aydın",
        email: "EcemBeyzaAydın@gmail.com",
        position: "Frontend Developer",
        country: "Turkey",
        status: "Active",
      },
      {
        id: 2,
        avatar: "https://i.pravatar.cc/40",
        name: "Aydın Ecem",
        email: "AydinEcem@gmail.com",
        position: "Backend Developer",
        country: "Germany",
        status: "Active",
      },
    ]
    defineEmits(['selected'])
        
</script>
<template>
        <table class="w-full mt-8 text-sm">
            <thead>
                <tr class="text-left text-gray-500 bg-gray-300 h-12 hidden lg:table-row">
                    <th class="p-4"><input type="checkbox"></th>
                    <th class="p-4">NAME</th>
                    <th class="p-4">POSITION</th>
                    <th class="p-4">COUNTRY</th>
                    <th class="p-4">STATUS</th>
                    <th class="p-4"></th>
                </tr>
            </thead>
            <tbody class="flex flex-col gap-4 lg:contents">
                <tr v-for="user in users" :key="user.id" class="flex flex-col text-right p-8 lg:p-0 lg:table-row-group lg:text-left relative bg-white border-b transition duration-500 ease-in-out hover:bg-gray-200 even:bg-gray-100 ">
                    <td class="p-4 border-b-4 w-full lg:w-fit lg:border-b-0"><input type="checkbox" @click="$emit('selected', user.id)"></td>
                    <td class="flex gap-4 items-center p-4 border-b lg:border-b-0">
                        <p class="font-bold lg:hidden">NAME</p>
                        <div class="lg:flex gap-4 w-full">
                            <img :src="user.avatar" class="rounded-full absolute lg:static top-6 left-12">
                            <div class="w-full">
                                <p>{{ user.name }}</p>
                                <p class="text-gray-500">{{ user.email }}</p>
                            </div>
                        </div>
                    </td>
                    <td class="p-4 border-b lg:border-b-0 flex justify-between lg:table-cell">
                        <p class="font-bold lg:hidden">POSITION</p>
                        <p>{{ user.position }}</p>
                    </td>
                    <td class="p-4 border-b lg:border-b-0 flex justify-between lg:table-cell">
                        <p class="font-bold lg:hidden">COUNTRY</p>
                        <p>{{ user.country }}</p>
                    </td>
                    <td class="p-4 border-b lg:border-b-0 flex justify-between lg:table-cell">
                        <p class="font-bold lg:hidden">STATUS</p>
                        <div class="flex items-center gap-1">
                            <div class="bg-green-500 w-3 h-3 rounded-full"></div>
                            <p>{{ user.status }}</p>
                        </div>
                    </td>
                    <td class="mt-4">
                        <div class="flex gap-2 justify-center">
                            <ButtonComp button-name="Edit User" color="secondary" />
                            <ButtonComp button-name="Delete User" color="warn" />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
</template>