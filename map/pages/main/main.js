// pages/main/main.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:0,
    longitude:0,
    avatar_src:'/images/avatar/牛.png',
    userInfo: {},
    isRoute:false,
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取当前位置（经纬度）
    var self = this
    // this.setData({
    //   isRoute:false,
    // })
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        // const latitude = res.latitude
        // const longitude = res.longitude
        
        self.setData({
          'latitude': res.latitude,
          'longitude': res.longitude
        })
      
      }
    })
    
    
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

  },
  // 点击查找按钮
  tapSearch:function(e){

  },
  // 点击路线按钮
  tapRoute:function(e){
    // if(!this.isRoute){
    //   this.setData({
    //     isRoute: true,
    //   })
    // }else{
    //   this.setData({
    //     isRoute: false,
    //   })
    // }
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          name: "当前位置",
          scale: 28
        })
      }
    })
    
  }
})