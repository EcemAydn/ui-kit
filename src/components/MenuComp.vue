<template>
  <div class="border-2 border-t-0 w-[280px] h-full">
    <div class="p-2 pl-4 flex flex-col">
      <router-link :to="{ name: 'user' }" class="font-bold text-black"
        >User
      </router-link>
      <router-link :to="{ name: 'product' }" class="font-bold text-black"
        >Product
      </router-link>
    </div>
  </div>
</template>
