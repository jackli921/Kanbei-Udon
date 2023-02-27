import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'


export default function Header(){
    return (
      <footer>
        <p>
          <span>©</span> Kanbei Udon
        </p>
        <a href="https://www.facebook.com/GuanBingWeiudon/">
          <img src="/public/images/facebook.svg" alt="facebook icon" />
        </a>
        <a href="https://www.instagram.com/explore/locations/285291404/">
          <img src="/public/images/instagram.svg" alt="instagram icon" />
        </a>
        <a href="https://www.google.com/maps/place/Kanbei+Udon/@33.6152789,130.4697473,15z/data=!4m16!1m9!3m8!1s0x3541857b0c8407f1:0xcf9838c6b7676b13!2sKanbei+Udon!8m2!3d33.6152789!4d130.478502!14m1!1BCgIYIA!16s%2Fg%2F1thxnf1q!3m5!1s0x3541857b0c8407f1:0xcf9838c6b7676b13!8m2!3d33.6152789!4d130.478502!16s%2Fg%2F1thxnf1q">
          <img src="/public/images/location.svg" alt="facebook icon" />
        </a>
      </footer>
    );

}