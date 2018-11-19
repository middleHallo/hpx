// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    business: [
      {
        "avatar": "/images/icon/icon1.jpg",
        "storename": "澳乐礼品悉尼直邮实体店",
        "wxh": "delle0929",
        "products": [
          "cloud://hpx-product-edb294.6870-hpx-product-edb294/products/1/pro1.jpg",
          "cloud://hpx-product-edb294.6870-hpx-product-edb294/products/1/pro2.jpg",
          "cloud://hpx-product-edb294.6870-hpx-product-edb294/products/1/pro3.jpg",
          "cloud://hpx-product-edb294.6870-hpx-product-edb294/products/1/pro4.jpg"
        ]
      },
      {
        "avatar": "/images/icon/icon2.jpg",
        "storename": "小莹家日本代购",
        "wxh": "doria0110",
        "products": [
          "cloud://hpx-product-edb294.6870-hpx-product-edb294/products/2/pro1.jpg",
          "cloud://hpx-product-edb294.6870-hpx-product-edb294/products/2/pro2.jpg",
          "cloud://hpx-product-edb294.6870-hpx-product-edb294/products/2/pro3.jpg",
          "cloud://hpx-product-edb294.6870-hpx-product-edb294/products/2/pro4.jpg",
          "cloud://hpx-product-edb294.6870-hpx-product-edb294/products/2/pro5.jpg"
        ]
      },
      {
        "avatar": "/images/icon/icon3.jpg",
        "storename": "小薇的杂货铺",
        "wxh": "shaxiaowei0408",
        "products": [
          "cloud://hpx-product-edb294.6870-hpx-product-edb294/products/3/pro1.jpg",
          "cloud://hpx-product-edb294.6870-hpx-product-edb294/products/3/pro2.jpg",
          "cloud://hpx-product-edb294.6870-hpx-product-edb294/products/3/pro3.jpg",
          "cloud://hpx-product-edb294.6870-hpx-product-edb294/products/3/pro4.jpg",
          "cloud://hpx-product-edb294.6870-hpx-product-edb294/products/3/pro5.jpg"
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let idx = parseInt(options.idx)
   
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