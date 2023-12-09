import React from 'react'
import style from "./Home.module.css";
export default function Home() {
  return (
    < >
      <section className={style.body_home + " "} >
        <div className="container d-flex h-100 align-items-center overflow-hidden">
          <div className={style.header_content}>
            <div className={style.left_header_image+" bg-dark rounded-5"}>
              <img src={require('./img/photo4.png')} className="object-fit-contain w-100 h-75 " />
            </div>
            <div className={style.right_header + " d-flex justify-content-end flex-column align-items-center pe-5 m-auto w-50 g-start-2"}>
              <h1 className={style.fontfamily + style.right_header_name + " fs-3 pt-3 m-auto text-start"}>
                Hi, I'm <span className="text-light fw-bolder">Mohammad Ashraf Naser. </span>
                A Front-end Developer.
              </h1>
              <p className={style.fontfamily + " pt-3 m-auto text-start"}>
                I'm a Front-end Developer, I love to create beautiful and functional websites and mobile applications.
                I persistently strive to become an expert as a full-stack developer.
                I always like to learn new things and gain experience in them.
              </p>
              </div>
            </div>
        </div>
      </section>

    </>
  )
}