import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";

const Button = ({ title, clickHandler, quote, author }) => {
  return (
    <div className="btn-container">
      <div>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            quote + author
          )}`}
          id="tweet-quote"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} />
          Retweet
        </a>
        <a
          href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&caption=${encodeURIComponent(
            author
          )}&content=${encodeURIComponent(
            quote
          )}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
          id="tumblr-quote"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTumblr} />
          Reblog
        </a>
      </div>

      <button id="new-quote" onClick={clickHandler}>
        <FontAwesomeIcon icon={faForward} />
        {title}
      </button>
    </div>
  );
};

export default Button;
