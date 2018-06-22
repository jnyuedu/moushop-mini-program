// components/goodslist/goodslist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    MT:{
      type:Number,
      value:0
    },
    MB: {
      type: Number,
      value: 0
    },
    data:{
      type:Array,
      value: ["全部商品", "精品男装1", "精品男装2", "精品男装3", "精品男装4", "精品男装5"]
    } 
  },

  /**
   * 组件的初始数据
   */
  data: {
    navWidth:"",
    innerWidth:"",
    innerLeft:"",
    now:0
  },
  attached:function(){
    console.log(this)
    var length = this.data.data.length;
    this.setData({
      navWidth:150*length,
      innerWidth:750*length
    })
  },
  ready:function(){
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeItem: function (e) {
      var now = e.target.dataset.id;
      this.setData({
        innerLeft:-750*now,
        now
      })
    },
  }
})
