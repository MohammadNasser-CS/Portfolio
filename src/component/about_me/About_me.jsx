import React from 'react'
import style from "./About_me.module.css";
export default function AboutMe() {
    return (
        <>
            <section className={style.body_home + " header h-100"}>
                <div className="container">
                    <div class="text-center p-3">
                        <h2 className="position-relative text-uppercase fs-1 fw-bolder">About <span className="fw-bolder text-info">me</span></h2>
                    </div>
                    <div className={style.about_container}>
                        <div className="pe-5 text-start w-100">
                            <h4 className="fs-2 lh-lg  text-uppercase text-white fw-bolder w-75">Information About me</h4>
                            <p className="p-1 lh-lg text-white-50 fw-medium ">
                                I have a bachelor's degree in computer science, and I learned web development,
                                I have an accredited certificate from the academy where I learned.
                                I am also now learning mobile phone development with Flutter,
                                and I am now increasing my experience and skills in it.<br /> <br />
                                I see myself as a person who loves learning and discovering everything new,
                                and I strive to increase my experiences and skills in the world of software development.
                            </p>
                        </div>
                        <div className={style.right_about}>
                            <div className={style.about_item}>
                                <div className="d-flex flex-column p-5">
                                    <p className="fs-1 fw-bolder text-info">2</p>
                                    <p className=" text-uppercase fs-4">Projects <br /> Completed</p>
                                </div>
                            </div>
                            <div className={style.about_item}>
                                <div className="d-flex flex-column p-5">
                                    <p className="fs-1 fw-bolder text-info">3+</p>
                                    <p className=" text-uppercase fs-4">Years of <br /> experience</p>
                                </div>
                            </div>
                            {/* <div className={style.about_item}>
                                <div className="abt-text p-5">
                                    <p className="fs-1 fw-bolder text-info">300+</p>
                                    <p className="p-auto text-uppercase fs-4">Happy <br /> Clients</p>
                                </div>
                            </div>
                            <div className={style.about_item}>
                                <div className="abt-text p-5">
                                    <p className="fs-1 fw-bolder text-info">400+</p>
                                    <p className="p-auto text-uppercase fs-4">Customer <br /> reviews</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="pb-5 w-100">
                        <h4 className={style.stat_title + " position-relative text-uppercase fs-2 text-center py-3 text-white fw-bolder"}>My Skills</h4>
                        <div className={style.progress_bars}>
                            <div className="d-flex flex-column justify-content-start w-75">
                                <p className="text-uppercase fw-bold text-white me-auto">C/C++</p>
                                <div className="d-flex align-items-center justify-content-start">
                                    <p className="text-white-50 fw-medium m-auto">88%</p>
                                    <div className="progress position-relative ms-1 h-25 w-100 bg-white col-12">
                                        <span className={style.c_style} />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-start w-75">
                                <p className="text-uppercase fw-bold text-white me-auto">Java</p>
                                <div className="d-flex align-items-center justify-content-start">
                                    <p className="text-white-50 fw-medium m-auto">60%</p>
                                    <div className="progress position-relative ms-1 h-25 w-100 bg-white col-12">
                                        <span className={style.java_style} />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-start w-75">
                                <p className="text-uppercase fw-bold text-white me-auto">Dart</p>
                                <div className="d-flex align-items-center justify-content-start">
                                    <p className="text-white-50 fw-medium m-auto">80%</p>
                                    <div className="progress position-relative ms-1 h-25 w-100 bg-white col-12">
                                        <span className={style.dart_style} />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-start w-75">
                                <p className="text-uppercase fw-bold text-white me-auto">html5</p>
                                <div className="d-flex align-items-center justify-content-start">
                                    <p className="text-white-50 fw-medium m-auto">100%</p>
                                    <div className="progress position-relative ms-1 h-25 w-100 bg-white col-12">
                                        <span className={style.html_style} />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-start w-75">
                                <p className="text-uppercase fw-bold text-white me-auto">css</p>
                                <div className="d-flex align-items-center justify-content-start">
                                    <p className="text-white-50 fw-medium m-auto">90%</p>
                                    <div className="progress position-relative ms-1 h-25 w-70 bg-white col-12">
                                        <span className={style.css_style} />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-start w-75">
                                <p className="text-uppercase fw-bold text-white me-auto">javascript</p>
                                <div className="d-flex align-items-center justify-content-start">
                                    <p className="text-white-50 fw-medium m-auto">95%</p>
                                    <div className="progress position-relative ms-1 h-25 w-70 bg-white col-12">
                                        <span className={style.js_style} />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-start w-75">
                                <p className="text-uppercase fw-bold text-white me-auto">ReactJS</p>
                                <div className="d-flex align-items-center justify-content-start">
                                    <p className="text-white-50 fw-medium m-auto">80%</p>
                                    <div className="progress position-relative ms-1 h-25 w-70 bg-white col-12">
                                        <span className={style.react_style} />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-start w-75">
                                <p className="text-uppercase fw-bold text-white me-auto">Flutter</p>
                                <div className="d-flex align-items-center justify-content-start">
                                    <p className="text-white-50 fw-medium m-auto">70%</p>
                                    <div className="progress position-relative ms-1 h-25 w-70 bg-white col-12">
                                        <span className={style.flutter_style} />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-start w-75">
                                <p className="text-uppercase fw-bold text-white me-auto">Python</p>
                                <div className="d-flex align-items-center justify-content-start">
                                    <p className="text-white-50 fw-medium m-auto">65%</p>
                                    <div className="progress position-relative ms-1 h-25 w-70 bg-white col-12">
                                        <span className={style.python_style} />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-start w-75">
                                <p className="text-uppercase fw-bold text-white me-auto">Android</p>
                                <div className="d-flex align-items-center justify-content-start">
                                    <p className="text-white-50 fw-medium m-auto">55%</p>
                                    <div className="progress position-relative ms-1 h-25 w-100 bg-white col-12">
                                        <span className={style.android_style} />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-start w-75">
                                <p className="text-uppercase fw-bold text-white me-auto">Git/GitHub</p>
                                <div className="d-flex align-items-center justify-content-start">
                                    <p className="text-white-50 fw-medium m-auto">72%</p>
                                    <div className="progress position-relative ms-1 h-25 w-100 bg-white col-12">
                                        <span className={style.git_style} />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-start w-75">
                                <p className="text-uppercase fw-bold text-white me-auto">Sql Database</p>
                                <div className="d-flex align-items-center justify-content-start">
                                    <p className="text-white-50 fw-medium m-auto">63%</p>
                                    <div className="progress position-relative ms-1 h-25 w-100 bg-white col-12">
                                        <span className={style.sql_style} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className={style.stat_title + " text-uppercase fs-2 text-center py-3 position-relative text-white fw-bolder"}>My Timeline</h4>
                    <div className={style.timeline}>
                        <div className="ps-2 text-start position-relative border-start border-primary">
                            <div className={style.tl_icon + " bg-primary"}>
                                <i className="fas fa-briefcase fs-3" />
                            </div>
                            <div className='ms-5'>
                                <p className={style.tl_duration}>2020 - present</p>
                                <h5 className=" text-uppercase fs-4 fw-bolder text-white">computer science<span className="fs-5 fw-bold text-white-50"> - An-Najah National University</span></h5>
                                <p className=" text-white-50">
                                    I only have practical training and a graduation project left
                                    to obtain my university degree in computer science.
                                </p>
                            </div>
                        </div>
                        <div className="ps-2 text-start position-relative border-start border-primary">
                            <div className={style.tl_icon + " bg-primary"}>
                                <i className="fas fa-briefcase fs-3" />
                            </div>
                            <div className='ms-5'>
                                <p className={style.tl_duration}>2022 - 2023</p>
                                <h5 className=" text-uppercase fs-4 fw-bolder text-white">Front-end (React)<span className="fs-5 fw-bold text-white-50"> - Knowledge Academy</span></h5>
                                <p className=" text-white-50">
                                    I Successfully Completed Training in
                                    Front-end with React Js within 100 hours of training.
                                </p>
                            </div>
                        </div>
                        <div className="ps-2 text-start position-relative border-start border-primary">
                            <div className={style.tl_icon + " bg-primary"}>
                                <i className="fas fa-briefcase fs-3" />
                            </div>
                            <div className='ms-5'>
                                <p className={style.tl_duration}>2023 - present</p>
                                <h5 className=" text-uppercase fs-4 fw-bolder text-white">Front-end (Flutter)<span className="fs-5 fw-bold text-white-50"> - Knowledge Academy</span></h5>
                                <p className=" text-white-50">
                                    I'm still learning this field,
                                    but I don't have much left,
                                    maybe less than two months to graduate from this course.
                                </p>
                            </div>
                        </div>
                        <div className="ps-2 text-start position-relative border-start border-primary">
                            <div className={style.tl_icon + " bg-primary"}>
                                <i className="fas fa-briefcase fs-3" />
                            </div>
                            <div className='ms-5'>
                                <p className={style.tl_duration}>2022 - present</p>
                                <h5 className=" text-uppercase fs-4 fw-bolder text-white">Problem Solving (HackerRank)<span className="fs-5 fw-bold text-white-50"> - Self learning</span></h5>
                                <p className=" text-white-50">
                                    In an effort to improve my coding skills,
                                    I’m solving problems on HackerRank from time to time,
                                    based on the time I have available.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
