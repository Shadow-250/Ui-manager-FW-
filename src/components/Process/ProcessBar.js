import React from 'react';

var ProcessBar = (props) => {
    return (
        <div class="progress">
            <span class="skill">CSS <i class="val">{props.processName}</i></span>
            <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow={props.value} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    );
}

export default ProcessBar;