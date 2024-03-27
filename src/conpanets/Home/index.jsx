import React from 'react';
import on from "../../image/10%.jpeg"
import onbesh from "../../image/15%.jpeg"
import eluu from "../../image/50%.jpeg"



const Home = () => {
    return (
        <div>
            <div id="header">
                <div className="container">
                    <div className="header">
                        <img style={{
                            width: "300px",
                            borderRadius: "10px",
                            border:"3px solid black"
                        }} src={onbesh} alt="" />
                        <img style={{
                            width: "400px",
                            padding:"90px 100px",
                            borderRadius: "10px",
                            border:"3px solid black"
                        }} src={on} alt="" />
                        <img style={{
                            width: "300px",
                            borderRadius: "10px",
                            padding:"110px 90px",

                            border:"3px solid black"
                        }} src={eluu} alt="" />


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;