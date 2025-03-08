<script setup></script>

<template>
    <div class="layout-wrapper">
        <LayoutHeader />
        <main class="layout-content">
            <slot></slot>
        </main>
        <LayoutFooter />
    </div>
</template>

<style scoped>
.layout-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.layout-content {
    flex: 1;
}
</style>
