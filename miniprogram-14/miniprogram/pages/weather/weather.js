
Page({ 
    data: { 
        w_province:'',
        w_city:'',
        w_temp:'',
        w_wea:'',
        w_windpow:'',
        w_time:'',
        adcode:''
    }, 
    onLoad:function(success){
      wx.getLocation({
        type: 'wgs84',
        altitude: true,
        success: (result) => {
         
          wx.request({
            url: 'https://api.map.baidu.com/reverse_geocoding/v3',
            data: {
              ak:'dANGzzG9o0bPBFqWV3zEWtvC3G9eNFc9',
              output:'json',
              coordtype:'wgs84ll',
              location:`${result.latitude},${result.longitude}`
              // location: res.latitude + ',' + res.longitude  
            },
            success: (cityResult) => {
              console.log(cityResult);
              this.setData({
                adcode:cityResult.data.result.addressComponent.adcode
              })
              let city = cityResult.data.result.addressComponent.city;
              city = city.substring(0,city.length - 1);
              console.log('城市:',city);
        this.getweather();
            },
            fail: () => {},
            complete: () => {}
          });
        },
        fail: () => {
        },
        complete: () => {}
      })
     },  
  
   getweather:function(){
      var that = this;

      wx.request({

        url: 'https://restapi.amap.com/v3/weather/weatherInfo',
        data:{
          'key': '32332af2dd7fd5268eb556842786352f',//填入自己申请到的Key
          'city': this.data.adcode,
        },
        header:{
          'content-type': 'application/json'
        },
        success:function(res){
          console.log(res.data.lives[0]);
          that.setData({
            w_province:res.data.lives[0].province,
            w_city:res.data.lives[0].city,
            w_temp:res.data.lives[0].temperature,
            w_wea:res.data.lives[0].weather,
            w_time:res.data.lives[0].reporttime,
            w_windpow:res.data.lives[0].windpower

          })
        }
      })
   },

   
   
})
