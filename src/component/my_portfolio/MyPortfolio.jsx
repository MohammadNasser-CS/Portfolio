import React from 'react'
import style from "./MyPortfolio.module.css";

export default function MyPortfolio() {
    return (
        <>
            <section className={style.body_home} id="portfolio">
                <div className="container h-100 p-3">
                    <div className="text-center">
                        <h2 className="position-relative text-uppercase fs-1 fw-bolder">My <span className="fw-bolder text-info">Portfolio</span></h2>
                    </div>
                    <p className="text-center text-white  ds-3 py-2">
                        Here is some of my work that I've done in various programming languages.<br />
                        <span className="text-info">Click on one of them to see the <span className="text-warning fw-bolder ">Project Title </span>, <span className="text-warning fw-bolder ">source code</span>, and the <span className="text-warning fw-bolder ">trial version</span>, if there is one.</span>
                    </p>
                    <div className={style.portfolios}>
                        <div className={style.port_item}>
                            <div className="image">
                                <img src={require('./img/react4.png')} className={style.img_style} alt />
                            </div>
                            <div className={style.hover_items}>
                                <h2 className="fs-2 mb-5 text-info-emphasis fw-bolder">Holy Quran Academy</h2>
                                <h3 className="fs-4 mb-2 text-white fw-bolder">Project Source</h3>
                                <div className="d-flex justify-content-center align-items-center">
                                    <a href="https://github.com/MohammadNasser-CS/quran_najah" target="_blank" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-github fs-4 text-white mx-4"} />
                                    </a>
                                    <a href="https://quran-najah.vercel.app/" target="_blank" className={style.icon}>
                                        <i className={style.i_hover + " fa-solid fa-globe fs-4 text-white mx-4"} />
                                    </a>
                                    {/* <a href="#" className={style.icon}>
                                        <i className={style.i_hover+" fab fa-youtube fs-4 text-white mx-4"} />
                                    </a> */}
                                </div>
                            </div>
                        </div>
                        <div className={style.port_item}>
                            <div className="image">
                                <img src={require('./img/flutter1.png')} className={style.img_style} alt />
                            </div>
                            <div className={style.hover_items}>
                                <h2 className="fs-2 mb-5 text-info-emphasis fw-bolder">Quiz App</h2>
                                <h3 className="fs-4 mb-2 text-white fw-bolder">Project Source</h3>
                                <div className="d-flex justify-content-center align-items-center">
                                    <a href="https://github.com/MohammadNasser-CS/quiz_app" target="_blank" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-github fs-4 text-white mx-4"} />
                                    </a>
                                    {/* <a href="#" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-behance fs-4 text-white mx-4"} />
                                    </a>
                                    <a href="#" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-youtube fs-4 text-white mx-4"} />
                                    </a> */}
                                </div>
                            </div>
                        </div>
                        <div className={style.port_item}>
                            <div className="image">
                                <img src={require('./img/html1.jpg')} className={style.img_style} alt />
                            </div>
                            <div className={style.hover_items}>
                                <h3 className="fs-4 mb-5 text-white fw-bolder">Project Source</h3>
                                <div className="d-flex justify-content-center align-items-center">
                                    <a href="#" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-github fs-4 text-white mx-4"} />
                                    </a>
                                    <a href="#" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-behance fs-4 text-white mx-4"} />
                                    </a>
                                    <a href="#" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-youtube fs-4 text-white mx-4"} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={style.port_item}>
                            <div className="image">
                                <img src={require('./img/port4.jpg')} className={style.img_style} alt />
                            </div>
                            <div className={style.hover_items}>
                                <h3 className="fs-4 mb-5 text-white fw-bolder">Project Source</h3>
                                <div className="d-flex justify-content-center align-items-center">
                                    <a href="#" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-github fs-4 text-white mx-4"} />
                                    </a>
                                    <a href="#" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-behance fs-4 text-white mx-4"} />
                                    </a>
                                    <a href="#" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-youtube fs-4 text-white mx-4"} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={style.port_item}>
                            <div className="image">
                                <img src={require('./img/port5.jpg')} className={style.img_style} alt />
                            </div>
                            <div className={style.hover_items}>
                                <h3 className="fs-4 mb-5 text-white fw-bolder">Project Source</h3>
                                <div className="d-flex justify-content-center align-items-center">
                                    <a href="#" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-github fs-4 text-white mx-4"} />
                                    </a>
                                    <a href="#" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-behance fs-4 text-white mx-4"} />
                                    </a>
                                    <a href="#" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-youtube fs-4 text-white mx-4"} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={style.port_item}>
                            <div className="image">
                                <img src={require('./img/port6.jpg')} className={style.img_style} alt />
                            </div>
                            <div className={style.hover_items}>
                                <h3 className="fs-4 mb-5 text-white fw-bolder">Project Source</h3>
                                <div className="d-flex justify-content-center align-items-center">
                                    <a href="#" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-github fs-4 text-white mx-4"} />
                                    </a>
                                    <a href="#" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-behance fs-4 text-white mx-4"} />
                                    </a>
                                    <a href="#" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-youtube fs-4 text-white mx-4"} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={style.port_item}>
                            <div className="image">
                                <img src={require('./img/port7.jpg')} className={style.img_style} alt />
                            </div>
                            <div className={style.hover_items}>
                                <h3 className="fs-4 mb-5 text-white fw-bolder">Project Source</h3>
                                <div className="d-flex justify-content-center align-items-center">
                                    <a href="#" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-github fs-4 text-white mx-4"} />
                                    </a>
                                    <a href="#" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-behance fs-4 text-white mx-4"} />
                                    </a>
                                    <a href="#" className={style.icon}>
                                        <i className={style.i_hover + " fab fa-youtube fs-4 text-white mx-4"} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
