<template>
<p class="text-white flex items-center"><Icon class="mr-2" icon="il:clock"/>  {{readingTime}} min</p>

</template>

<script setup>
const props = defineProps({
    readingTimeInMinutes: Number
})

const readingTime = computed(() => {
    const minutes = parseFloat(props.readingTimeInMinutes);
    if(!isNaN(minutes)){
        return Math.round(minutes)
    } else {
        return '< 1'
    }
});
</script>

<style>

</style>