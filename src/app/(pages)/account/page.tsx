import React from 'react'
import { Metadata } from 'next'

import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import AccountForm from './AccountForm'

import classes from './index.module.scss'

export default async function Account() {
  return (
    <div>
      <h5 className={classes.personalInfo}>Personal Information</h5>
      <AccountForm />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'My profile',
  description: 'Create an account or log in to an existing account.',
  openGraph: mergeOpenGraph({
    title: 'My profile',
    url: '/account',
  }),
}