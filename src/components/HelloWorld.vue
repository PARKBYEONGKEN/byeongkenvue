<template>
<<<<<<< HEAD
<div id="wrap">
   
  
  
  </div>  
=======

  <div id="hello" >
   
   <div class="logo" @mousemove="move(e)">
    MOVE MOUSE
  </div>  
 
  </div>

>>>>>>> 84a724a901532f5f4af6607cfb7d8811af20339d
</template>

<script>
export default {
<<<<<<< HEAD
  methods:{
  
  },
  props: {
   
  }
}
=======
         methods:{
           move:function(e){
              let body = document.getElementById('.hello');
  let circle = document.createElement('span');
  let x = e.offsetX;
  let y = e.offsetY;
  circle.style.left = x + "px";
  circle.style.top = y + "px";
  let size = Math.random() * 100;
  circle.style.width = 20 + size + "px";
  circle.style.height = 20 + size + "px";
  body.appendChild(circle);
  setTimeout(function() {
    circle.remove();
  }, 1800);
           }
             
           }
        }
      
>>>>>>> 84a724a901532f5f4af6607cfb7d8811af20339d
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
<<<<<<< HEAD
  #wrap{
    background: #1B1D1F;
    height: 937px;
  }
=======
* {
  margin: 0;
  padding: 0;
}

#hello {
  overflow: hidden;
  background: #55b9f3;
  height: 100vh; 
}

.logo {
  font-family: "Montserrat", sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  color: #fff;
  font-size: 50px;
}

span {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  position: absolute;
  pointer-events: none;
  background: #55b9f3;
  box-shadow:  20px 20px 60px #489dcf, 
             -20px -20px 60px #62d5ff;
  transform: translate(-50%, -50%);
  animation: blow 4s linear infinite;
}


@keyframes blow {
  0% {
    transform: translate(-50%, -50%);
    opacity: 1;
    filter: hue-rotate(0deg);
  }
  100% {
    transform: translate(-50%, -1000%);
    opacity: 0;
    filter: hue-rotate(720deg);
  }
}

>>>>>>> 84a724a901532f5f4af6607cfb7d8811af20339d
</style>
