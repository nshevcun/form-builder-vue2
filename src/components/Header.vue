<template>
    <header>
        <h2>{{ title }}</h2>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
    }
}
</script>

<style>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 20px 0 20px;
}
</style>