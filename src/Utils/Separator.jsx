const Separator = (number) => {
  let num = String(number);
  let spl = [];
  for (let i = 0; num.length > 0; i++) {
    spl.push(num.slice(-3));
    num = num.slice(0, -3);
  }

  const finalPrice = `${spl.reverse().join(",")} تومان `;
  return finalPrice;
};

export default Separator;
