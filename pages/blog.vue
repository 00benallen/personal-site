<template>
    <div>
        <label id="searchLabel">Search</label>
        <input v-model="query" type="search" autocomplete="off" class="bg-base-dark p-2 m-2" aria-labelledby="searchLabel" />
        <div v-for="article in articles" :key="article.title" class="bg-base-light p-4 m-4">
            <div class="mb-8">
                <h1>{{ article.title }}</h1>
                <p class="text-text-dark">{{ article.description }}</p>
            </div>
            <nuxt-content :document="article" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    async asyncData({ $content }) {
        const allArticles = await $content('/').sortBy('createdAt', 'asc').fetch();
        return {
            allArticles,
        };
    },
    data() {
        return {
            query: '',
            articles: [],
        };
    },
    watch: {
        async query(query) {
            if (!query) {
                this.articles = this.$data.allArticles;
                return;
            }

            this.articles = await this.$content('/').sortBy('createdAt', 'asc').limit(12).search(query).fetch();
        },
    },
    created() {
        this.articles = this.$data.allArticles;
    },
});
</script>

<style lang="postcss" scoped>
h1 {
    @apply text-2xl underline text-accent-green;
}

h2 {
    @apply text-xl underline text-text-light;
}

p {
    @apply text-text mb-4;
}
</style>
