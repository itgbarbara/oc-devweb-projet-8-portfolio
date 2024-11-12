const CallToActionBtn = ({ onClick, label, mod }) => {
  return (
    <button onClick={onClick} className={`cta-btn cta-btn--${mod}`}>
      {label}
    </button>
  )
}

export default CallToActionBtn
