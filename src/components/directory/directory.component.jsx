import React, { Component } from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkURL: 'hats'
                },
                {
                    title: 'jackets',
                    imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkURL: ''
                },
                {
                    title: 'sneakers',
                    imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkURL: ''
                },
                {
                    title: 'women',
                    imageURL: 'https://i.ibb.co/GCCdy8t/women.png',
                    size: 'large',
                    id: 4,
                    linkURL: ''
                },
                {
                    title: 'men',
                    imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkURL: ''
                }
            ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => {
                        return <MenuItem key={id} {...otherSectionProps}/>
                    })
                }
            </div>
        );
    }
}

export default Directory;