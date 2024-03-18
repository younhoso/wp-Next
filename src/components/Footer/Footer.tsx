import clsx from 'clsx';
import { FooterStyled } from './styled';

export default function Footer() {
 
 return (
   <FooterStyled className={clsx('Footer')}>
    <div><span>OMT Labs</span> / Company Profile</div>
    <div>Copyright © 2024 OMT Labs. All rights reserved.</div>
   </FooterStyled>
 );
};