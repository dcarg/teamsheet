// Docs:
// https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview
// https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview

interface TweetButtonProps {
  className?: string,
  shareUrl: string,
}

const TweetButton = (props: TweetButtonProps) =>  {
  const { className, shareUrl } = props

  const text = encodeURIComponent('This is who I would pick')
  const url = encodeURIComponent(shareUrl)

  return (
    <div className={className}>
      <a
        className="twitter-share-button"
        href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`}
      />
    </div>
  )
}

export default TweetButton