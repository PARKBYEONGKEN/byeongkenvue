<template>
  <div id="app">
    <typical
      :steps="['Hello', 1000, 'Hello world!', 500]"
      :wrapper="'h2'"
    ></typical>
    <typical
      class="typicalWrapper"
      :steps="[
        'Fucking',
        1000,
        'Fucking Awesome!',
        500,
        'Fucking Awesome! Aha :-) 👋',
        1000,
      ]"
      :loop="Infinity"
      :wrapper="'h3'"
    ></typical>
  </div>
</template>

<script>
import typical from "vue-typical";

export default {
  name: "HelloWorld",
  components: {
    typical,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.typicalWrapper::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
