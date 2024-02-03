import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

interface DownloadButtonProps {
  href: string,
}

const DownloadButton = (props: DownloadButtonProps) => {
  const { href } = props

  return (
    <a
      className="flex justify-center"
      download
      href={href}
    >
      <FontAwesomeIcon className="cursor-pointer" icon={faDownload} />
    </a>
  )
}

export default DownloadButton