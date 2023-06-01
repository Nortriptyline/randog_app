<template>
    <MainLayout>
        <template #header>
            Test
        </template>
        <ul>
            <RouterLink v-for="walk in walkStore.walks" :to="{ name: 'Walk', params: { walk: walk.id } }" class="border">
                {{ walk.title }}
            </RouterLink>
        </ul>
    </MainLayout>
</template>
<script setup lang="ts">
import { onMounted } from "vue"
import { RouterLink } from "vue-router"
import { useWalkStore } from "@/stores/walkStore"
import MainLayout from "@/layouts/MainLayout.vue"
const walkStore = useWalkStore()

onMounted(() => {
    walkStore.index(1, 10)
})
</script>