<template>
    <div class="bg-base-dark min-h-screen font-mono text-text">
        <Nav />
        <div class="container p-4 mx-auto bg-base border-r border-l border-accent-mauve min-h-screen">
            <Nuxt />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav.vue';
export default Vue.extend({
    components: {
        Nav,
    },
});
</script>
