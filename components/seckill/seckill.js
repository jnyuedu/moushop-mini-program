// components/seckill/seckill.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    options:{
      type:String,
      value:""
    },
    MT: {
      type: Number,
      value: 0
    },
    MB: {
      type: Number,
      value: 0
    },
    data: {
      type: Array,
      value: [
        {
          nav:{
            time:"12:00",
            state:"已结束"
          },
          inner: [
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              subTitle: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "0.02",
              oldPrice: "99.00",
              people: 999,
              time: 12
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              subTitle: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "0.03",
              oldPrice: "99.00",
              people: 999,
              time: 12
            }
          ]
        },
        {
          nav: {
            time: "12:00",
            state: "秒杀中"
          },
          inner: [
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              subTitle: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "0.01",
              oldPrice: "99.00",
              people: 999,
              time: 12
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              subTitle: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "0.01",
              oldPrice: "99.00",
              people: 999,
              time: 12
            }
          ]
        },
        {
          nav: {
            time: "12:00",
            state: "限时秒杀"
          },
          inner: [
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              subTitle: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "0.01",
              oldPrice: "99.00",
              people: 999,
              time: 12
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              subTitle: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "0.01",
              oldPrice: "99.00",
              people: 999,
              time: 12
            }
          ]
        },
        {
          nav: {
            time: "12:00",
            state: "即将开始"
          },
          inner: [
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              subTitle: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "0.01",
              oldPrice: "99.00",
              people: 999,
              time: 12
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              subTitle: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "0.01",
              oldPrice: "99.00",
              people: 999,
              time: 12
            }
          ]
        }
        , {
          nav: {
            time: "12:00",
            state: "即将开始"
          },
          inner: [
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              subTitle: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "0.01",
              oldPrice: "99.00",
              people: 999,
              time: 12
            },
            {
              img: "http://img.hb.aicdn.com/e0471e4561fe4911aeb79caec813fe090f5d4dfa8608-3lYPAu_sq320",
              title: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              subTitle: "VIVO X21全面旗舰手机刘海屏幕智能全网通全面旗舰手机刘海屏幕智能....",
              price: "0.01",
              oldPrice: "99.00",
              people:999,
              time:12
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
    navWidth: "",
    innerWidth: "",
    innerLeft: "",
    now: 0
  },
  attached: function () {
    console.log(this)
    var length = this.data.data.length;
    this.setData({
      navWidth: 180 * length,
      innerWidth: 750 * length
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeItem: function (e) {
      var now = e.target.dataset.id;
      this.setData({
        innerLeft: -750 * now,
        now
      })
    },
  }
})
