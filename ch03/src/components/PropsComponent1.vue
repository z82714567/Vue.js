<script>
export default {
  name: "PropsComponent1",
  props: ["name", "age"],
};
</script>

<template>
  <h4>PropsComponent1</h4>
  <p>
    props name : {{ name }}<br />
    props age : {{ age }}
  </p>
</template>

<style scoped></style>
