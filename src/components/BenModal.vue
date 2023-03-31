<script setup>
import InputComp from './InputComp.vue';
import ButtonComp from './ButtonComp.vue';
import { onMounted, ref } from 'vue';
import { useUserStore } from '../stores/user.js';
import { useModalStore } from '../stores/modal.js';

const userStore = useUserStore();
const user = ref({
    id:'',
    name:'',
    position: '',
    country: '',
    status: '',
});
const modalStore = useModalStore();
const props = defineProps({
    item: {
        type: Object,
    }
});
const statusUser = ref({
    active: "Active",
    offline: "Offline",
})

onMounted(() => {
    if(props.item) {
        user.value = props.item
    }
})

function saveButton(){
    if( props.item ) {
        userStore.editUser(user.value)
        .then(() => {
            modalStore.closeModal();
        })
        .catch(() => {
            alert("basaramadik abi");
        })    
    } else{
        userStore.createUser({
            id: user.value.id, 
            name: user.value.name,
            position: user.value.position,
            country: user.value.country,
            status: user.value.status,
        })
        .then(() => {
            modalStore.closeModal();
        })
        .catch(() => {
            alert("basaramadik abi");
        })    
    }
}

function closeModalButton(){
    modalStore.closeModal();
}

</script>
<template>
    <form @submit.prevent="saveButton" class="flex flex-col items-center p-10 gap-4">
        <h1 class="text-xl">{{ item ? 'Edit' : 'Create' }} User</h1>
        <div class="w-full flex flex-col gap-2">
            <inputComp v-model="user.name" label="Name" />
        </div>
        <div class="w-full">
            <label for="user">user</label>
            <InputComp v-model="user.position" label="Position" />
        </div>
        <div class="w-full">
            <label for="user">user</label>
            <div class="w-full flex gap-2 items-center">
                <select v-model="user.userId" class="border w-full rounded-md p-1 outline-none">
                    <option disabled value="">Please Select</option>
                    <option 
                    v-for="status in statusUser" 
                    :key="status" 
                    :value="status"
                    >{{ statusUser }}</option>
                </select>
            </div> 
        </div>
        <div class="w-full flex justify-end items-center gap-2">
            <button @click="closeModalButton" class="border p-2 rounded-md">Cancel</button>
            <ButtonComp buttonName="Save" type="submit"/>
        </div>
    </form>
</template>