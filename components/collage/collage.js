// components/collage/collage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    MT: {
      type: Number,
      value: 0
    },
    MB: {
      type: Number,
      value: 0
    },
    collage:{
      type: Array,
      value:[
        {
          img:"http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
          title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
          price:"999.00",
          endTime:123412,
          pin:[
            {
              price:99,
              all:18,
              need:10
            },
            {
              price: 89,
              all: 18,
              need: 10
            },
            {
              price: 59,
              all: 18,
              need: 10
            }
          ]
        },
        {
          img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
          title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
          price: "99.23",
          endTime: 123445,
          pin: [
            {
              price: 99,
              all: 18,
              need: 10
            },
            {
              price: 89,
              all: 18,
              need: 10
            },
            {
              price: 59,
              all: 18,
              need: 10
            }
          ]
        }
      ]
    }
  },
  attached: function () {
    console.log(this)
    
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
