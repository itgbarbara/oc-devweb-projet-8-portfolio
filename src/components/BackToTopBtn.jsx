import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'

const BackToTopBtn = () => {
  return (
    <HashLink to="/#top">
      <FontAwesomeIcon icon={faArrowUpLong} className="back-to-top" />
    </HashLink>
  )
}

export default BackToTopBtn
