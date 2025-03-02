import React, { useContext } from 'react';
import {
  ImFacebook,
  ImInstagram,
  ImYoutube,
  ImPinterest,
  ImTwitter
} from "react-icons/im";

import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='hidden xl:flex ml-24 '>
      <ul className='flex gap-x-4'>
        <li>
          <a href='http://www.facebook.com' target='_blank'>
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href='http://www.twitter.com' target='_blank'>
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href='http://www.pinterest.com' target='_blank'>
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href='http://www.instagram.com' target='_blank'>
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href='http://www.youtobe.com' target='_blank'>
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
