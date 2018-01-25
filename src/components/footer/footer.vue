<template>
    <el-row :gutter="24" >
      <div class="footer">
        <div class="footer-content">
          <div class="contact">
              <a href=""><img src="./facebook-f.png" alt=""></a>
              <a href=""><img src="./in.png" alt=""></a>
              <a href=""><img src="./plan.png" alt=""></a>
              <a href=""><img src="./wecat.png" alt=""></a>
              <a href=""><img src="./weibo.png" alt=""></a>
              <a href=""><img src="./email.png" alt=""></a>
          </div>
          <div class="slogan">
            <p>B20是由投资者和金融专家支持的ICO评级平台。</p>
            <p>&copy;2017-2018保留所有权利</p>
          </div>
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
.footer{width: 100%;height: 292px;background-color: #3C7BE3;position: relative;}
.footer-content{width: 22%;position: absolute;top: 92px;left:40%;}
.contact{display: flex;justify-content:space-around;}
.slogan{margin-top: 22px;}
.slogan p{color:#fff;font-size: 16px;}

</style>
