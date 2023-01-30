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

    <ul className="social">
      <li>
        <a
          href={social.linkedin}
          target="_blank"
          className="social-link"
          rel="noreferrer"
        >
          <BsLinkedin size={24} />
        </a>
      </li>
      <li>
        <a
          href={social.github}
          target="_blank"
          className="social-link"
          rel="noreferrer"
        >
          <BsGithub size={24}/>
        </a>
      </li>
      <li>
        <a
          href={social.twitter}
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <BsTwitter size={24} />
        </a>
      </li>
    </ul>
  );
};
