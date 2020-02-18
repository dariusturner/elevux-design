import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import Fade from '@material-ui/core/Fade';

export default function Content(props) {
        const contentStyle = {
            position: "fixed",
            color: "#fff"
        }
        return (
            <div id="content">
            <Zoom in={true} timeout={2000}>
            <h1 className="title" style={contentStyle}>{props.title}</h1>
            </Zoom>
            <Fade in={true} timeout={2000}>
            <p className="caption" style={contentStyle}>{props.caption}</p>
            </Fade>
            <img src={props.img} alt={props.imgName}/>
            </div>
        )
}