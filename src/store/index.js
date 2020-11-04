import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDetailShow: false,
    currentIssue: {},

    lists: [{
        id: 0,
        title: "todo"
      },
      {
        id: 1,
        title: "doing"
      },
      {
        id: 2,
        title: "done"
      }
    ],
    issues: [{
        id: 0,
        listId: 0,
        title: "login page",
        description: " make log in page",
        dueDate: "2020-10-24",
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
        activities: [{
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
        id: 1,
        listId: 0,
        title: "menu page",
        description: " make menu page",
        dueDate: "2020-10-29",
        checklist: [{
            id: 0,
            title: "layout",
            complete: true
          },
          {
            id: 1,
            title: "function",
            complete: false
          },
          {
            id: 2,
            title: "function2",
            complete: false
          },
        ],
        activities: [{
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
      },
    ]
  },
  mutations: {
    toggleIsDetailShow(state) {
      state.isDetailShow = !state.isDetailShow
    },
    setCurrentIssue(state, payload) {
      state.currentIssue = payload
    },
    fixDate(state, payload) {
      let target = state.issues.find(el => el.id === payload.id)
      target.dueDate = payload.dueDate
    },
    fixDescr(state, payload) {
      let target = state.issues.find(el => el.id === payload.id)
      target.description = payload.descr
    },
    // fixDate, fixDescr...이렇게 하나하나 뮤테이션을 지정하면 한도 끝도 없어질 수 있음
    // 이슈의 변경사항을 한번에 캐치하는 코드를 짠다(아래)
    //다만 이렇게 할 경우 해당되는 부분만 바뀌는 위의 방식(연산량이 적어서 가벼움)과 달리 무겁다. 
    //일장일단이지만 연산량이 많아봤자라 아래 방식을 추천
    editIssue(state, payload) {
      let target = state.issues.find(el => el.id === payload.id)
      Object.assign(target, payload)
    },
    addIssue(state, payload) {
      state.issues.push(payload)
    },
    deleteIssue(state, payload) {
      let targetIndex = state.issues.findIndex((el) => el.id === payload)
      state.issues.splice(targetIndex, 1)
      state.isDetailShow = false
    },
    addList(state, payload) {
      state.lists.push(payload)
    },
    deleteList(state, payload) {
      let targetIndex = state.lists.findIndex((el) => el.id === payload)
      state.lists.splice(targetIndex, 1)
    }

  },
  actions: {},
  modules: {}
});