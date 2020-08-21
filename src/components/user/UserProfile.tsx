import React from "react";
import "./UserProfile.scss"
import { useParams } from "react-router-dom";
import { UserPreview, UserProfileData } from "../../dto/UserRequests";
import Spinner from 'react-bootstrap/Spinner'
import { connect } from "react-redux";


type UserProfilePageState = {
    userId: number,
}

type UserProfilePageProps = {
    match: any,
    userCache: { userPreviewCache: any } 
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
        const user: UserPreview = this.props.userCache.userPreviewCache[this.state.userId];
        if(user) {
            return (
                <div>
                    User loaded from cache
                </div>
            )
        } else {
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