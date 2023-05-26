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

  if (product_categories.toLowerCase().includes("cargo") || product_categories.toLowerCase().includes("light utility")) {
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
    incometax: (incometax / 12).toFixed(2),
    prsi: (prsi / 12).toFixed(2),
    usc: (usc / 12).toFixed(2),
    total_savings_annual: (+totalsaving / 12).toFixed(2),
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
  const { salary, total_val, categories, bicycleAssisted } = param
  let context = {}
  if (bicycleAssisted === "ebikes") {
    context = calculatEbikePrice(total_val, salary, categories)
  } else if (bicycleAssisted === "bikes") {
    context = calculatEbikePrice(total_val, salary, categories, 1250)
  }
  return context;
}
export const applyCalculator = (obj: any) => {
  const { bikeValue, accessoriesValue, annualSalary, frequency, sacrifice_repayment } = obj
  // const saviing = calculatEbikePrice(bikeValue, annualSalary)
  const totalVal = Number(bikeValue) + Number(accessoriesValue)
  let param:any = {
    regular_gross: ((totalVal / 12) / (Number(frequency)/Number(sacrifice_repayment))).toFixed(2),
  }
  if(param.regular_gross){
    param = {
      net_regular: param.regular_gross / (1 - (42/100)),
    }
  }
  if(param.net_regular){
    param = {
      total_savings: param.net_regular * Number(frequency)
    }
  }
}
// calculate_bike_salary_sacrifice_in_plp(bike_price, salary) {
//   let total_bp = bike_price

//   let ownership_charge_type = new URL(location.href).searchParams.get('scheme_provider')
//   let ownership_value = 0
//   let salary_period = 'monthly'
//   let salary_sacrifice = new URL(location.href).searchParams.get('repayment_period')
//   let country = new URL(location.href).searchParams.get('salary_sacrifice_country')
//   let check_path = window.location.href
//   let current_treshold = this.minimum_salary_threshold;
//   let max_bike_value_per_year = salary - current_treshold;
//   let max_bike_value = (max_bike_value_per_year / 12) * salary_sacrifice;
//   let value = this.calc_taxes(country, salary);
//   let tax1 = value[0];
//   let threshold = value[1];
//   let value2 = this.calc_taxes(country, salary - total_bp);
//   let tax2 = value2[0];
//   let differenceOverThreshold = tax1 == tax2 ? 0 : threshold;
//   let netcost = ((salary - differenceOverThreshold) * tax1) + ((total_bp - (salary - differenceOverThreshold)) * tax2);

//   let takehomepay = netcost / salary_sacrifice; // The monthly cost with the discount
//   let savings = total_bp - netcost;
//   let savingsPercent = (savings / total_bp) * 100;
//   let context = {
//       per_month: (Number(takehomepay)).toFixed(2),
//       total_savings: Number(savings).toFixed(2),
//       saving_percentage: Number(savingsPercent).toFixed(2) + "%",
//   }
//   return context
// }