import React from "react";
import './HomeAd.css';
import Slideshow1 from "./Slideshow1";


function HomeAd() {
    return (
        <div className="ad">
            <Slideshow1 />
            {/* เมนูของAdmin */}
            <h1 className="headad">WELCOME</h1> {/* ใส่ชื่อAdmin ต่อท้าย */}
            <p className="p"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Today, there are many stories being discussed online on various platforms.
                        Twitter is also one of the most popular platforms where stories are discussed through hashtags, resulting in trending trends based on the most discussed topics.
                        For example, there are topics about Mae Fah Luang University as well, such as #ทีมมฟล</p>
        </div>
    );
}

export default HomeAd;