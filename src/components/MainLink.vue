<template>
    <RouterLink class="text-secondary font-bold" :to="to">
        <slot />
    </RouterLink>
</template>
<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';

defineProps<{
    to: RouteLocationRaw
}>()
</script>