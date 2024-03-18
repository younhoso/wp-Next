'use client';

import clsx from 'clsx';
import { HeaderStyled } from './styled';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/header/logo.svg'

type Category = {
  id: number,
  title: string,
  link: string,
  isActive: boolean
}

export type HeaderProps = {
  category?: Category[];
}

export default function Header({ category }: HeaderProps) {
 return (
   <HeaderStyled className={clsx('Header')}>
    <Image src={logo} alt={'OMTLabs-LOGO'} />
    <ul>
      {category?.map((item) => {
        return (
          <li key={item.id} className={clsx('item', (item.isActive) && 'active')}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ) 
      })}
    </ul>
   </HeaderStyled>
 );
};