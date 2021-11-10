class NumbersHelper {
  static ConvertToEuro = (number) => {
    // React native function
    if (typeof number === 'number') {
      const [currency, cents] = number.toFixed(2).toString().split('.')

      return `${currency.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')},${cents} €`
    }

    return '0,00 €'

    // React js web function
    // return `${Number(number).toLocaleString("fr-FR", {
    //   minimumFractionDigits: 2,
    //   maximumFractionDigits: 2,
    // })} €`;
  }
}

export default NumbersHelper
