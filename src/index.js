import configureStore from "./store/configureStore";
import {bugAdded, bugResolved,bugAssignedToUser, getUnresolvedBugs, getBugsByUser } from './store/bugs';
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";
//import * as actions from "./store/api";
import { loadBugs, addBug, resolveBug, assignBugToUser } from "./store/bugs";

const store = configureStore();

store.subscribe(() => {
    console.log('Store Changed!');
});


store.dispatch(userAdded({name: "User 1"}));
  store.dispatch(userAdded({name: "User 2"}));
  store.dispatch(projectAdded({ name: "Project 1"}));
  store.dispatch(bugAdded({description: "Bug 1"}));
  store.dispatch(bugAdded({description: "Bug 2"}));
  store.dispatch(bugAdded({description: "Bug 3"}));
  store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1}));
  store.dispatch(bugResolved({ id: 1 }));

store.dispatch((dispatch, getState) => {
  dispatch({ type: 'bugsReceived', bugs:[1, 2, 3]})
  console.log(getState())
});

store.dispatch({
  type: "error",
  payload: {message: "An error Occured"}
})

//Uilayer

//store.dispatch(addBug({ description: "a"}));

store.dispatch(loadBugs());

setTimeout(() => store.dispatch(assignBugToUser(1, 4)), 2000);


//store.dispatch(actions.apiCallBegan());

/* store.dispatch({
  type: 'apiCallBegan',
  payload: {
      url: '/bugs',
      onSuccess: 'bugsReceived',
      onError: 'apiRequestFailed'
  }
}) */

const bugs = getBugsByUser(2) (store.getState());
console.log(bugs);

