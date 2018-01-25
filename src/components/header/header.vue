<template>
    <el-row :gutter="24" class="header">
     <div class="wrapper">
       <div class="logo"><img src="./logo.png" alt="" /></div>
       <div class="header-nav">
         <ul >
           <li><a href="">首页</a></li>
           <li><a href="">项目列表</a></li>
           <li><a href="">团队动态</a></li>
           <li><a href="">关于</a></li>
         </ul>
       </div>
     </div>
    </el-row>   
</template>

<script>
  export default {
    data (){
     return {
    
     }
    }


  }
</script>

<style>
.header{
 background-color: #3C7BE3;
 height: 80px;
 display: flex;
 justify-content: center;
}
.wrapper{
  width:70%;
  height: 80px;

  }
  .wrapper div{
    display: inline-block;
    line-height: 80px;
  }
.logo{
   width: 52px;
   height: 52px;
   float: left;
   margin-top: 14px;
   
}
.header-nav{width: 80%;}
ul li {
  list-style-type: none;
  display: inline-block;
  text-align: left;
  margin-right: 12%;
}
a{
  text-decoration: none;
  color:#fff;
  font-size: 20px;
}
</style>
