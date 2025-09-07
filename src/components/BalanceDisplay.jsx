export default function BalanceDisplay({ balance }) {
    return (
      <div className="left-screen">
        <h3>حسابك</h3>
        <div className="balance">
          {balance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })} EGP
        </div>
      </div>
    );
  }