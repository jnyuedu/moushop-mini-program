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
      value: [
        // "全部商品", "精品男装1", "精品男装2", "精品男装3", "精品男装4", "精品男装5"
        {
          nav: {
            title:"全部商品"
          },
          inner: [
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            }
          ]
        },
        {
          nav: {
            title: "精品男装1"
          },
          inner: [
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            }
          ]
        },
        {
          nav: {
            title: "精品男装2"
          },
          inner: [
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            }
          ]
        },
        {
          nav: {
            title: "精品男装3"
          },
          inner: [
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            }
          ]
        }
        , {
          nav: {
            title: "精品男装4"
          },
          inner: [
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            }
          ]
        },
        {
          nav: {
            title: "精品男装5"
          },
          inner: [
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "99.00",
              nub: 999
            }
          ]
        }
      ]
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
    // this.queryMultipleNodes()
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
  },
  queryMultipleNodes: function () {
    var query = wx.createSelectorQuery().in(this)
    query.select('.goodslist-item').boundingClientRect(function (res) {
      res.top // 这个组件内 #the-id 节点的上边界坐标
    }).exec(function(we){
      console.log(we)
    })
  }
})
