Page({

  /**
   * 页面的初始数据
   */
  data: {
    thisWeekMovie: {
      name: "A Dog",
      comment: "Comment: Dogs are our best friends!",
      imagePath: "/images/dog.jpeg",
      isHighlyRecommended: true,
    },
    weeklyMovieList: [
      {
        name: "A Dog",
        comment: "Comment: Dogs are our best friends!",
        imagePath: "/images/dog.jpeg",
        isHighlyRecommended: true,
        id: 1
      },
      {
        name: "A Dog",
        comment: "Comment: Dogs are our best friends! Dogs are our best friends!",
        imagePath: "/images/dog.jpeg",
        isHighlyRecommended: true,
        id: 2
      },
      {
        name: "A Dog",
        comment: "Comment: Dogs are our best friends!",
        imagePath: "/images/dog.jpeg",
        isHighlyRecommended: false,
        id: 3
      }
    ],
    count: 123,
    score: 9,
    currentIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   * 对内部状态数据进行更新
   */
  onLoad: function (options) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
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

  showCount(event) {
    this.setData({
      count: 888,
      "weeklyMovieList[2].name": "A Cat?"
    })
  },

  /**
   * 返回本周按钮
   */
  returnBtn(e) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },

  /**
   * 点击跳转到详情页
   */
  goToDetail(e) {
    const movieId = e.currentTarget.dataset.movieId,
      url = `/pages/detail/detail?id=${movieId}`;
    wx.navigateTo({
      url: url,
    })
  }
})