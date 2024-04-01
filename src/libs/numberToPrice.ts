const numberToPrice = (value: number) => {
  const formatter = new Intl.NumberFormat('ko', {
    style: 'currency',
    currency: 'krw',
  })

  return formatter.format(value)
}

export default numberToPrice
