import React from 'react'
import style from "./ContactMe.module.css";

export default function ContactMe() {
    return (
        <>

            <section className={style.body_home + " d-flex justify-content-center align-items-center"} id="contact">
                <div className="container h-100 p-3">
                    <div className="text-center">
                        <h2 className="position-relative text-uppercase fs-1 fw-bolder">Contact <span className="fw-bolder text-info">Me</span></h2>
                    </div>
                    <div className={style.contact_content_con+" d-flex pt-4 justify-content-center align-items-center"}>
                        <div className=" justify-content-center align-items-center">
                            <p className="lh-lg my-3 fs-2 text-light fw-bolder">
                                These are my accounts to contact me.
                                I am very happy for you to contact me.
                            </p>
                            <div className={style.fontfamily + " fw-medium m-auto w-75"}>
                                <div className={style.contact_item+" d-flex justify-content-start align-items-center "}>
                                    <div className={style.icon}>
                                        <i className="fas fa-map-marker-alt d-flex align-items-center m-auto  " />
                                        <span>Location:</span>
                                    </div>
                                    <p className="ms-auto my-1">
                                    Tulkarem, Palestine.
                                    </p>
                                </div>
                                <div className={style.contact_item+" d-flex justify-content-start align-items-center"}>
                                    <div className={style.icon}>
                                        <i className="fas fa-envelope d-flex align-items-center  m-auto" />
                                        <span>Email:</span>
                                    </div>
                                    <p className="ms-auto my-2 ">
                                        <span>abualnasser198@gmail.com</span>
                                    </p>
                                </div>
                                <div className={style.contact_item+" d-flex justify-content-start align-items-center"}>
                                    <div className={style.icon}>
                                        <i className="fas fa-user-graduate d-flex align-items-center  m-auto" />
                                        <span>Education:</span>
                                    </div>
                                    <p className="ms-auto my-2">
                                        <span>Computer Science, An-Najah National University</span>
                                    </p>
                                </div>
                                <div className={style.contact_item+" d-flex justify-content-start align-items-center"}>
                                    <div className={style.icon}>
                                        <i className="fas fa-user-graduate d-flex align-items-center m-auto" />
                                        <span>Mobile Number:</span>
                                    </div>
                                    <p className="ms-auto  my-2">
                                        <span>+972 56-889-1980</span>
                                    </p>
                                </div>
                                <div className={style.contact_item+" d-flex justify-content-start align-items-center"}>
                                    <div className={style.icon}>
                                        <i className="fas fa-globe-africa d-flex align-items-center m-auto" />
                                        <span>Languages:</span>
                                    </div>
                                    <p className="my-2 ms-auto">
                                        <span >Arabic, English.</span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className={style.right_contact}>
                                    <a href="https://www.facebook.com/profile.php?id=100072765333166" target="_blank" className={style.a_style}>
                                        <i className={style.i_style + " fab fa-facebook-f text-white  fs-4"} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/mohammad-nasser-012009256/" target="_blank" className={style.a_style}>
                                        <i className={style.i_style + " fab  fa-linkedin text-white  fs-4"} />
                                    </a>
                                    <a href="https://github.com/MohammadNasser-CS?tab=repositories" target="_blank" className={style.a_style}>
                                        <i className={style.i_style + " fab fa-github text-white  fs-4"} />
                                    </a>
                                    <a href="https://www.instagram.com/mohammad_nasser.02/" target="_blank" className={style.a_style}>
                                        <i className={style.i_style + " fab fa-instagram text-white  fs-4"} />
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
