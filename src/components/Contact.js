import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaEnvelopeSquare } from 'react-icons/fa'
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
          <div className="icon-container">
            <a className="github" href="https://github.com/Hennc94">
              <FaGithubSquare />
            </a>
          </div>
          <div className="icon-container">
            <a className="linkedin" href="https://www.linkedin.com/in/connor-hennessy-a62531121/">
              <FaLinkedin />
            </a>
          </div>
          <div className="icon-container">
            <a className="facebook" href="https://www.facebook.com/connor.hennessy.3/">
              <FaFacebookSquare />
            </a>
          </div>
          <div className="icon-container">
            <a className="email" href="mailto:h3nn3ssyc@yahoo.com">
              <FaEnvelopeSquare />
            </a>
          </div>
        </div>
      </div>
    </section>
    )
}