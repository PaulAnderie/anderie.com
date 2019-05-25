import React from "react"
import styles from "../components/about-css-modules.module.css"
import Container from "../components/container"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Container>
    <h1>Online-Marketing Betreuung</h1>
    <p>Online-Marketing ist cool</p>

    <User
     username="hall Computer Services GmbH"
     avatar="https://www.xing.com/img/custom/cp/assets/logo/7/6/b/264043/square_512px/Logo_Alu.jpg"
     excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
   />
   <User
     username="artista GmbH - Smartest Online-Marketing"
     avatar="https://www.xing.com/img/custom/cp/assets/logo/2/b/8/254648/square_512px/170707artista_web.jpg"
     excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
   />
  </Container>
)
