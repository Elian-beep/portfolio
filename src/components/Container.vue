<script lang="ts" setup>
const props = defineProps<{
    title: string,
}>();
</script>

<template>
    <div class="container">
        <v-card-title class="title">{{ title }}</v-card-title>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.container {
    padding: 12px;
}

.title {
    margin: 0 auto;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin: 0 auto;
}

@media screen and (min-width: 940px) {
    .title {
        text-align: center;
    }

    .content {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: baseline;
        width: 656px;
    }
}

@media screen and (min-width: 1285px) {
  .content {
    width: 990px;
    max-width: 990px;
  }
}
</style>