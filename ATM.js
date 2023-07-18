let withdraw = (amount, limits) => {
  let total = 8000000;
  if (amount > total) {
    return "Insufficient balance from ATM";
  }
  if (amount % 50000 > 0) {
    return "Invalid balance";
  }
  let getMoney = (amount, acc) => {
    if (amount == 0) return {}; // success
    if (!acc.length) return; // failure
    let nominal = acc[0];
    let count = Math.min(limits[nominal], Math.floor(amount / nominal));
    for (let i = count; i >= 0; i--) {
      let result = getMoney(amount - i * nominal, acc.slice(1));
      if (result) return i ? { [nominal]: i, ...result } : result;
    }
  };
  return getMoney(
    amount,
    Object.keys(limits)
      .map(Number)
      .sort((a, b) => b - a)
  );
};

let limits = { 500000: 2, 200000: 5, 100000: 10, 50000: 100 };

console.log(withdraw(850000, limits));
