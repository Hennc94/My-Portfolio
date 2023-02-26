import "../About.css"
export default function About() {
  return (
    <div className="page" id="about">
      <h1 className="aboutMe">About Me</h1>
      <div className="image">
        <img id="pic" src={require('./images/Photo.jpeg')} />
      </div>
      <p className="introduction">
        Hello! My name is Connor. I am currently enrolled in Nebula Academy
        hoping to utilize the skills I learn to become a software developer!
      </p>
    </div>
  )
}