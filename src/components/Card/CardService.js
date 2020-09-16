import React from 'react';

var CardServiceFile = (props) => {
    return(
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
                <div class="icon"><i class="bx bx-file"></i></div>
                <h4><a href={props.href}>{props.title}</a></h4>
                <p>{props.contents}</p>
            </div>
        </div>
    );
}

var CardServiceDribbble = (props) => {
    return(
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
                <div class="icon"><i class="bx bxl-dribbble"></i></div>
                <h4><a href={props.href}>{props.title}</a></h4>
                <p>{props.contents}</p>
            </div>
        </div>
    );
}

var CardServiceTachometer = (props) => {
    return (
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box">
            <div class="icon"><i class="bx bx-tachometer"></i></div>
            <h4><a href={props.href}>{props.title}</a></h4>
            <p>{props.contents}</p>
            </div>
        </div>
    );
}

var CardServiceLayer = (props) => {
    return (
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box">
            <div class="icon"><i class="bx bx-layer"></i></div>
            <h4><a href={props}>{props.title}</a></h4>
            <p>{props.contents}</p>
            </div>
        </div>
    );
}


module.exports = {
    CardServiceFile,
    CardServiceDribbble,
    CardServiceTachometer,
    CardServiceLayer
};