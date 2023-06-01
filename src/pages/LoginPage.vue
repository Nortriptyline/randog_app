<template>
    <FullPageLayout class="flex justify-center items-center">
        <div class="w-full px-5">
            <div class="flex flex-col items-center justify-center">
                <LogoIconColored class="w-24" />
                <h1 class="text-xl font-bold my-5">Sign in to your account</h1>
            </div>
            <LoginForm />
        </div>
    </FullPageLayout>
</template>
<script setup lang="ts">
import LoginForm from "@/components/Forms/LoginForm.vue"
import LogoIconColored from "@/components/Logos/LogoIconColored.vue";
import FullPageLayout from "@/layouts/FullPageLayout.vue";

</script>