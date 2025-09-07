import { useState } from "react";
import BalanceDisplay from "./components/BalanceDisplay";
import Controls from "./components/Controls";
import TransactionPanel from "./components/TransactionPanel";

export default function App() {
  const [balance, setBalance] = useState(5000);
  const [mode, setMode] = useState(null); // 'deposit' or 'withdraw'
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState(null);

  const openMode = (m) => {
    setMessage(null);
    setMode(m);
    setAmount("");
  };

  const handleConfirm = () => {
    const val = Number(amount);
    if (!val || val <= 0) {
      setMessage("ادخل مبلغ صالح أكبر من صفر");
      return;
    }
    if (mode === "withdraw") {
      if (val > balance) {
        setMessage("الرصيد غير كافي");
        return;
      }
      setBalance((b) => Number((b - val).toFixed(2)));
      setMessage ("تم السحب${val} بنجاح");
    } else if (mode === "deposit") {
      setBalance((b) => Number((b + val).toFixed(2)));
      setMessage("تم الإيداع ${val} بنجاح");
    }
    setAmount("");
    setTimeout(() => {
      setMode(null);
      setMessage(null);
    }, 1500);
  };

  const handleCancel = () => {
    setMode(null);
    setAmount("");
    setMessage(null);
  };

  return (
    <div className="atm-page">
      <div className="atm-card">
        <BalanceDisplay balance={balance} />
        <div className="right-controls">
          <Controls openMode={openMode} />
          {mode && (
            <TransactionPanel
              mode={mode}
              amount={amount}
              setAmount={setAmount}
              handleConfirm={handleConfirm}
              handleCancel={handleCancel}
              message={message}
            />
          )}
        </div>
      </div>
    </div>
  );
}