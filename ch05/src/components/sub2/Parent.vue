<script setup></script>
<template>
  <h4>Parent</h4>
  <p>
    <router-link to="/parent/child1">Child1</router-link><br />
    <router-link to="/parent/child2">Child2</router-link><br />
  </p>
  <router-view></router-view>
</template>
<style scoped></style>
