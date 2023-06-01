<template>
    <div class="border text-sm text-gray-500">
        <RouterLink to="">
            <slot />
        </RouterLink>
    </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>