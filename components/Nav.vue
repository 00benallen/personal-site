<template>
    <header class="sticky top-0 flex bg-base-light h-24 items-center justify-between border-t border-b border-accent-green divide-x text-text-light">
        <div class="px-8 m-4">
            <p class="text-xl mb-0">
                Ben Pinhorn
                <span class="text-accent-green text-xl">@FULL-STACK</span>
            </p>
            <p class="text-text-dark text-sm">Solving problems is my job</p>
        </div>

        <nav class="flex items-start justify-around text-text">
            <div class="px-8">
                <nuxt-link to="/">Home</nuxt-link>
            </div>
            <div class="px-8">
                <nuxt-link to="/About">About</nuxt-link>
            </div>
            <div class="px-8">
                <nuxt-link to="/Blog">Blog</nuxt-link>
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Nav',
});
</script>
