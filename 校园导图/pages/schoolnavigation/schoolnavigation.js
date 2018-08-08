var app = getApp() 
Page({
  data: {
    long: "",
    lati: "",
    openBottomPicker: false,
    openPicker: false,
    openLocation:false,
    openSort:false,
    // contentHeight: 0,
    // markers: [{
    //   id:1,
    //   latitude: 34.124734,
    //   longitude: 108.835494,
    //   iconPath: "/imgs/ic_position.png",
    // }
    // ],
    // controls:[
    // ],
    controls: [{
      id: 1,
      iconPath: "/imgs/news.png",
      position: {
        left: 10,
        top: 55 - 50,
        width: 40,
        height: 40
      },
      clickable: true
    },
      {
        id: 2,
        iconPath: "/imgs/warn.png",
        position: {
          left: 10,
          top: 100 - 50,
          width: 40,
          height: 40
        },
        clickable: true
      },
      {
        id: 3,
        iconPath: "/imgs/school.png",
        position: {
          left: 325,
          top: 50 - 50,
          width: 50,
          height: 50
        },
        clickable:false
      },
      {
        id: 4,
        iconPath: "/imgs/wizz.png",
        position: {
          left: 325,
          top: 100 - 50,
          width: 50,
          height: 50
        },
        clickable: false
      },
      ],
    tab: [  
      {
        id: 1,
        title: "地图"
      }, {
        id: 2,
        title: "餐饮"
      }, {
        id: 3,
        title: "住宿"
      }, {
        id: 4,
        title: "出行"
      }, {
        id: 5,
        title: "学习"
      },{
        id: 6,
        title: "校园服务"
      }
    ]
  },
  onLoad: function () {
    var _this = this;
    wx.getSystemInfo(
      {
        success: function (res) {
          var _innerWidth = res.windowWidth
          _this.data.controls.forEach(function (item) {
            item.position.left = (item.position.left / 375) * _innerWidth
            item.position.top = (item.position.top / 375) * _innerWidth
            item.position.width = (item.position.width / 375) * _innerWidth
            item.position.height = (item.position.height / 375) * _innerWidth
          })
          _this.setData(
            {
              controls: _this.data.controls
            }
          )
        }
      }
    )
    this.mapCtx = wx.createMapContext('map')

    var t = {
      currentTarget: {
        dataset: {
          id: 1
        }
      }
    };
    //console.log(t);
    this.Showmarker(t);
  },
  
  Showmarker: function (t) {
        
   var innerMap = [
     {
       id: 101,
       latitude: "34.120857",
       longitude: "108.833662",
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "西安电子科技大学",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     }
   ] 
   var eat = [
    {
      id: 201,
       latitude: 34.128250,
       longitude: 108.837771,
      iconPath: "/imgs/ic_position.png",
      title: "#",
      callout: {
        content: "老综合楼",
        color: "#ffffff",
        fontSize: 14,
        bgColor: "#661AFF",
        borderRadius: 10,
        padding: 5,
        display: "ALWAYS"
      }
    },
    {
      id: 202,
      latitude: 34.127228,
      longitude: 108.839267,
      iconPath: "/imgs/ic_position.png",
      title: "#",
      callout: {
        content: "新综合楼",
        color: "#ffffff",
        fontSize: 14,
        bgColor: "#661AFF",
        borderRadius: 10,
        padding: 5,
        display: "ALWAYS"
      }
    },
    {
      id: 203,
      latitude: 34.126158,
      longitude: 108.838989,
      iconPath: "/imgs/ic_position.png",
      title: "#",
      callout: {
        content: "竹园餐厅",
        color: "#ffffff",
        fontSize: 14,
        bgColor: "#661AFF",
        borderRadius: 10,
        padding: 5,
        display: "ALWAYS"
      }
    },
    {
      id: 204,
      latitude: 34.129133,
      longitude: 108.833812,
      iconPath: "/imgs/ic_position.png",
      title: "#",
      callout: {
        content: "海棠餐厅",
        color: "#ffffff",
        fontSize: 14,
        bgColor: "#661AFF",
        borderRadius: 10,
        padding: 5,
        display: "ALWAYS"
      }
    },
    {
      id: 205,
      latitude: 34.123796,
      longitude: 108.829794,
      iconPath: "/imgs/ic_position.png",
      title: "#",
      callout: {
        content: "丁香餐厅",
        color: "#ffffff",
        fontSize: 14,
        bgColor: "#661AFF",
        borderRadius: 10,
        padding: 5,
        display: "ALWAYS"
      }
    },
   ]    
   var house = [
     {
       id: 301,
       latitude: 34.129906,
       longitude: 108.833333,
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "海棠公寓",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 302,
       latitude: 34.127108,
       longitude: 108.839697,
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "竹园公寓",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 303,
       latitude: 34.122899,
       longitude: 108.828936,
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "丁香公寓",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     }
   ]
   var car = [
     {
       id: 401,
       latitude: 34.120905,
       longitude: 108.840501,
       iconPath: "/imgs/ic_position.png",
       title: "916",
       callout: {
         content: "916",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 402,
       latitude: 34.120704,
       longitude: 108.840502,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "921",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 403,
       latitude: 34.120793,
       longitude: 108.840383,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "173",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }

     },
     {
       id: 404,
       latitude: 34.120802,
       longitude: 108.840740,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "4-08",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 405,
       latitude: 34.120701,
       longitude: 108.840705,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "4-16",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 406,
       latitude: 34.128787,
       longitude: 108.837862,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "4-11",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     }
   ]
   var learn = [
     {
       id: 501,
       latitude: 34.126869,
       longitude: 108.830931,
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "A楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 502,
       latitude: 34.126105,
       longitude: 108.831961,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "B楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 503,
       latitude: 34.125998,
       longitude: 108.833141,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "C楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 504,
       latitude: 34.124915,
       longitude: 108.834064,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "D楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 505,
       latitude: 34.123742,
       longitude: 108.836854,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "E楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 506,
       latitude: 34.124098,
       longitude: 108.837154,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "F楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 507,
       latitude: 34.123778,
       longitude: 108.837841,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "G楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 508,
       latitude: 34.125332,
       longitude: 108.838817,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "信远楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 509,
       latitude: 34.124186,
       longitude: 108.833163,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "图书馆",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     
   ]
   var campus = [
     {
       id: 601,
       latitude: "34.120857",
       longitude: "108.833662",
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "校园服务",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     }
   ] 
   var flags = [innerMap, eat, house, car, learn, campus];
   
   var e = t.currentTarget.dataset.id  //e = id
    this.setData({
      lati: innerMap[0].latitude,
      long: innerMap[0].longitude, 
      markers:flags[e-1],
    });
    console.log("id:"+this.data.markers[0].id);
    console.log(this.data.lati+ ":" + this.data.long);
    this.setData({
      now_tab: e
    });
  },
  onPickBottomClick: function () {
    this.setData({
      openBottomPicker: !this.data.openBottomPicker,
    })
    console.log(this.data.openBottomPicker)
  },
  controltap: function (t) {
    console.log(t)
    if(1 === t.controlId){
      wx.navigateTo({
        url: "news"
      })
    }
        else if (2 === t.controlId) {  
          wx.navigateTo({
            url: "report"
          });
        }
            
  },
  // onPickHeaderClick: function () {
  //   this.setData({
  //     openPicker: !this.data.openPicker,
      
  //   })
  // },
  // onPickLocation:function(){
  //   this.setData({
  //     openLocation:!this.data.openLocation,
  //   })
  // },
  // onPickSort:function(){
  //   this.setData({
  //     openSort:!this.data.openSort,
  //   })
  // },
  // onPickOrder:function(){
  //   this.setData({
  //     openOrder:!this.data.openOrder,
  //   })
  // },
  // onPickRestaurant:function(){
  //   wx.navigateTo({
  //     url: 'store',
  //     success: function(res) {},
  //     fail: function(res) {},
  //     complete: function(res) {},
  //   })
  //   this.setData({
  //     openLocation: !this.data.openLocation,
  //   })
  // },
 onPickRestaurantClass:function(){
   wx.navigateTo({
     url: 'store',
     success: function (res) { },
     fail: function (res) { },
     complete: function (res) { },
   })
   this.setData({
     openSort: !this.data.openSort,
   })
 },
  onPickRestaurantOrder:function(){
    wx.navigateTo({
      url: 'store',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    this.setData({
      openOrder: !this.data.openOrder,
    })
  },
  haitang:function(){
    app.globalData.destination = "108.833812,34.129133",
    console.log(app.globalData);
    wx.navigateTo({
      url: "../Navigation/navigation_walk/navigation",
    })
  },
  dingxiang:function(){
    app.globalData.destination = "108.829794,34.123796",
      console.log(app.globalData);
    wx.navigateTo({
      url: "../Navigation/navigation_walk/navigation",
    })
  },
  zhuyuan:function(){
    app.globalData.destination = "108.838989,34.126158",
    console.log(app.globalData);
    wx.navigateTo({
      url: "../Navigation/navigation_walk/navigation",
    })
  },
  laozong:function(){
    app.globalData.destination = "108.837771,34.128250",
      console.log(app.globalData);
    wx.navigateTo({
      url: "../Navigation/navigation_walk/navigation",
    })
  },
  xinzong:function(){
    app.globalData.destination = "108.839267,34.127228",
      console.log(app.globalData);
    wx.navigateTo({
      url: "../Navigation/navigation_walk/navigation",
    })
  },
  markertap: function (t) {
    if (101 === t.markerId) {
      app.globalData.destination ="108.833662,34.120857",
      console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (201 === t.markerId) {
      app.globalData.destination = "108.837771,34.128250",
      console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (202 === t.markerId) {
      app.globalData.destination = "108.839267,34.127228",
      console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (203 === t.markerId) {
      app.globalData.destination = "108.838989,34.126158",
      console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (204 === t.markerId) {
      app.globalData.destination = "108.833812,34.129133",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (205 === t.markerId) {
      app.globalData.destination ="108.829794,34.123796",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (301 === t.markerId) {
      app.globalData.destination = "108.833333,34.129906",
      console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (302 === t.markerId) {
      app.globalData.destination = "108.839697,34.127108",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (303 === t.markerId) {
      app.globalData.destination = "108.828936,34.122899",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (401 === t.markerId) {
      app.globalData.destination = "108.840501,34.120905",
      console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (402 === t.markerId) {
      app.globalData.destination = "108.840501,34.120905",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (403 === t.markerId) {
      app.globalData.destination = "108.840383,34.120793",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (404 === t.markerId) {
      app.globalData.destination = "108.840740,34.120802",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (405 === t.markerId) {
      app.globalData.destination = "108.840705,34.120701",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (406 === t.markerId) {
      app.globalData.destination = "108.837862,34.128787",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (501 === t.markerId) {
      app.globalData.destination = "108.830931,34.126869",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (502 === t.markerId) {
      app.globalData.destination = "108.831961,34.126105",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (503 === t.markerId) {
      app.globalData.destination = "108.833141,34.125998",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (504 === t.markerId) {
      app.globalData.destination = "108.834064,34.124915",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (505 === t.markerId) {
      app.globalData.destination = "108.836854,34.123742",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (506 === t.markerId) {
      app.globalData.destination = "108.837154,34.124098",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (507 === t.markerId) {
      app.globalData.destination = "108.837841,34.123778",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (508 === t.markerId) {
      app.globalData.destination = "108.838817,34.125332",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (509 === t.markerId) {
      app.globalData.destination = "108.833163,34.124186",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (601 === t.markerId) {
      app.globalData.destination = "108.833662,34.120857",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
  },
  store:function(){
    wx.navigateTo({
      url: "store",
    })
  }
  // wx.openLocation({
  //   latitude: 34.120857,
  //   longitude: 108.833662,
  //   scale: 18,
  //   name: '西安电子科技大学',
  //   address: '西安电子科技大学郭杜镇兴隆乡',
  // })
  

})