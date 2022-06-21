
Page({

  /**
   * 页面的初始数据
   */
  data: {
      username: '',
      password: '',
      isShow: false,
      passwordType: "password",
      eyeImage: '/pic/eye_close.png',
  },
  // 获取输入账号 
  usernameInput: function (e) {
      this.setData({
          username: e.detail.value
      })
  },

  // 获取输入密码 
  passwordInput: function (e) {
      this.setData({
          password: e.detail.value
      })
  },

  // 可见与不可见图片选择
  eyeImageswitch(e) {
      if (this.data.isShow) {
          this.setData({
              isShow: false,
              passwordType: 'password',
              eyeImage: '/pic/eye_close.png',
              password: this.data.password
          })
      } else {
          this.setData({
              isShow: true,
              passwordType: 'text',
              eyeImage: '/pic/eye_open.png',
              password: this.data.password
          })
      }
  },

  // 表单提交验证
  formSubmit(e) {
      var that = this
      if (that.data.username == '' || that.data.password == '') {
          wx.showToast({
              title: '用户名或密码为空',
              icon: 'none',
              duration: 2000
          })
      } else {
          wx.redirectTo({
              url: "../bill/bill?username=" + that.data.username
            })
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})