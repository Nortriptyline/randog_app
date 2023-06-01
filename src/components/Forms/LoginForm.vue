<template>
    <form @submit.prevent="submit">
        <InputText label="Adresse email" v-model="form.email" />
        <InputText label="Mot de passe" v-model="form.password" />
        <MainButton class="mt-2">Connexion</MainButton>

        <p class="text-center mt-5 text-sm text-gray-500">Not a member yet? 
            <MainLink class="" :to="{name: 'Register'}"> Join us!</MainLink>
        </p>
    </form>
</template>
<script setup lang="ts">
import { LoginForm } from "@/types"
import { useAuthStore } from "@/stores/authStore"

import InputText from '../Inputs/InputText.vue';
import MainButton from "../Buttons/MainButton.vue";
import MainLink from "../MainLink.vue";

const authStore = useAuthStore()

const form: LoginForm = {
    email: "",
    password: "",
    device_name: "RandogApp"
}

const submit = async () => {
    await authStore.login(form)
}
</script>