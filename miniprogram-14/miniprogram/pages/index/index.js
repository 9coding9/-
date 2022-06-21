const app = getApp()

//获取时间
var timestamp =Date.parse(new Date());
//返回当前时间毫秒数
timestamp = timestamp / 1000;//获取当前时间
var n = timestamp *1000;
var date = new Date(n);
/*年*/var Y = date.getFullYear();
/*月*/ var M = (date.getMonth()+ 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
/*日*/var D = date.getDate()< 10 ? '0' + date.getDate() :date.getDate();
/*时*/var h =date.getHours();
/*分*/var m =date.getMinutes();
/*秒*/var s =date.getSeconds();
 

 let that=this;
 const db=wx.cloud.database().collection("to_do_list");
Page({ 
  data:{
logs:'',
hiddenmodalput:true,
info:'',
to_do_list:[]
  },
 onLoad: function () {
    this.setData({
      logs: Y + "-" + M + "-" + D,
    }),
    this.search_db()
  },
  //模拟弹窗
  modalinput:function(){
    this.setData({
     hiddenmodalput: !this.data.hiddenmodalput
    })
},
//取消按钮
cancel: function(){
this.setData({
hiddenmodalput: true
});
},
//获取input的值
getValue:function(e){
console.log(e.detail),
this.setData({
  info:e.detail.value
})
},
//数据库添加数据
cloud_add:function(){
  db.add({
    data:{
      value:this.data.info,
      time:this.data.logs
    }
    ,success(res){
    console.log("提交成功",res)
  },fail(err){

    console.log("提交失败",err)
  }
  })
},
//确认
confirm: function(){
this.setData({
  hiddenmodalput: true
 }),
 this.cloud_add()
},
//查询数据库数据
search_db:function(){
  let that = this
db.get({
  
  success(res){
    console.log("查询成功",res)
    that.setData({
      to_do_list:res.data
    })
  },
  fail(err){
    console.log("查询失败",err)
  }
})
}
})
