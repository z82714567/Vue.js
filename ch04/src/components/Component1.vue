<template>
  <h4>Component1</h4>
  <p>
    count1 : {{ count1 }}
    <button @click="addCount1">증가</button>
  </p>

  <p>
    count2 : {{ count2 }}
    <button @click="addCount2">증가</button>
  </p>

  <p>
    user1 : {{ user1.name }} / {{ user1.age }} / {{ user1.addr }}
    <button @click="changeUser1">수정</button>
  </p>

  <p>
    user2 : {{ user2.name }} / {{ user2.age }} / {{ user2.addr }}
    <button @click="changeUser2">수정</button>
  </p>

  <p>
    myValue: {{ myValue }} / myValue2x: {{ myValue2x }}
    <button @click="addMyValue">증가</button>
  </p>
</template>
<script>
import { reactive, computed, watch, ref } from "vue";

export default {
  name: "Component1",

  /*
      setup()
       - Composition API를 서술하기 위한 API
       - 기존 Options API data(), methods, computed 통합
  
      ref
       - 기본형 변수에 반응성을 부여하는 Composition API
  
      reactive
       - 참조형 변수(객체)에 반응성을 부여하는 Composition API
    */
  setup() {
    // 상태값 선언(반응성 X)
    let count1 = 0;
    let user1 = {
      name: "김유신",
      age: 23,
      addr: "부산",
    };

    // 상태값 선언(반응성 O)
    const count2 = ref(0);
    const user2 = reactive({
      name: "김춘추",
      age: 21,
      addr: "부산",
    });

    const myValue = ref(10);
    //computed : 상태값의 변화를 감지해서 자동으로 계산, 반환
    const myValue2x = computed(() => {
      return myValue.value * 2;
    });

    //watch : 상태값을 감지해서 콜백함수 실행
    watch(myValue, (current, prev) => {
      console.log(`이전값, 현재값 : ${prev}, ${current}`);
    });

    const addCount1 = function () {
      count1++;
    };
    const addCount2 = function () {
      count2.value++;
    };

    const changeUser1 = () => {
      user1.age++;
      user1.addr = "김해";
    };

    const changeUser2 = () => {
      user2.age++;
      user2.addr = "경주";
    };

    const addMyValue = () => {
      myValue.value++;
    };

    return {
      count1,
      count2,
      user1,
      user2,
      addCount1,
      addCount2,
      changeUser1,
      changeUser2,
      myValue,
      myValue2x,
      addMyValue,
    };
  },
};
</script>
<style scoped></style>
