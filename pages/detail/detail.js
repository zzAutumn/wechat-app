Page({

  /**
   * 页面的初始数据
   */
  data: {
    mid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   * options参数 为路由的queryString对象
   */
  onLoad: function (options) {
    this.setData({
      mid: options.id
    });

    wx.request({
      url: 'https://forbid.csmc-cloud.com/main/weekends',
      method: 'POST',
      data: {
        date: '2018-10-17'
      },
      success(res) {
        console.log(res)
      },
      fail() {},
      complete() {

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

 
})