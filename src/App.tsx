import React from 'react';
import './App.scss';
import UserIcon from './components/basic/UserIcon';
import { UserPreview } from './dto/UserRequests';
import userIcon from './components/basic/UserIcon';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserProfilePage from './components/user/UserProfile';
import store from './store';
import { updateUserCachePreview } from './actions/UserCacheActionCreator';


type AppComponentState = {
  
}

class App extends React.Component<{}, AppComponentState> {

  constructor(props: {}) {
    super(props);
  }

  render() {
    const userPreview: UserPreview = {
      id: 1,
      permissionRank: {color: "#00ff00"},
      username: "Luis D.",
      profilePictureLink: "meme.jpg"
    }
    store.dispatch(updateUserCachePreview(userPreview))
    return(
      <Router>
        <Switch>
          <Route exact path="/">
            <UserIcon preview={userPreview} />
          </Route>
          <Route path="/user/:id" component={UserProfilePage}>
          </Route>
        </Switch>
      </Router>
    )
  }

}

export default App;
