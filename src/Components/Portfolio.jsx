import React, { useState } from "react";
import gd from "../assets/gd.png";
import wd from "../assets/WD.png";
import SSG from "../assets/SSG.png";
import HireBG from "../assets/HireBG.jpg";
import "./Portfoli.css";

const stats = [
    {
        id: 1,
        name: " ",
        value: "JavaScript",
        logo: SSG,
        data: "fade-up-right",
    },
    {
        id: 2,
        name: " ",
        value: "ReactJS",
        logo: wd,
        data: "fade-up-right",
    },
    {
        id: 3,
        name: " ",
        value: "JavaScript",
        data: "fade-up-right",
    },
    {
        id: 4,
        name: " ",
        value: "ReactJS ",
        data: "fade-up-right",
    },
    {
        id: 5,
        name: " ",
        value: "JavaScript",
        data: "fade-up-right",
    },
    {
        id: 6,
        name: " ",
        value: "ReactJS",
        data: "fade-up-right",
    },
];

function Portfolio() {
    const [filteredItems, setFilteredItems] = useState(stats);

    const handleFilterClick = (value) => {
        const items = value === "all" ? stats : stats.filter((item) => item.value === value);
        setFilteredItems(items);
    };

    return (
        <div id="portfolio" className="portfolio-main">
            <div className="Portfolio">
                <p
                    data-aos="fade-up"
                    className="text-center mb-2"
                    style={{ fontSize: "30px" }}
                >
                    <span className="bg-gradient-to-tr from-[#ff4694] to-[#776fff] text-blue px-2">
                        PORTFOLIO
                    </span>
                </p>
                <h1 data-aos="fade-up" className="text-center">
                    Some of my most recent projects
                </h1>

                <div className="project">
                    <div className="projectGroup py-24 sm:py-10 rounded-xl">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">

                            <div className="filter-buttons flex flex-wrap gap-4 mb-6">
                                <button onClick={() => handleFilterClick("all")}>All</button>
                                <button onClick={() => handleFilterClick("JavaScript")}>JavaScript</button>
                                <button onClick={() => handleFilterClick("ReactJS")}>ReactJS</button>
                                <hr className="w-full mt-4" />
                            </div>

                            <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 text-center">
                                {filteredItems.map((item) => (
                                    <div key={item.id} className="flex justify-center">
                                        <img
                                            className="project-img"
                                            src={item.logo}
                                            alt={item.value}
                                            style={{ height: '200px', width: '200px', objectFit: 'contain' }}
                                        />
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            <div className="HireBG">
                <div className="content">
                    <h1>Interested in working with me?</h1>
                    <a href="#contact"><button id="btn">HIRE ME</button></a>
                </div>
            </div>


            {/* <div className="Hirebtn">
 
                </div> */}
        </div>
    );
}

export default Portfolio;
