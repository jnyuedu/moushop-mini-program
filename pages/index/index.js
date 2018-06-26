Page({

  /**
   * 页面的初始数据
   */
  data: {
    textData: [{}, {}, {}, {}],
    imageData: [1, 2],
    dataArr: "",
    scrollTop:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var dataArr = [{ type: "swipper" }, { type: "seckill" }, { type: "column" }, { type: "collage" }, { type: "collageTwo" }, { type: "seckill"}, { type: "imagee" }, { type: "goodslist" }];
    // dataArr.forEach(function(item){
    //   if(item.type=="seckill"||item.type=="goodslist"){
    //     item.fix = false;
    //   }
    // })
    this.setData({
      dataArr
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var seckills = [];
    var goodslists = [];
    wx.createSelectorQuery().selectAll('.seckill').boundingClientRect().exec(function (res) {
      res[0].forEach(function(item){
        var obj = { top: item.top, height: item.height }
        seckills.push(obj)
      })
    })
    wx.createSelectorQuery().selectAll('.goodslist').boundingClientRect().exec(function (res) {
      res[0].forEach(function (item) {
        var obj = { top: item.top, height: item.height }
        goodslists.push(obj)
      })
    })
    var that = this;
    setTimeout(function(){
      console.log(444,goodslists,seckills)
      var data = that.data.dataArr;
      var index = 0;
      var index2 = 0;
      console.log(data)
      data.forEach(function(item){
        if(item.type=="seckill"){
          item.top = seckills[index].top;
          item.height = seckills[index].height;
          index++;
        } else if (item.type == "goodslist"){
          item.top = goodslists[index2].top;
          item.height = goodslists[index2].height;
          index2++;
        }
      })
      that.setData({
        dataArr:data
      })
    },300)
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
  onPageScroll:function(e){
    this.setData({
      scrollTop: e.scrollTop
    })
  }
})