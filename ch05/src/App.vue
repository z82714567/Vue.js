<script setup>
/* 날짜 : 2023/11/10
 이름 : 노수현
 내용 : ch05.Vue Router

 Router패키지 설치
 - npm install vue-router@next

 Router 작업
 1) router - index.js 설정파일
 2) main.js - router 인스턴스 등록(use)
 3) router-link & router-view 처리
*/
</script>

<template>
  <h3>ch05.Vue Router</h3>

  <h4>Router 기본</h4>
  <router-link to="/hello">Hello</router-link><br />
  <router-link to="/welcome">Welcome</router-link><br />
  <router-link to="/greeting">Greeting</router-link>

  <h4>Router 중첩</h4>
  <router-link to="/parent">Parent</router-link>

  <h4>Router Named View</h4>
  <router-link to="/main1">Main1</router-link><br />
  <router-link to="/main2">Main2</router-link><br />
  <router-link to="/main3">Main3</router-link>

  <h4>Router 데이터 전달</h4>
  <router-link to="/form1">Form1</router-link><br />
  <router-link to="/form2">Form2</router-link>
  <hr />

  <router-view name="header"></router-view>
  <router-view></router-view>
  <router-view name="footer"></router-view>
</template>

<style scoped></style>
