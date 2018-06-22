// components/swiper/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrls:{ 
      type:Array,
      value:[
      'http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320',
      'http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320',
      'http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320'
      ]
    },
    indicatorDots: {
      type:Boolean,
      value:true
    },
    autoplay:{
      type:Boolean,
      value:false
    },
    interval: {
      type: Number,
      value: 5000
    },
    duration: {
      type: Number,
      value: 1000
    },
    circular:{
      type:Boolean,
      value:false
    },
    indicatorActiveColor:{
      type:String,
      value: "#ff4400"
    },
    indicatorColor:{
      type:String,
      value: "#ffffff"
    },
    height:{
      type:Number,
      value:200
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
