import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop: {' '}
            <span className="underline text-blue">
            Find an Apple Store {' '}
            </span>
            or {' '}
            <span className="underline text-blue">
            other retailer
            </span>{' '}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or email to: <a className="underline text-blue" href="mailto:harsh.paradkar@outlook.com">harsh.paradkar@outlook.com</a>
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Developed By: Harsh Paradkar. No rights reserved.</p>
          <div className="flex">
            {footerLinks.map(({url, displayText}, i) => (
              <a href={url}>
                <p key={displayText} className="font-semibold text-gray text-xs">
                  {displayText}{' '}
                  {i !== footerLinks.length - 1 && (
                    <span className="mx-2"> | </span>
                  )}
                </p>
              </a >
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer