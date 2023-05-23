import { useState } from "react"
import { useCallback, useEffect } from "react"

export const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false)
  const updateTarget = useCallback((e: any) => {
    if (e.matches) setTargetReached(true)
    else setTargetReached(false)
  }, [])
  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addEventListener('change', updateTarget)
    if (media.matches) setTargetReached(true)

    return () => media.removeEventListener('change', updateTarget)
  }, [])

  return targetReached
}
export const queryParam = (val: any) => {
  var str = ''
  for (let item in val) {
    const value = Array.isArray(val[item]) ? item === 'price' ? val[item].join('-') : val[item].join(',') : val[item]
    str = val[item]?.length ? str + `&${item}=${value}` : str
  }

  return str
}
export const onKeyPress = (evt: any, reg = null) => {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = reg ? reg : /^[0-9\b]+$/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
};
export const calculatEbikePrice = (bike_price: number, grosssalary: number, product_categories: string, limitPrice: number = 1500) => {
  let bike = bike_price;
  let initial_payment = 0;
  let limit = limitPrice;
  let incometax = 0;
  let prsi = 0;
  let usc = 0;

  if (product_categories.includes("Cargo") || product_categories.includes("Light Utility")) {
    limit = 3000;
  }

  if (bike > limit) {
    bike = limit;
    initial_payment = bike_price - limit;
  }
  if (bike > limit) {
    incometax = 0;
    prsi = 0;
    usc = 0;
  } else if (Number(grosssalary) < 12013 && Number(grosssalary) > 0) {
    usc = 0;
  } else if (Number(grosssalary) > 34550) {
    incometax = bike * 40 / 100;
  } else {
    incometax = bike * 20 / 100;
    prsi = bike * 4 / 100;
    usc = bike * 4.75 / 100;
  }
  let totalsaving = incometax + prsi + usc;
  let finalcost = bike - totalsaving;
  let netsalary = bike / 12;
  let savingRRP = totalsaving / bike * 100;
  let netsalaryofbike = netsalary.toFixed(2);
  let context = {
    per_month: Number(netsalaryofbike).toFixed(2),
    total_savings: Number(totalsaving).toFixed(2),
    saving_percentage: savingRRP.toFixed(2) + " %",
    initial_payment: initial_payment.toFixed(2),
    incometax:(incometax / 12).toFixed(2),
    prsi:(prsi / 12).toFixed(2),
    usc:(usc / 12).toFixed(2),
    total_savings_annual:(+totalsaving / 12).toFixed(2),
    limit: limit
  };
  return context;
}
export const priceCalculator = (salary: any, card: any) => {
  let context = {}
  let data = card?.map((d: any) => {
    if (d.bicycleAssisted === "ebikes" || d.listing_type === "ebikes") {
      context = calculatEbikePrice(d?.currencyProduct?.unitSuggestedRetailPrice, salary, d.categories)
    } else if (d.bicycleAssisted === "bikes" || d.listing_type === "bikes") {
      context = calculatEbikePrice(d?.currencyProduct?.unitSuggestedRetailPrice, salary, d.categories, 1250)
    }
    d = {
      ...d,
      context: context
    }
    return d
  })
  return data
}
export const handleChangeSalary = (value: number) => {
  const unformattedValue = value?.toString().replace(/,/g, "");
  let formattedValue = Number(unformattedValue).toLocaleString();
  return formattedValue
}
export const submitCalculator = (param: any) => {
  const { salary,total_val,categories,bicycleAssisted } = param
  let context = {}
  if (bicycleAssisted === "ebikes") {
    context = calculatEbikePrice(total_val, salary, categories)
  } else if (bicycleAssisted === "bikes") {
    context = calculatEbikePrice(total_val, salary, categories, 1250)
  }
  return context;
}