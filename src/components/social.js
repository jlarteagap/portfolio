import { useEffect, useState } from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

export const Social = () => {
  const [social, setSocial] = useState("");
  useEffect(() => {
    const url = 'http://localhost:3000/api/about';
        
    fetch(url)
    .then(res => res.json())
    .then(data => {
        setSocial(data.social);
    })
  }, []);
  return (

    <ul className="footer__social">
      <li>
        <a
          href={social.linkedin}
          target="_blank"
          className="footer__social-link"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </li>
      <li>
        <a
          href={social.github}
          target="_blank"
          className="footer__social-link"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </li>
      <li>
        <a
          href={social.twitter}
          target="_blank"
          rel="noreferrer"
          className="footer__social-link"
        >
          <BsTwitter />
        </a>
      </li>
    </ul>
  );
};
