import {useEffect} from 'react';
import './Z-Index.css';
import './home_page/homepage_layout/HomePageContainer.css';
import './home_page/homepage_buttons/ConsoleContainer.css';
import './home_page/homepage_layout/HomePageMediaQuery.css';
import './home_page/homepage_layout/HomePageWindow.css';
import './home_page/homepage_buttons/HomePageWindowButton.css';
import './home_page/homepage_buttons/HomePageMenuButtons.css'
import './home_page/homepage_layout/HomePageTopBar.css'
import preloadImages from './home_page/HomePagePreLoader.js';
import { useWindowLever } from "./home_page/HomePageWindowLever.js";
import { openGitHub, openResume, openJaguarDemo, openRandom } from './home_page/HomePageButtonHandler.js';
import DotImageComponent from "./home_page/HomePageTwinkling.jsx";

function HomePageIndex() {
    console.log("HomePageIndex component rendered");

    useEffect(() => {
        // Call preloadImages with the URLs of background images
        preloadImages([
            '../assets/production_resources/SPACE_BACK.webp',
            '../assets/production_resources/BLACK_HOLE.webp',
            '../assets/production_resources/PLANET_EARTH.webp'
        ]);
    }, []);

    const { isActive, toggleActive } = useWindowLever();

    return (
        <>
            <div className="homepage-background">
                <div className="homepage-blackhole">
                    <div className="homepage-planet-earth"></div>
                </div>

                {/* Bottom buttons */}
                <div className="bottom-buttons-wrapper">
                    <div className="d-pad-container">
                        <button className="d-pad-button" id="up"></button>
                        <button className="d-pad-button" id="left"></button>
                        <button className="d-pad-button" id="down"></button>
                        <button className="d-pad-button" id="right"></button>
                    </div>

                    <div className="a-b-wrapper">
                        <div className="a-button-container">
                            <button className="a-button">A</button>
                        </div>

                        <div className="b-button-container">
                            <button className="b-button">B</button>
                        </div>
                    </div>
                </div>

                <button className={`homepage-menu-button-1 ${isActive ? "homepage-hide-menu-button-1" : ""}`}
                        id="homepageMenuButton1" onClick={openGitHub}>MyGitHub
                </button>
                <button className={`homepage-menu-button-2 ${isActive ? "homepage-hide-menu-button-2" : ""}`}
                        id="homepageMenuButton2" onClick={openResume}>Résumé / Curriculum
                </button>
                <button className={`homepage-menu-button-3 ${isActive ? "homepage-hide-menu-button-3" : ""}`}
                        id="homepageMenuButton3" onClick={openJaguarDemo}>JaguarDemo
                </button>
                <button className={`homepage-menu-button-4 ${isActive ? "homepage-hide-menu-button-4" : ""}`}
                        id="homepageMenuButton4" onClick={openRandom}>World-O-Meter
                </button>


                <div className={`top-border-animation ${isActive ? "homepage-activate-top-bar" : ""}`}
                     id="homePageTopBar">
                </div>


                <div className={`homepage-top-window ${isActive ? "homepage-activate-top-window" : ""}`}
                     id="homePageTopWindow">
                </div>
                <div className={`homepage-bottom-window ${isActive ? "homepage-activate-bottom-window" : ""}`}
                     id="homePageBottomWindow">
                </div>

                <button className="homepage-window-button"
                        onClick={toggleActive}>
                    {isActive ? "Close" : "Open"}
                </button>

                <DotImageComponent/>
            </div>
        </>
    );
}

export default HomePageIndex;
