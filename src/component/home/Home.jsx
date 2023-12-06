import React from 'react'
import style from "./Home.module.css";
export default function Home() {
  return (
    < >
      <section className={style.body_home + " header h-100"} >
        <div className="container  d-grid h-100 overflow-hidden" id="home">
          <div className="d-flex row">
            <div className="ml-4 w-50 h-100">
              <img src={require('./img/myphoto.png')} className="object-fit-cover w-100 h-100 " />
            </div>
            <div className="d-flex justify-content-end flex-column align-items-center pe-5 m-auto w-50 g-start-2">
              <h1 className={style.fontfamily + " fs-3 pt-3 m-auto text-start"}>
                Hi, I'm <span className="text-light fw-bolder">Mohammad Ashraf Naser. </span>
                A Front-end Developer.
              </h1>
              <p className={style.fontfamily+" pt-3 m-auto text-start"}>
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