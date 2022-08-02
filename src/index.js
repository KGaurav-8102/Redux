import configureStore from "./store/configureStore";
import {bugAdded, bugResolved,bugAssignedToUser, getUnresolvedBugs, getBugsByUser } from './store/bugs';
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";
import * as actions from "./store/api";

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

store.dispatch(actions.apiCallBegan({
  url: '/bugs',
  onSuccess: 'bugsReceived',
}));

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

