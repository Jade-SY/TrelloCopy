import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDetailShow: false,
    lists: [{
        id: 0,
        title: "todo"
      },
      {
        id: 1,
        title: "doing"
      }
    ],
    issues: [{
        id: 0,
        listId: 0,
        title: "login page",
        description: " make log in page",
        dueDate: "",
        checklist: [{
            id: 0,
            title: "layout",
            complete: true
          },
          {
            id: 1,
            title: "function",
            complete: false
          }
        ],
        activity: [{
            id: 0,
            imgSrc: "https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png",
            name: "nickname",
            text: "hi my name is nick",
            createdAt: "2020-10-27T08:09:34.435Z"
          },
          {
            id: 1,
            imgSrc: "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/UVBJZL3RXAB36BDSHVM3MW2WNY.jpg",
            name: "yourNickname",
            text: "hi my name is you",
            createdAt: "2020-10-27T08:05:34.435Z"
          }
        ]
      },
      {
        id: 0,
        listId: 0,
        title: "login page",
        description: " make log in page",
        dueDate: "",
        checklist: [{
            id: 0,
            title: "layout",
            complete: true
          },
          {
            id: 1,
            title: "function",
            complete: false
          }
        ],
        activity: [{
            id: 0,
            imgSrc: "https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png",
            name: "nickname",
            text: "hi my name is nick",
            createdAt: "2020-10-25T08:09:34.435Z"
          },
          {
            id: 1,
            imgSrc: "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/UVBJZL3RXAB36BDSHVM3MW2WNY.jpg",
            name: "yourNickname",
            text: "hi my name is you",
            createdAt: "2020-10-27T08:05:34.435Z"
          }
        ]
      }
    ]
  },
  mutations: {
    toggleIsDetailShow(state) {
      state.isDetailShow = !state.isDetailShow
    }
  },
  actions: {},
  modules: {}
});