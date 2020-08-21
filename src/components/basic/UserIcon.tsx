import React from "react";
import {Link} from "react-router-dom";

import { UserPreview } from "../../dto/UserRequests";
import './UserIcon.scss'

function userIcon(userPreview: {preview: UserPreview}) {
    return (
        <div className={"user-icon"}>
            <img src={userPreview.preview.profilePictureLink} alt={"User Pic"} />
            <Link to={"/user/"+userPreview.preview.id} style={{color: userPreview.preview.permissionRank.color}}>{userPreview.preview.username}</Link>
        </div>
    )
}

export default userIcon;