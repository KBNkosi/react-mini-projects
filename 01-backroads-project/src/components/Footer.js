import React from 'react'
import { PageLinks,socialLinks } from '../Links'

const Footer = () => {
  return (
    <footer className="section footer">
      
       <ul className="footer-links">
       {PageLinks.map(({id, href,text})=>(
       <li key={id}>
       <a href={href} className="footer-link">{text}</a>
     </li>
      ))};
      </ul>

      
      <ul className="footer-icons" >
      {socialLinks.map(({id,href,icon})=>(
        <li key={id}>
        <a href={href} target="_blank" rel='noreferrer' className="footer-icon"
          ><i className={icon}></i
        ></a>
      </li>
      ))}
      </ul>
      
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer