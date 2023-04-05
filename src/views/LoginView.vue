<script setup>
import { ref } from "vue";
import InputComp from "../components/InputComp.vue";
import ButtonComp from "../components/ButtonComp.vue";
import { useLoginStore } from "../stores/plandy";
import { useRouter } from "vue-router";

const loginStore = useLoginStore();
const router = useRouter();
const list = ref({
  email: "",
  password: "",
});
function signIn() {
  loginStore
    .addUser({ email: list.value.email, password: list.value.password })
    .then(() => {
      console.log("test");
      router.push("/plandy");
    })
    .catch(() => {
      console.log("test olmadı");
    });
}
loginStore.getUser();
</script>

<template>
  <div>
    <InputComp v-model="list.email" type="email" label="Mail" />
    <InputComp v-model="list.password" type="password" label="Password" />
    <ButtonComp button-name="Sign In" @click="signIn" />
  </div>
</template>
