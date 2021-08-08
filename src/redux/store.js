import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage:{
      posts:  [
          { id: 1, message: 'How are you ?', likesCount: 12},
          { id: 2, message: 'Its my first post', likesCount: 11},
           ],
           newPostText: 'hey'
    },
   
   dialogsPage: {
      dialogs: [
          { id: 1, name: 'Dima'},
          { id: 2, name: 'Andrey'},
          { id: 3, name: 'Sveta'},
          { id: 4, name: 'Sasha'},
          { id: 5, name: 'Viktor'},
        ],

      messages:  [
          { id: 1, message: 'Hi'},
          { id: 2, message: 'How is your'},
          { id: 3, message: 'Yo'},
          { id: 4, message: 'Yo'},
          { id: 5, message: 'Yo'},
          { id: 6, message: 'Yo'},
        ],
        newMessageBody: ""
   }
},

getState() {
  return this._state
},

_callsubscriber () {
  console.log('state');
},

subscribe(observer) {
  this._callsubscriber = observer;
},
 
dispatch(action) {

  this._state.profilePage = profileReducer(this._state.profilePage, action);
  this._state.dialogsePage = dialogsReducer(this._state.dialogsPage, action);
  this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

  this._callsubscriber(this._state);
}
}


 

  export default store;
