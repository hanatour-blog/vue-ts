<template>
  <div>
    <header>
      <h1>Vue Todo-List</h1>
    </header>
    <main>
      <router-view :key="$route.fullPath" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
