'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import { HeaderNav } from "../Nav";
import classes from './index.module.scss'
import PhoneNav from '../PhoneNav'
import { usePathname } from "next/navigation";
import { noHeaderFooterUrls } from '../../../constants'

const HeaderComponent = ({ header }: { header: Header }) => {
    const pathname = usePathname()

  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href="/">
        <Image src="/logo.svg" alt="logo" width={340} height={100} />

        </Link>

        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent