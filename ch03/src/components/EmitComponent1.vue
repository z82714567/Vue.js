<script>
export default {
  name: "EmitComponent1",
  props: ["name", "age"],
  data() {
    return {
      myname: this.name,
      myage: this.age,
    };
  },
  methods: {
    btnEmit: function () {
      // 상위 컴포넌트로 전달할 데이터 생성
      const emitData = {
        name: this.myname,
        age: this.myage,
      };

      // 상위 컴포넌트로 myEmit 이벤트 발생
      this.$emit("myEmit", emitData);
    },
  },
};
</script>
<template>
  <h4>EmitComponent1</h4>
  <p>
    이름 : <input type="text" v-model="myname" /><br />
    나이 : <input type="text" v-model="myage" /><br />
  </p>
  <button @click="btnEmit">전달</button>
</template>
<style scoped></style>
