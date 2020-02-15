// pages/home/home.js
Page({
  data: {
    name: 'Coderzc',
    age: 18,
    students: [{
        id: 110,
        name: 'kobe',
        age: 30
      },
      {
        id: 111,
        name: 'james',
        age: 28
      },
      {
        id: 112,
        name: 'curry',
        age: 32
      },
      {
        id: 113,
        name: 'why',
        age: 18
      }
    ],
    coutent: 0
  },
  addBtnClick() {
    // this.data.coutent++
    this.setData({
      coutent: this.data.coutent + 1
    })
  },
  subBtnClick() {
    // this.data.coutent--
    this.setData({
      coutent: this.data.coutent - 1
    })
  }
})