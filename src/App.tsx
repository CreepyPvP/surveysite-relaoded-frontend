import React from 'react';
import './App.scss';
import UserIcon from './components/basic/UserIcon';
import { UserPreview } from './dto/UserRequests';


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
      profilePictureLink: "logo192.png"
    }
    return(
      	<UserIcon preview={userPreview} />
    )
  }

}

export default App;
