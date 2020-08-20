import React from "react";
import "./character.scss"

type CharacterProps = {
    name: string
}

export default class Character extends React.Component<CharacterProps, {}> {

    render() {
        return (
            <div className={"character"}>
                {this.props.name}
            </div>
        );
    }

}