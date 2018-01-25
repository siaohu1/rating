<template>
      <el-row :gutter="24" class="main">
         <div class="sreach">
             <center>
                  <form action="">
                    <input type="text" placeholder="搜索项目">
                    <img src="./sreach.png" alt="">
                  </form>
             </center>
         </div>
          <div class="content">
              <div class="plate">
                  <div class="plate-left">
                      <div class="plate-left-top">
                           <div class="plate-newest">
                               <div class="plate-newest-list">
                                   <section class="plate-box">
                                       <header class="plate-header">
                                           <span>最新项目</span>
                                           <span>项目评级</span>
                                       </header>
                                       <div class="plate-content">
                                           <div class="items-list">
                                               <div class="items">
                                                       <div class="items-name">
                                                            <div class="items-left" style="white-space:nowrap;">
                                                                <img src="./eys.png" alt="">
                                                                <a href="#" >Rendertoken</a>
                                                            </div>
                                                            <div>
                                                                <p>8.7</p>
                                                            </div>
                                                        </div>
                                                        <div class="items-label">
                                                            <div class="items-left tab" style="margin:0;"> 
                                                                <el-button class="button1" type="primary" size="mini">真格领头</el-button>
                                                                <el-button type="danger" size="mini">高风险</el-button>
                                                                <el-button type="info" size="mini">真领头</el-button>
                                                                <el-button type="info" size="mini">真领头</el-button>
                                                                <el-button type="info" size="mini">真格领头</el-button>
                                                            </div>
                                                            <div>
                                                                <p><img src="./eys.png" alt=""><span>432</span></p>
                                                            </div>
                                                        </div>
                                               </div>
                                           </div>
                                       </div>
                                   </section>
                               </div>
                            </div>
                            <div class="plate-hottest">
                                 <div class="plate-hottest-list">
                                   <section class="plate-box">
                                       <header class="plate-header">
                                           <span>最热项目</span>
                                           <span>项目评级</span>
                                       </header>
                                       <div class="plate-content">
                                           <div class="items-list">
                                               <div class="items">
                                                       <div class="items-name">
                                                            <div class="items-left" style="white-space:nowrap;">
                                                                <img src="./eys.png" alt="">
                                                                <a href="#" >Rendertoken</a>
                                                            </div>
                                                            <div>
                                                                <p>8.7</p>
                                                            </div>
                                                        </div>
                                                        <div class="items-label">
                                                            <div class="items-left tab" style="margin:0;"> 
                                                                <el-button class="button1" type="primary" size="mini">真格领头</el-button>
                                                                <el-button type="danger" size="mini">高风险</el-button>
                                                                <el-button type="info" size="mini">真领头</el-button>
                                                                <el-button type="info" size="mini">真领头</el-button>
                                                                <el-button type="info" size="mini">真格领头</el-button>
                                                            </div>
                                                            <div>
                                                                <p><img src="./eys.png" alt=""><span>432</span></p>
                                                            </div>
                                                        </div>
                                               </div>
                                               
                                           </div>
                                       </div>
                                   </section>
                               </div>
                            </div>
                      </div>
                      <div class="plate-left-bottom">
                       <div class="newsimg"><img src="./img1.png" alt=""></div>
                        <div class="news">
                            <h5>独家：从ICORating获得Telegram Open Network白皮书的入门书</h5> 
                            <p class="reportTime"><img src="./time.png" alt=""><span>2018年3月21日</span></p>
                            <p class="reportText">ICORating团队已经获得了即将到来的电报开放网络（Telegram Open Network）ICO白皮书的入门书 - 这是一个在炒作和投资方面已被宣布破纪录的加密行动。</p>
                        </div>
                      </div>
                      
                  </div>
                 
                <div class="plate-vote">
                    <section class="plate-box">
                        <header class="plate-header">
                            <span>项目投票</span>
                            <span>投票数</span>
                        </header>
                        <div class="plate-content">
                            <div class="items-list">
                                <div class="items">
                                        <div class="items-name">
                                            <div class="items-left" >
                                                <ul >
                                                    <li ><img src="./eys.png" alt="" ></li>
                                                    <li class="voteNum">
                                                        <a href="#">Rendertoken</a><br>
                                                        <img src="./vote.png" alt=""><span>4072</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div >
                                               <el-button class="votebtn" type="primary" size="small">点击投票</el-button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
              </div>
                
          </div>
      </el-row>
</template>

<script>


  export default {
      data (){
         
      
      }
    }


  
</script>

<style>
.main{background-color: #EAF2FF;}
.sreach{width: 100%;margin: 38px 0px;height: 64px;}
.sreach center{height: 100%;}
.sreach center form{width: 25%;height: 100%;position: relative;}
.sreach center form input{width:100%;height: 100%;border-radius: 85px;font-size: 20px;color: #808080;padding-left:34px;border: none;}
.sreach form img{position: absolute;width: 40px;height: 40px;top: 13px;left: 84.58%;}
.content{width:70%;;margin: 0 auto;}
.plate{width:100%;height:1390px;margin-bottom: 38px;}
.plate-left{width: 63%; float: left;}
.plate-left-top{width: 100%;}
.plate-left-bottom{width: 100%;height:270px;margin-top: 19px;display: inline-block;}
.plate-newest,.plate-hottest,.plate-vote,.plate-left-bottom{display: inline-block;border: 1px solid #ccc;border-radius: 2px;background-color: #fff;}
.plate-newest,.plate-hottest{width:48%;height: 1099px;}
.plate-hottest{margin-left: 2.24%;}
.plate-vote{width: 34%;height: 1390px;margin-left: 1.5%;float: left;}
.plate-box{width: 91.97%;margin: 0 auto;margin-top: 30px;}
.plate-header{font-size: 20px;color: #808080;display: flex;justify-content: space-between;border-bottom: 1px solid #ccc;}
.plate-header span{padding-bottom: 12px;}
.items-list{border-bottom: 1px solid #ccc;}
.items{width: 89.77%;margin: 0 auto;margin-top: 26px;margin-bottom: 26px;}
.items-name{display: flex;justify-content: space-between;}
.items-name img{width:64px;height: 64px;float: left;}
.items-name a{color:#383838;font-size: 24px;line-height:64px;font-weight: bolder;}
.items-name p{font-size: 42px;color:#3C7BE3;}
.items-label{display: flex;justify-content: space-between;margin-top: 19px;}
.items-label p span{font-size: 12px;color: #808080;}
.items-label p{float: right;margin-top: 90%;}
.items-left{width: 75.21%;}
ul li {display: inline-block;}
.voteNum a{color: #383838;font-size: 24px;font-weight: bolder;}
.voteNum img{width: 20px;height: 20px;}
.voteNum span{font-size: 20px;color: #808080;line-height:20px;}
.votebtn{margin-top: 50%;}
.newsimg{width: 39%;display: inline-block;float: left;}
.news{width: 53%;height: 160px;display: inline-block;margin: 0 auto;margin-top: 5.74%;}
h5{font-size: 24px;font-weight: normal;text-align: left;}
.news p{text-align: left;font-size: 14px;color: #383838;line-height: 21px;}
.reportText{margin-top: 15px;}
</style>