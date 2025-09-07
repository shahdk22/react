export default function Controls({ openMode }) {
    return (
      <>
        <button className="atm-btn withdraw" onClick={() => openMode("withdraw")}>
          سحب
        </button>
        <button className="atm-btn deposit" onClick={() => openMode("deposit")}>
          إيداع
        </button>
      </>
    );
  }