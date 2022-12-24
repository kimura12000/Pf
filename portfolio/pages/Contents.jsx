import styles from '../styles/Home.module.css'

const proptitle = 'TK PORTFOLIO';

export default function Coutents(props) {

    let title = props.title
  return (
    <div>
    <div>{proptitle}</div>
    <p>{title}</p>
    </div>
  )
}