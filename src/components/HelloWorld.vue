<template>
  <div class="hello">
     <h2>
  <span>프론트엔드 개발자</span>  
  <span class="light">박병근</span> 
  <span> even in</span> 
  <span>the darkest</span>  
  <span>places</span>
</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  height: 937px;
  background: #000;
 
}
body {
  background: #000;
  padding: 2rem;
}

h2 {
  font-family: 'Arial';
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 3rem;
  line-height: 0.75;
}

span {
  display: block;
  text-align: left;
  clear: both;
}

span:not(.light) {
  opacity: 0;
  animation: flashText .6s ease-out alternate infinite;
}

span.light {
  position: relative;
  display: inline-block;
  float:left;
  
}
  span.light:before {
    position: absolute;
    left: 0;
    top: -10%;
    width: 100%;
    height: 120%;
    background: #fff;
    filter: blur(10px);
    content: "";
    opacity: 0;
    animation: flash .6s ease-out alternate infinite;
   
  
}

@keyframes flash{
  to {
    opacity: 1;
  }
}

@keyframes flashText {
  to {
    opacity: 0.3;
  }
}



</style>
