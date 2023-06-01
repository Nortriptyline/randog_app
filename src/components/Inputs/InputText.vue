<template>
    <div class="flex flex-col my-3">
        <label class="mb-2 font-medium text-sm leading-6 text-gray-900">{{ label }}</label>
        <input class="block border-0 rounded-md text-gray-900 shadow-sm py-1.5 px-3
                ring-1 ring-inset ring-gray-300
                placeholder:text-gray-400 
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm" :value="modelValue"
            type="text" @update="emits('update:modelValue', $event.target.value)" />
    </div>
</template>
<script setup lang="ts">

defineProps<{
    label: string,
    modelValue: string,
    type: string
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
</script>