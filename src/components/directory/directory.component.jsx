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
                    id: 1
                },
                {
                    title: 'jackets',
                    imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                },
                {
                    title: 'women',
                    imageURL: 'https://i.ibb.co/GCCdy8t/women.png',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'men',
                    imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5
                }
            ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(section => {
                        return <MenuItem key={section.id} title={section.title} imageURL={section.imageURL} size={section.size}/>
                    })
                }
            </div>
        );
    }
}

export default Directory;