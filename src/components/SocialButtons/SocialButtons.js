import React from 'react'
import { Button } from 'reactstrap'
import { 
  FaTwitter, 
  FaDiscord, 
  FaTelegramPlane, 
  FaMediumM,
  FaYoutubeSquare,
} from 'react-icons/fa'

export const SocialButtons = () => {
  return (
    <div className="btn-wrapper">
      <div className="button-container">
        <Button
          className="btn-icon btn-simple btn-round btn-primary d-inline-flex justify-content-center align-items-center"
          color="default"
          href="https://twitter.com/BundlesFinance"
          target="_blank"
        >
          <FaTwitter />
        </Button>
        <Button
          className="btn-icon btn-simple btn-round btn-primary d-inline-flex justify-content-center align-items-center"
          color="default"
          href="https://t.me/BundlesFinanceDiscussion"
          target="_blank"
        >
          <FaTelegramPlane />
        </Button>
        <Button
          className="btn-icon btn-simple btn-round btn-primary d-inline-flex justify-content-center align-items-center"
          color="default"
          href="https://medium.com/@bundles.finance"
          target="_blank"
        >
          <FaMediumM />
        </Button>
        <Button
          className="btn-icon btn-simple btn-round btn-primary d-inline-flex justify-content-center align-items-center"
          color="default"
          href="https://www.youtube.com/channel/UC9mrNsIf11EJ7oIkaDuX9FQ"
          target="_blank"
        >
          <FaYoutubeSquare />
        </Button>

      </div>
    </div>
  )
}