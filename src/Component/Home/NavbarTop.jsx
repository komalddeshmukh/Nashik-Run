import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { display } from '@mui/system';

function NavbarTop() {
  return (
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", backgroundColor:"yellow"}}>
        <h1>Logo</h1>
      <div>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
      </div>
    </div>
    
  )
}

export default NavbarTop
