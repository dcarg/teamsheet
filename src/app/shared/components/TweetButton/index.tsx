// Docs:
// https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview
// https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview

interface TweetButtonProps {
  shareUrl: string,
}

const TweetButton = (props: TweetButtonProps) =>  {
  const { shareUrl } = props

  const text = "This%20is%20who%20I%20would%20pick"
  const url = encodeURIComponent(shareUrl)

  return (
    <div className="ml-2">
      <a
        className="twitter-share-button"
        href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`}
      />
    </div>
  )
}

export default TweetButton