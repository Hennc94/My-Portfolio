import { FaGithubSquare } from 'react-icons/fa'
import '../Contact.css'
export default function Contact() {
  return (
    <section id="contact">
      <div className="Contact" id="info">
       
       <h1 className="Contact">Contact!</h1>

        <p className="quote">Actively seeking opportunities to expand my knowledge and
          skills in software development. I am currently seeking a
          full-time junior web developer position. Any general questions
          or if you'd like to network, feel free to reach out!
        </p>

        <div className="icons">
          <a className="github" href="https://github.com/Hennc94">
            <FaGithubSquare/>
          </a>
        </div>
      </div>
    </section>
  )
}