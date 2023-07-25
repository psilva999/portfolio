import { ReactComponent as Github } from '../assets/svg/4-github.svg'
import { ReactComponent as Telegram } from '../assets/svg/5-telegram.svg'
import { ReactComponent as Linkedin } from '../assets/svg/6-linkedin.svg'

const Network = () => {
  return (
    <div className='network'>
      <a href="https://github.com/psilva999" rel='noreferrer' target='_blank'>
        <Github/> </a>

      <a href="https://t.me/psilva999" rel='noreferrer' target='_blank'>
        <Telegram/> </a>

      <a href="https://www.linkedin.com/in/psilva999/" rel='noreferrer' target='_blank'>
        <Linkedin/> </a>
    </div>
  )
}

export default Network
