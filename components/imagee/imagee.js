// components/imagee/imagee.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrls:{
      type:Array,
      value: [
        {
          src: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
          height: 200,
          has:1,
          all:2
        },
        {
          src: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
          height: 100,
          has: 1,
          all: 2
        },
        {
          src: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
          height: 100,
          has: 1,
          all: 2
        }
      ]
    },
    MT: {
      type: Number,
      value: 0
    },
    MB: {
      type: Number,
      value: 0
    }
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
