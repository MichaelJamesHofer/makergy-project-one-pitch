import posthog from 'posthog-js'

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    posthog.init('phc_nJka6eAUZ84FQrKdnFETNCwp22s4UT41wvtRuf5C39A', {
      api_host: 'https://us.i.posthog.com',
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('PostHog loaded')
        }
      }
    })
  }
}

export default posthog
