export default function TransactionPanel({
    mode,
    amount,
    setAmount,
    handleConfirm,
    handleCancel,
    message
  }) {
    return (
      <div className="trans-panel">
        <h4>{mode === "withdraw" ? "سحب" : "إيداع"}</h4>
        <input
          type="number"
          placeholder="ادخل المبلغ"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
        />
        <div className="trans-actions">
          <button onClick={handleConfirm} className="confirm">
            تأكيد
          </button>
          <button onClick={handleCancel} className="cancel">
            إلغاء
          </button>
        </div>
        {message && <div className="message">{message}</div>}
      </div>
    );
  }