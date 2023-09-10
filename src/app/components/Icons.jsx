"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const EnvelopeIcon = () => {
    return (
        <a href="mailto:benbushell@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
        </a>
    );
};

export const TwitterIcon = () => {
    return (
        <a href="https://twitter.com/BenBoosh01" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} size="2xl" />
        </a>
    );
};

export const GitHubIcon = () => {
    return (
        <a href="https://github.com/benboosh01" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>
    );
}

export const LinkedInIcon = () => {
    return (
        <a href="https://www.linkedin.com/in/ben-bushell-108901a2/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </a>
    );
}
