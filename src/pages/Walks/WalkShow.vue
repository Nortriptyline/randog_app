<template>
    {{ walk }}
</template>
<script setup lang="ts">
import { useWalkStore } from '@/stores/walkStore';
import { onBeforeRouteLeave } from 'vue-router';

const walkStore = useWalkStore()

const walk = walkStore.walk

onBeforeRouteLeave(() => {
    walkStore.leavePage()
})
</script>