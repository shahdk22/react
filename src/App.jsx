import { useState } from 'react'

export default function App() {
  const [balance, setBalance] = useState(5000) // رصيد مبدئي
  const [mode, setMode] = useState(null) // 'deposit' or 'withdraw' or null
  const [amount, setAmount] = useState('')
  const [message, setMessage] = useState(null)

  const openMode = (m) => {
    setMessage(null)
    setMode(m)
    setAmount('')
  }

  const handleConfirm = () => {
    const val = Number(amount)
    if (!val || val <= 0) {
      setMessage('ادخل مبلغ صالح أكبر من صفر')
      return
    }
    if (mode === 'withdraw') {
      if (val > balance) {
        setMessage('الرصيد غير كافي')
        return
      }
      setBalance((b) => Number((b - val).toFixed(2)))
      setMessage(`تم السحب ${val} بنجاح`)
    } else if (mode === 'deposit') {
      setBalance((b) => Number((b + val).toFixed(2)))
      setMessage(`تم الإيداع ${val} بنجاح`)
    }
    setAmount('')
    // اغلق الفورم بعد ثانيتين
    setTimeout(() => {
      setMode(null)
      setMessage(null)
    }, 1500)
  }

  const handleCancel = () => {
    setMode(null)
    setAmount('')
    setMessage(null)
  }

  return (
    <div className="atm-page">
      <div className="atm-card">
        <div className="left-screen">
          <h3>حسابك</h3>
          <div className="balance">{balance.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})} EGP</div>
        </div>

        <div className="right-controls">
          <button className="atm-btn withdraw" onClick={() => openMode('withdraw')}>
            سحب
          </button>
          <button className="atm-btn deposit" onClick={() => openMode('deposit')}>
            إيداع
          </button>

          {mode && (
            <div className="trans-panel">
              <h4>{mode === 'withdraw' ? 'سحب' : 'إيداع'}</h4>
              <input
                type="number"
                placeholder="ادخل المبلغ"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
              />
              <div className="trans-actions">
                <button onClick={handleConfirm} className="confirm">تأكيد</button>
                <button onClick={handleCancel} className="cancel">إلغاء</button>
              </div>
              {message && <div className="message">{message}</div>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}