// components/column/column.js
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
    textColor:{
      type:String,
      value:"#555555"
    },
    column:{
      type: Array,
      value: [
        [
          {
            img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
            text: "栏目名称1"
          },
          {
            img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
            text: "栏目名称2"
          },
          {
            img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
            text: "栏目名称3"
          },
          {
            img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
            text: "栏目名称4"
          },
          {
            img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
            text: "栏目名称5"
          }
        ],
        [
          {
            img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
            text: "栏目名称5"
          },
          {
            img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
            text: "栏目名称6"
          },
          {
            img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
            text: "栏目名称7"
          },
          {
            img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
            text: "栏目名称8"
          }
        ]
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    nub:[5,4]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
