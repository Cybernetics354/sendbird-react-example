import clipart from '../../../assets/img/request-remmitance.png'
import './index.scss'

export default function RequestRemmitance(props) {
  const {
    weight,
    amount,
  } = props;

  return <div className='container'>
    <div className='container__header'>
      <img src={clipart} alt="clipart request remmitance" />
      <p className='container__default-text--title'>송금 완료!</p>
    </div>
    <div className='container__content'>
      <div className='container__content-row'>
        <p className='container__default-text--content-key'>전송 중량</p>
        <p className='container__default-text--content-value'>{weight}</p>
      </div>
      <div className='container__content-row'>
        <p className='container__default-text--content-key'>전송금액</p>
        <p className='container__default-text--content-value'>{amount.toLocaleString()}원</p>
      </div>
    </div>
  </div>
}
