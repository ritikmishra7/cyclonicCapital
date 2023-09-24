import React, { useState, useEffect } from 'react'
import logo from '../../assets/images/logo.jpg'
import menu from '../../assets/images/menu.svg'
import close from '../../assets/images/close.svg'
import blackholevideo from '../../assets/videos/blackhole.webm'
import solarsystem from '../../assets/videos/solar-system.webm'
import oppositePlanet from '../../assets/videos/opposite-planet-revolving.webm'
import calender from '../../assets/images/calender.svg'
import web from '../../assets/images/web.svg'
import hotAirBallon from '../../assets/images/hot-air-ballon.svg'
import community from '../../assets/videos/community.webm'
import roadMapIcon from '../../assets/images/roadmapIcon.svg'
import roadmap1 from '../../assets/images/roadmap1.svg'
import roadmap2 from '../../assets/images/roadmap2.svg'
import roadmap3 from '../../assets/images/roadmap3.svg'
import profitable from '../../assets/images/profitable.png'
import './Home.css'

function Home() {

    const [scrolled, setScrolled] = useState(false);

    function toggleNavbarBackground() {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    // Set up the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleNavbarBackground);
        return () => {
            window.removeEventListener('scroll', toggleNavbarBackground);
        };
    }, []);

    // Set the initial navbar background
    useEffect(() => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }, []);

    function playVideoWhenInView(entries) {
        entries.forEach(entry => {
            const video = entry?.target;
            if (entry.isIntersecting) {
                video?.play();
            } else {
                video?.pause();
            }
        });
    }

    useEffect(() => {
        const videos = document.querySelectorAll('.video-file');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.45,
        };

        videos.forEach(video => {
            const observer = new IntersectionObserver(playVideoWhenInView, observerOptions);
            observer.observe(video);
        });
    }, []);


    return (
        <div className="image-wrapper">
            <nav id="navbar" className={scrolled ? 'scrolled-navbar' : 'fixed-navbar'}>
                <div className="logo-section">
                    <img src={logo} alt="logo" className="logo" />
                    <p className="logo-text">CYCLONIC CAPITAL</p>
                    <div className="links-section">
                        <a href="#about">About</a>
                        <a href="#rewards">Rewards</a>
                        <a href="#roadmap">Roadmap</a>
                        <a href="#community">Community</a>
                    </div>
                </div>
                <div className="socials-section">
                    <a href="#socialss">
                        <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 1200 1227"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                    <a href="#socialss">
                        <svg
                            width="45px"
                            height="45px"
                            viewBox="-20 0 190 190"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="telegram-logo"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M76.33 132.14L62.5 143.73L58.59 144.26L49.84 114.11L19.06 104L113.82 67.8799L118.29 67.9799L103.36 149.19L76.33 132.14ZM100.03 83.1399L56.61 109.17L61.61 130.5L62.98 130.19L68.2 113.73L102.9 83.4799L100.03 83.1399Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                    <a href="#socialss">
                        <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="medium-logo"
                        >
                            <path
                                d="M13 12C13 15.3137 10.3137 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C10.3137 6 13 8.68629 13 12Z"
                                fill="currentColor"
                            />
                            <path
                                d="M23 12C23 14.7614 22.5523 17 22 17C21.4477 17 21 14.7614 21 12C21 9.23858 21.4477 7 22 7C22.5523 7 23 9.23858 23 12Z"
                                fill="currentColor"
                            />
                            <path
                                d="M17 18C18.6569 18 20 15.3137 20 12C20 8.68629 18.6569 6 17 6C15.3431 6 14 8.68629 14 12C14 15.3137 15.3431 18 17 18Z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                    <button type="menu" className="hamburger-btn" id="hamburger-btn">
                        <img
                            src={menu}
                            alt="hamburger-menu"
                            id="hamburger-menu"
                        />
                    </button>
                    <button type="menu" className="close-btn" id="close-btn">
                        <img src={close} alt="close-menu" id="close-menu" />
                    </button>
                </div>
                <div className="hamburger-container" id="hamburger-container">
                    <ul className="hamburger-uls">
                        <li>
                            <a href="#about" className="hamburger-link">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#rewards" className="hamburger-link">
                                Rewards
                            </a>
                        </li>
                        <li>
                            <a href="#roadmap" className="hamburger-link">
                                Roadmap
                            </a>
                        </li>
                        <li>
                            <a href="#community" className="hamburger-link">
                                Community
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className="main-section">
                <div className="top-section">
                    <div className="hero-section">
                        <p className="hero-text">An Open and Lucrative DEX for Everyone.</p>
                        <a href="/dashboard/invest" className="hero-btn-a">
                            <button className="hero-btn" tabIndex={-1}>
                                Launch App (Testnet)
                            </button>
                        </a>
                    </div>
                    <div className="outer-layer">
                        <div className="sparkle-star blackhole-star-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                data-name="Layer 1"
                                viewBox="0 0 100 125"
                                x="0px"
                                y="0px"
                                fill="currentColor"
                            >
                                <path d="M57.91,50.67,70,50l-12.09-.67a7.69,7.69,0,0,1-7.24-7.24L50,30l-.67,12.09a7.69,7.69,0,0,1-7.24,7.24L30,50l12.09.67a7.69,7.69,0,0,1,7.24,7.24L50,70l.67-12.09A7.69,7.69,0,0,1,57.91,50.67Z" />
                            </svg>
                        </div>
                        <div className="sparkle-star blackhole-star-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                data-name="Layer 1"
                                viewBox="0 0 100 125"
                                x="0px"
                                y="0px"
                                fill="currentColor"
                            >
                                <path d="M57.91,50.67,70,50l-12.09-.67a7.69,7.69,0,0,1-7.24-7.24L50,30l-.67,12.09a7.69,7.69,0,0,1-7.24,7.24L30,50l12.09.67a7.69,7.69,0,0,1,7.24,7.24L50,70l.67-12.09A7.69,7.69,0,0,1,57.91,50.67Z" />
                            </svg>
                        </div>
                        <div className="sparkle-star blackhole-star-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                data-name="Layer 1"
                                viewBox="0 0 100 125"
                                x="0px"
                                y="0px"
                                fill="currentColor"
                            >
                                <path d="M57.91,50.67,70,50l-12.09-.67a7.69,7.69,0,0,1-7.24-7.24L50,30l-.67,12.09a7.69,7.69,0,0,1-7.24,7.24L30,50l12.09.67a7.69,7.69,0,0,1,7.24,7.24L50,70l.67-12.09A7.69,7.69,0,0,1,57.91,50.67Z" />
                            </svg>
                        </div>
                        <div className="video-section blackhole-video-wrapper">
                            <video
                                preload="auto"
                                controlslist="nodownload"
                                id="blackhole-video"
                                className="video-file"
                                muted
                            >
                                <source type="video/webm" src={blackholevideo} />
                            </video>
                        </div>
                    </div>
                </div>
                <div id="about" />
                <div className="cards-section">
                    <div className="card card-1">
                        <p className="card-heading">
                            Achieve Greater and Consistent Returns with{" "}
                            <span>Dual Investment.</span>
                        </p>
                        <p className="card-text">
                            Cyclonic Capital presents a decentralized Dual Investment system,
                            simplifying liquidity provision and making it lucrative for everyone.
                            Naturally, it offers better APR compared to CEX, irrespective of the
                            market trend.
                        </p>
                        <div className="card-btn-section">
                            <a href="#nothing">
                                <button className="card-btn" tabIndex={-1}>
                                    Invest Now
                                </button>
                            </a>
                            <div className="learn-more">
                                <a href="#nothing">Learn More</a>
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="css-1mf4y6e"
                                >
                                    <path
                                        d="M12 12.6667H4C3.63333 12.6667 3.33333 12.3667 3.33333 12V4C3.33333 3.63333 3.63333 3.33333 4 3.33333H7.33333C7.7 3.33333 8 3.03333 8 2.66667C8 2.3 7.7 2 7.33333 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V8.66667C14 8.3 13.7 8 13.3333 8C12.9667 8 12.6667 8.3 12.6667 8.66667V12C12.6667 12.3667 12.3667 12.6667 12 12.6667ZM9.33333 2.66667C9.33333 3.03333 9.63333 3.33333 10 3.33333H11.7267L5.64 9.42C5.38 9.68 5.38 10.1 5.64 10.36C5.9 10.62 6.32 10.62 6.58 10.36L12.6667 4.27333V6C12.6667 6.36667 12.9667 6.66667 13.3333 6.66667C13.7 6.66667 14 6.36667 14 6V2.66667C14 2.3 13.7 2 13.3333 2H10C9.63333 2 9.33333 2.3 9.33333 2.66667Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="video-section planet-video-wrapper">
                        <video
                            preload="auto"
                            controlslist="nodownload"
                            id="planet-video"
                            className="video-file"
                            muted
                        >
                            <source
                                type="video/webm"
                                src={oppositePlanet}
                            />
                        </video>
                    </div>
                    <div className="card card-2">
                        <p className="card-heading">Boost Fee Income with Adaptive AMM.</p>
                        <p className="card-text">
                            Cyclonic Captial , through its pioneering dynamic trading fee
                            structure, efficiently prevents MEV attacks and bot-driven price
                            tampering. This not only boosts the protocol's earnings but also
                            secures increased fee income for its users.
                        </p>
                        <div className="card-btn-section">
                            <a href="#nothing">
                                <button className="card-btn" tabIndex={-1}>
                                    Trade Now
                                </button>
                            </a>
                            <div className="learn-more">
                                <a href="#nothing">Learn More</a>
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="css-1mf4y6e"
                                >
                                    <path
                                        d="M12 12.6667H4C3.63333 12.6667 3.33333 12.3667 3.33333 12V4C3.33333 3.63333 3.63333 3.33333 4 3.33333H7.33333C7.7 3.33333 8 3.03333 8 2.66667C8 2.3 7.7 2 7.33333 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V8.66667C14 8.3 13.7 8 13.3333 8C12.9667 8 12.6667 8.3 12.6667 8.66667V12C12.6667 12.3667 12.3667 12.6667 12 12.6667ZM9.33333 2.66667C9.33333 3.03333 9.63333 3.33333 10 3.33333H11.7267L5.64 9.42C5.38 9.68 5.38 10.1 5.64 10.36C5.9 10.62 6.32 10.62 6.58 10.36L12.6667 4.27333V6C12.6667 6.36667 12.9667 6.66667 13.3333 6.66667C13.7 6.66667 14 6.36667 14 6V2.66667C14 2.3 13.7 2 13.3333 2H10C9.63333 2 9.33333 2.3 9.33333 2.66667Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="video-section galaxy-video-wrapper">
                        <video
                            preload="auto"
                            controlslist="nodownload"
                            id="galaxy-video"
                            className="video-file"
                            muted
                        >
                            <source type="video/webm" src={solarsystem} />
                        </video>
                    </div>
                    <div className="card card-3">
                        <p className="card-heading">
                            Recommend your friends and reap greater benefits collectively through{" "}
                            <span>Membership NFT.</span>
                        </p>
                        <p className="card-text">
                            Participate in the Referral Program to enhance your returns and secure
                            special bonuses in Dual Investment. Every member has the chance to
                            bring in up to three pals – so select your partners with care!
                        </p>
                        <div className="card-btn-section">
                            <a href="#nothing">
                                <button className="card-btn" tabIndex={-1}>
                                    Join Now
                                </button>
                            </a>
                            <div className="learn-more">
                                <a href="#nothing">Learn More</a>
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="css-1mf4y6e"
                                >
                                    <path
                                        d="M12 12.6667H4C3.63333 12.6667 3.33333 12.3667 3.33333 12V4C3.33333 3.63333 3.63333 3.33333 4 3.33333H7.33333C7.7 3.33333 8 3.03333 8 2.66667C8 2.3 7.7 2 7.33333 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V8.66667C14 8.3 13.7 8 13.3333 8C12.9667 8 12.6667 8.3 12.6667 8.66667V12C12.6667 12.3667 12.3667 12.6667 12 12.6667ZM9.33333 2.66667C9.33333 3.03333 9.63333 3.33333 10 3.33333H11.7267L5.64 9.42C5.38 9.68 5.38 10.1 5.64 10.36C5.9 10.62 6.32 10.62 6.58 10.36L12.6667 4.27333V6C12.6667 6.36667 12.9667 6.66667 13.3333 6.66667C13.7 6.66667 14 6.36667 14 6V2.66667C14 2.3 13.7 2 13.3333 2H10C9.63333 2 9.33333 2.3 9.33333 2.66667Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="sparkle-star nft-star-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 100 125"
                            x="0px"
                            y="0px"
                            fill="currentColor"
                        >
                            <path d="M57.91,50.67,70,50l-12.09-.67a7.69,7.69,0,0,1-7.24-7.24L50,30l-.67,12.09a7.69,7.69,0,0,1-7.24,7.24L30,50l12.09.67a7.69,7.69,0,0,1,7.24,7.24L50,70l.67-12.09A7.69,7.69,0,0,1,57.91,50.67Z" />
                        </svg>
                    </div>
                    <div className="sparkle-star nft-star-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 100 125"
                            x="0px"
                            y="0px"
                            fill="currentColor"
                        >
                            <path d="M57.91,50.67,70,50l-12.09-.67a7.69,7.69,0,0,1-7.24-7.24L50,30l-.67,12.09a7.69,7.69,0,0,1-7.24,7.24L30,50l12.09.67a7.69,7.69,0,0,1,7.24,7.24L50,70l.67-12.09A7.69,7.69,0,0,1,57.91,50.67Z" />
                        </svg>
                    </div>
                    <div className="sparkle-star nft-star-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 100 125"
                            x="0px"
                            y="0px"
                            fill="currentColor"
                        >
                            <path d="M57.91,50.67,70,50l-12.09-.67a7.69,7.69,0,0,1-7.24-7.24L50,30l-.67,12.09a7.69,7.69,0,0,1-7.24,7.24L30,50l12.09.67a7.69,7.69,0,0,1,7.24,7.24L50,70l.67-12.09A7.69,7.69,0,0,1,57.91,50.67Z" />
                        </svg>
                    </div>
                </div>
                <div id="rewards" />
                <div className="join-section">
                    <div className="calender-section calender-section-img-wrapper">
                        <img
                            src={calender}
                            alt="calender"
                            className="calender-section-img"
                        />
                    </div>
                    <h4 className="join-now-heading">
                        Get on board before we skyrocket to new heights!
                    </h4>
                    <p className="join-now-text">
                        Ensure you don't overlook the thrilling testnet activities of the
                        Cyclonic Loyalty Program.
                    </p>
                </div>
                <div className="loyalty-section">
                    <div className="loyalty-section-header">
                        <div className="left-part">
                            <div className="nft">
                                <img src={web} alt="web" />
                                <p>NFT Membership Badge.</p>
                            </div>
                            <div className="airdrop">
                                <img src={hotAirBallon} alt="airdrop" />
                                <p>Advance Airdrop.</p>
                            </div>
                        </div>
                        <div className="right-part">
                            <div className="learn-more">
                                <a href="#nothing">Cyclonic Loyalty Program</a>
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="css-1mf4y6e"
                                >
                                    <path
                                        d="M12 12.6667H4C3.63333 12.6667 3.33333 12.3667 3.33333 12V4C3.33333 3.63333 3.63333 3.33333 4 3.33333H7.33333C7.7 3.33333 8 3.03333 8 2.66667C8 2.3 7.7 2 7.33333 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V8.66667C14 8.3 13.7 8 13.3333 8C12.9667 8 12.6667 8.3 12.6667 8.66667V12C12.6667 12.3667 12.3667 12.6667 12 12.6667ZM9.33333 2.66667C9.33333 3.03333 9.63333 3.33333 10 3.33333H11.7267L5.64 9.42C5.38 9.68 5.38 10.1 5.64 10.36C5.9 10.62 6.32 10.62 6.58 10.36L12.6667 4.27333V6C12.6667 6.36667 12.9667 6.66667 13.3333 6.66667C13.7 6.66667 14 6.36667 14 6V2.66667C14 2.3 13.7 2 13.3333 2H10C9.63333 2 9.33333 2.3 9.33333 2.66667Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p className="loyalty-section-p">
                        By completing easy tasks, amass a collection of Cyclonic NFTs and
                        loyalty points, paving the way for upcoming airdrops and special perks
                        in the referral program.
                    </p>
                </div>
                <div id="roadmap" />
                <div className="roadmap-section">
                    <div className="roadmap-header">
                        <img src={roadMapIcon} alt="roadmap" />
                        <h4>Roadmap</h4>
                    </div>
                    <div className="roadmap-phases">
                        <div className="alpha-phase">
                            <div className="phases-header">
                                <h4>Initial Phase</h4>
                                <p>2023 Q3</p>
                            </div>
                            <div className="roadmap-img">
                                <img src={roadmap1} alt="roadmap1" />
                            </div>
                            <div className="list-items">
                                <ol>
                                    <li>Initial version launch.</li>
                                    <li>Homepage.</li>
                                    <li>Preview events.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="alpha-phase">
                            <div className="phases-header">
                                <h4>Testing Phase</h4>
                                <p>Now</p>
                            </div>
                            <div className="roadmap-img">
                                <img src={roadmap2} alt="roadmap1" />
                            </div>
                            <div className="list-items">
                                <ol>
                                    <li>Testing version lauch.</li>
                                    <li>Trade Contest.</li>
                                    <li>Events for the community.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="alpha-phase">
                            <div className="phases-header">
                                <h4>Initiation Phase</h4>
                                <p>2023 Q4</p>
                            </div>
                            <div className="roadmap-img">
                                <img src={roadmap3} alt="roadmap1" />
                            </div>
                            <div className="list-items">
                                <ol>
                                    <li>Formal version launch</li>
                                    <li>Product showcase.</li>
                                    <li>Collaboration occasions.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="community" />
                <div className="community-section">
                    <div className="sparkle-star community-star-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 100 125"
                            x="0px"
                            y="0px"
                            fill="currentColor"
                        >
                            <path d="M57.91,50.67,70,50l-12.09-.67a7.69,7.69,0,0,1-7.24-7.24L50,30l-.67,12.09a7.69,7.69,0,0,1-7.24,7.24L30,50l12.09.67a7.69,7.69,0,0,1,7.24,7.24L50,70l.67-12.09A7.69,7.69,0,0,1,57.91,50.67Z" />
                        </svg>
                    </div>
                    <div className="sparkle-star community-star-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 100 125"
                            x="0px"
                            y="0px"
                            fill="currentColor"
                        >
                            <path d="M57.91,50.67,70,50l-12.09-.67a7.69,7.69,0,0,1-7.24-7.24L50,30l-.67,12.09a7.69,7.69,0,0,1-7.24,7.24L30,50l12.09.67a7.69,7.69,0,0,1,7.24,7.24L50,70l.67-12.09A7.69,7.69,0,0,1,57.91,50.67Z" />
                        </svg>
                    </div>
                    <div className="sparkle-star community-star-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 100 125"
                            x="0px"
                            y="0px"
                            fill="currentColor"
                        >
                            <path d="M57.91,50.67,70,50l-12.09-.67a7.69,7.69,0,0,1-7.24-7.24L50,30l-.67,12.09a7.69,7.69,0,0,1-7.24,7.24L30,50l12.09.67a7.69,7.69,0,0,1,7.24,7.24L50,70l.67-12.09A7.69,7.69,0,0,1,57.91,50.67Z" />
                        </svg>
                    </div>
                    <div className="community-heading">
                        <svg
                            width={100}
                            height={100}
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_10416_88168)">
                                <g filter="url(#filter0_f_10416_88168)">
                                    <circle cx={50} cy={50} r={30} fill="#F5AC6C" fillOpacity="0.2" />
                                </g>
                                <path
                                    d="M36.3616 59.7433V57.0681C36.3616 56.3719 36.5412 55.7541 36.9004 55.2147C37.2597 54.6754 37.755 54.2604 38.3865 53.9696C39.771 53.3407 41.0745 52.8666 42.297 52.5472C43.5195 52.2279 44.8758 52.0682 46.3658 52.0682C47.8558 52.0682 49.2084 52.2279 50.4235 52.5472C51.6386 52.8666 52.9412 53.3407 54.3314 53.9696C54.9571 54.2604 55.4519 54.6754 55.8157 55.2147C56.1796 55.7541 56.3615 56.3719 56.3615 57.0681V59.7433H36.3616ZM58.7033 59.7433V57.0391C58.7033 55.9565 58.4477 55.0187 57.9365 54.2257C57.4253 53.4327 56.7413 52.7734 55.8846 52.2477C56.9712 52.4049 58.0034 52.6279 58.9811 52.9165C59.9589 53.2051 60.8083 53.5355 61.5293 53.9077C62.1792 54.266 62.6932 54.7133 63.0712 55.2497C63.4493 55.7861 63.6383 56.3826 63.6383 57.0391V59.7433H58.7033ZM46.3658 49.5758C45.0796 49.5758 44.0067 49.1459 43.1469 48.2862C42.2872 47.4264 41.8573 46.3535 41.8573 45.0673C41.8573 43.7812 42.2872 42.7096 43.1469 41.8527C44.0067 40.9958 45.0796 40.5674 46.3658 40.5674C47.652 40.5674 48.7235 40.9958 49.5804 41.8527C50.4373 42.7096 50.8657 43.7812 50.8657 45.0673C50.8657 46.3535 50.4373 47.4264 49.5804 48.2862C48.7235 49.1459 47.652 49.5758 46.3658 49.5758ZM57.2246 45.0673C57.2246 46.3535 56.7962 47.4264 55.9393 48.2862C55.0824 49.1459 54.0098 49.5758 52.7216 49.5758C52.5704 49.5758 52.3988 49.5633 52.2067 49.5382C52.0147 49.5131 51.8435 49.4755 51.6931 49.4254C52.1859 48.8685 52.5615 48.219 52.8199 47.477C53.0784 46.7351 53.2076 45.9328 53.2076 45.07C53.2076 44.2073 53.0741 43.4186 52.8072 42.7041C52.5402 41.9896 52.1689 41.3246 51.6931 40.7092C51.8515 40.6648 52.0227 40.63 52.2067 40.605C52.3908 40.5799 52.562 40.5674 52.7204 40.5674C54.0094 40.5674 55.0824 40.9958 55.9393 41.8527C56.7962 42.7096 57.2246 43.7812 57.2246 45.0673ZM38.0367 58.0681H54.6863V57.0681C54.6863 56.7382 54.5956 56.4331 54.4141 56.1527C54.2326 55.8724 53.9649 55.6436 53.6111 55.4664C52.3153 54.8436 51.1193 54.4008 50.023 54.1378C48.9268 53.8748 47.7077 53.7433 46.3658 53.7433C45.0239 53.7433 43.8025 53.8748 42.7017 54.1378C41.6008 54.4008 40.4025 54.8436 39.1068 55.4664C38.753 55.6436 38.4861 55.8724 38.3064 56.1527C38.1266 56.4331 38.0367 56.7382 38.0367 57.0681V58.0681ZM46.3615 47.9006C47.1609 47.9006 47.8323 47.629 48.3756 47.0857C48.9189 46.5424 49.1906 45.871 49.1906 45.0716C49.1906 44.2722 48.9189 43.6008 48.3756 43.0575C47.8323 42.5142 47.1609 42.2425 46.3615 42.2425C45.5621 42.2425 44.8907 42.5142 44.3474 43.0575C43.8041 43.6008 43.5324 44.2722 43.5324 45.0716C43.5324 45.871 43.8041 46.5424 44.3474 47.0857C44.8907 47.629 45.5621 47.9006 46.3615 47.9006Z"
                                    fill="#EBC5A4"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_f_10416_88168"
                                    x={0}
                                    y={0}
                                    width={100}
                                    height={100}
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feGaussianBlur
                                        stdDeviation={10}
                                        result="effect1_foregroundBlur_10416_88168"
                                    />
                                </filter>
                                <clipPath id="clip0_10416_88168">
                                    <rect width={100} height={100} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Meet Cyclonic Communities</p>
                    </div>
                    <div className="community-socials">
                        <div className="a-community">
                            <a href="#nothing">
                                <div className="community-left-part">
                                    <svg
                                        width={30}
                                        height={30}
                                        viewBox="0 0 1200 1227"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <p>Join us on Twitter</p>
                                </div>
                                <div className="arrow">
                                    <svg
                                        width={30}
                                        height={30}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="css-197e9wf"
                                    >
                                        <path
                                            d="M12.6488 7.29763H5.00258L8.34308 3.86969C8.61005 3.59574 8.61005 3.14617 8.34308 2.87221C8.07611 2.59826 7.64486 2.59826 7.37789 2.87221L2.86685 7.50134C2.59988 7.7753 2.59988 8.21784 2.86685 8.49179L7.37105 13.1279C7.63802 13.4019 8.06927 13.4019 8.33623 13.1279C8.6032 12.854 8.6032 12.4115 8.33623 12.1375L5.00258 8.70253H12.6488C13.0253 8.70253 13.3333 8.38643 13.3333 8.00008C13.3333 7.61373 13.0253 7.29763 12.6488 7.29763Z"
                                            fill="currentColor"
                                            fillOpacity="0.75"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div className="a-community">
                            <a href="#nothing">
                                <div className="community-left-part">
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={30}
                                        height={30}
                                    >
                                        <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
                                    </svg>
                                    <p>Connect with us on Telegram</p>
                                </div>
                                <div className="arrow">
                                    <svg
                                        width={30}
                                        height={30}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="css-197e9wf"
                                    >
                                        <path
                                            d="M12.6488 7.29763H5.00258L8.34308 3.86969C8.61005 3.59574 8.61005 3.14617 8.34308 2.87221C8.07611 2.59826 7.64486 2.59826 7.37789 2.87221L2.86685 7.50134C2.59988 7.7753 2.59988 8.21784 2.86685 8.49179L7.37105 13.1279C7.63802 13.4019 8.06927 13.4019 8.33623 13.1279C8.6032 12.854 8.6032 12.4115 8.33623 12.1375L5.00258 8.70253H12.6488C13.0253 8.70253 13.3333 8.38643 13.3333 8.00008C13.3333 7.61373 13.0253 7.29763 12.6488 7.29763Z"
                                            fill="currentColor"
                                            fillOpacity="0.75"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div className="a-community">
                            <a href="#nothing">
                                <div className="community-left-part">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={30}
                                        height={30}
                                    >
                                        <path
                                            d="M13 12C13 15.3137 10.3137 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C10.3137 6 13 8.68629 13 12Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M23 12C23 14.7614 22.5523 17 22 17C21.4477 17 21 14.7614 21 12C21 9.23858 21.4477 7 22 7C22.5523 7 23 9.23858 23 12Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M17 18C18.6569 18 20 15.3137 20 12C20 8.68629 18.6569 6 17 6C15.3431 6 14 8.68629 14 12C14 15.3137 15.3431 18 17 18Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <p>Explore our blog on Medium</p>
                                </div>
                                <div className="arrow">
                                    <svg
                                        width={30}
                                        height={30}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="css-197e9wf"
                                    >
                                        <path
                                            d="M12.6488 7.29763H5.00258L8.34308 3.86969C8.61005 3.59574 8.61005 3.14617 8.34308 2.87221C8.07611 2.59826 7.64486 2.59826 7.37789 2.87221L2.86685 7.50134C2.59988 7.7753 2.59988 8.21784 2.86685 8.49179L7.37105 13.1279C7.63802 13.4019 8.06927 13.4019 8.33623 13.1279C8.6032 12.854 8.6032 12.4115 8.33623 12.1375L5.00258 8.70253H12.6488C13.0253 8.70253 13.3333 8.38643 13.3333 8.00008C13.3333 7.61373 13.0253 7.29763 12.6488 7.29763Z"
                                            fill="currentColor"
                                            fillOpacity="0.75"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="video-section community-video">
                    <video
                        preload="auto"
                        controlslist="nodownload"
                        id="community-video"
                        className="video-file"
                        muted
                    >
                        <source type="video/webm" src={community} />
                    </video>
                </div>
            </main>
            <footer>
                <div className="profitable-section">
                    <h4 className="profitable-section-heading">
                        Lucrative Liquidity Provision. Accessible to All.
                    </h4>
                    <p>
                        We level the playing field in liquidity for individual investors.
                        Everyone can seamlessly achieve returns similar to those of big market
                        players and high-end investors
                    </p>
                    <a href="/dashboard/invest" className="hero-btn-a">
                        <button className="hero-btn" tabIndex={-1}>
                            Launch App (Testnet)
                        </button>
                    </a>
                    <div className="learn-more">
                        <a href="#socialss">Learn More</a>
                        <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="css-1mf4y6e"
                        >
                            <path
                                d="M12 12.6667H4C3.63333 12.6667 3.33333 12.3667 3.33333 12V4C3.33333 3.63333 3.63333 3.33333 4 3.33333H7.33333C7.7 3.33333 8 3.03333 8 2.66667C8 2.3 7.7 2 7.33333 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V8.66667C14 8.3 13.7 8 13.3333 8C12.9667 8 12.6667 8.3 12.6667 8.66667V12C12.6667 12.3667 12.3667 12.6667 12 12.6667ZM9.33333 2.66667C9.33333 3.03333 9.63333 3.33333 10 3.33333H11.7267L5.64 9.42C5.38 9.68 5.38 10.1 5.64 10.36C5.9 10.62 6.32 10.62 6.58 10.36L12.6667 4.27333V6C12.6667 6.36667 12.9667 6.66667 13.3333 6.66667C13.7 6.66667 14 6.36667 14 6V2.66667C14 2.3 13.7 2 13.3333 2H10C9.63333 2 9.33333 2.3 9.33333 2.66667Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <img
                        src={profitable}
                        alt="earth"
                        className="earth-img"
                    />
                </div>
                <div className="final-footer">
                    <div className="footer-wrapper">
                        <div className="logo-section">
                            <img src={logo} alt="logo" className="logo" />
                            <p className="logo-text">CYCLONIC CAPITAL</p>
                        </div>
                        <div className="socials-section footer-socials">
                            <a href="#socialss">
                                <svg
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 1200 1227"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                            <a href="#socialss">
                                <svg
                                    width="45px"
                                    height="45px"
                                    viewBox="-20 0 190 190"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="telegram-logo"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M76.33 132.14L62.5 143.73L58.59 144.26L49.84 114.11L19.06 104L113.82 67.8799L118.29 67.9799L103.36 149.19L76.33 132.14ZM100.03 83.1399L56.61 109.17L61.61 130.5L62.98 130.19L68.2 113.73L102.9 83.4799L100.03 83.1399Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                            <a href="#socialss">
                                <svg
                                    width="30px"
                                    height="30px"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="medium-logo"
                                >
                                    <path
                                        d="M13 12C13 15.3137 10.3137 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C10.3137 6 13 8.68629 13 12Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M23 12C23 14.7614 22.5523 17 22 17C21.4477 17 21 14.7614 21 12C21 9.23858 21.4477 7 22 7C22.5523 7 23 9.23858 23 12Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M17 18C18.6569 18 20 15.3137 20 12C20 8.68629 18.6569 6 17 6C15.3431 6 14 8.68629 14 12C14 15.3137 15.3431 18 17 18Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home