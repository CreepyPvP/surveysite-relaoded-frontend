import React from "react";
import "./UserProfile.scss"
import { useParams } from "react-router-dom";
import { UserPreview, UserProfileData } from "../../dto/UserRequests";
import Spinner from 'react-bootstrap/Spinner'
import { connect } from "react-redux";
import { loadToCache } from "../../util/CacheManager";


type UserProfilePageState = {
    userId: number,
}

type UserProfilePageProps = {
    match: any,
    userCache: { cache: any } 
}


class UserProfilePage extends React.Component<UserProfilePageProps, UserProfilePageState> {

    constructor(props: any) {
        super(props);
        const { match: { params } } = this.props;
        this.state = {userId: params.id}
    }

    componentDidMount() {
        //
    }


    render() {
        const user: UserPreview = this.props.userCache.cache[this.state.userId];
        const userToLoad: UserPreview = {
            id: 1,
            permissionRank: {color: "#00ff00"},
            profilePictureLink: "meme.jpg",
            username: "Luis D."
        }
        if(user) {
            return (
                <div>
                    User loaded from cache
                </div>
            )
        } else {
            loadToCache("USER_PREVIEW", userToLoad)
            return (
                <div className={"loading"}>
                    <Spinner animation="border" variant="primary" />
                </div>
            )
        }
    }

}

function mapStateToProps(state: any) {
    return { userCache: state.userCache }
}

export default connect(mapStateToProps)(UserProfilePage);