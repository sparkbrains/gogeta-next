import { useState } from "react"
import { useCallback, useEffect } from "react"
var frequencydata: any = {
  MONTHLY: 12,
  WEEKLY: 52,
  FORTNIGHTLY: 26,
  FOUR_WEEKLY: 13
}
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

  if (product_categories?.toLowerCase().includes("cargo") || product_categories?.toLowerCase().includes("light utility")) {
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

export const priceCalculator = (salary: any, card: any, currencyCode: string,tenantDetail:any={}) => {
  let context = {}
  let data = card?.map((d: any) => {
    if (currencyCode === 'EUR') {
      if (d.bicycleAssisted === "ebikes" || d.listing_type === "ebikes") {
        context = calculatEbikePrice(d?.currencyProduct?.unitSuggestedRetailPrice, salary, d.categories)
      } else if (d.bicycleAssisted === "bikes" || d.listing_type === "bikes") {
        context = calculatEbikePrice(d?.currencyProduct?.unitSuggestedRetailPrice, salary, d.categories, 1250)
      }
    } else {
      const obj = {
        SRP_val:d?.currencyProduct?.unitSuggestedRetailPrice,
        bikeValue:d?.saving_price?.offerPrice ? d?.saving_price?.offerPrice:d?.currencyProduct?.unitSuggestedRetailPrice,
        accessoriesValue:0,
        annualSalary:salary,
        frequency:frequencydata[tenantDetail?.paymentFrequency] || 12,
        sacrifice_repayment:tenantDetail?.salarySacrificeTerm || 12,
        totalPackageValue:d?.saving_price?.offerPrice ? d?.saving_price?.offerPrice:d?.currencyProduct?.unitSuggestedRetailPrice,
      }
      if (d.bicycleAssisted === "ebikes" || d.listing_type === "ebikes") {
        context = applyCalculator(obj)
      } else if (d.bicycleAssisted === "bikes" || d.listing_type === "bikes") {
        context = applyCalculator(obj)
      }
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
  const { bikeValue, accessoriesValue, annualSalary, frequency, sacrifice_repayment, totalPackageValue, SRP_val } = obj
  const totalbikeVal = (Number(bikeValue) + (Number(accessoriesValue) || 0))
  const totalVal = (Number(bikeValue) + (Number(accessoriesValue) || 0)) * 1.04
  const gogeta_Fee = Math.round((Number(bikeValue) + (Number(accessoriesValue) || 0)) * 0.04)
  const salary_sacrifice_amount:any = totalVal ? totalbikeVal + gogeta_Fee  : 0
  const SRPVal = SRP_val > 0? +SRP_val + (Number(accessoriesValue) || 0) :totalbikeVal
  const saving: any = calculate_bike_salary_sacrifice_in_plp(SRPVal, annualSalary, sacrifice_repayment)
  let param: any = {}
  console.log(totalVal,'totalVal===');
  
  if (frequency && sacrifice_repayment && bikeValue && annualSalary) {
    param = {
      ...param,
      regular_gross: (salary_sacrifice_amount / 12).toFixed(2),
      regular_gross_old: (totalVal / (Number(frequency) / 12) / Number(sacrifice_repayment)).toFixed(2),
      regular_gross_12: (totalVal / (12 / 12) / 12).toFixed(2),
    }
  }
  
  if (param.regular_gross) {
    param = {
      ...param,
      net_regular: param.regular_gross * (1 - (saving?.saving_percentage_number / 100)),
      net_regular_12: param.regular_gross_12 * (1 - (saving?.saving_percentage_number / 100)),
    }
  }
  if (param.net_regular?.toString()?.length) {
    param = {
      ...param,
      total_savings: saving?.total_savings,
      C2W_price:+param.net_regular_12 * 12
    }
  }
  if (param.total_savings) {
    param = {
      ...param,
      net_total_amount: param?.net_regular * 12,
      net_total_amount_old: totalVal - param?.total_savings,
      total_savings_percentage: saving?.saving_percentage,
      saving_C2W:SRPVal - param.C2W_price,
    }
  }
  
  if(param.saving_C2W){
    param = {
      ...param,
      saving_C2W_percentage: (+param.saving_C2W / SRPVal) * 100,
    }
  }
  return {
    C2W_price: param.C2W_price?.toFixed(2),
net_regular: Math.round(param.net_regular),
gogeta_Fee:gogeta_Fee,
net_total_amount: Math.round(param.net_total_amount),
regular_gross: param.regular_gross,
salary_sacrifice_amount:salary_sacrifice_amount,
saving_C2W: Math.round(param.saving_C2W),
saving_C2W_percentage: Math.round(param.saving_C2W_percentage)   || 0,
total_savings: param.total_savings,
total_savings_percentage: param.total_savings_percentage?param.total_savings_percentage:0
  }
}
function calculate_bike_salary_sacrifice_in_plp(bike_price: number, salary: number, sacrifice_repayment: number, country: string = 'England',) {
  let total_bp = bike_price
  let salary_sacrifice = sacrifice_repayment
  let current_treshold = 12570;
  let max_bike_value_per_year = salary - current_treshold;
  let max_bike_value = (max_bike_value_per_year / 12) * salary_sacrifice; ``
  let value = calc_taxes(country, salary)?.data;
  let tax1 = value[0];
  let threshold = value[1];
  let value2 = calc_taxes(country, salary - total_bp)?.data;
  
  let tax2 = value2[0];
  let differenceOverThreshold = tax1 == tax2 ? 0 : threshold;
  let netcost = ((salary - differenceOverThreshold) * tax1) + ((total_bp - (salary - differenceOverThreshold)) * tax2);
  let takehomepay = netcost / salary_sacrifice; // The monthly cost with the discount
  let savings = total_bp - netcost;
  let savingsPercent = (savings / total_bp) * 100;
  let context = {
    per_month: Math.round(Number(takehomepay)),
    total_savings: Number(savings).toFixed(2),
    saving_percentage: (Number(savingsPercent).toFixed(2)) + "%",
    tax_percent: calc_taxes(country, salary)?.tax,
    saving_percentage_number:Number(savingsPercent).toFixed(2),
  }
  return context
}
function calc_taxes(country: string, salary: any) {
  let tax = 0, threshold = 0;
  if (country == 'England') {
    if (salary <= 12570) { tax = 0; threshold = 0 }
    else if (salary >= 12571 && salary <= 50270) { tax = 32.00; threshold = 12571 }
    else if (salary >= 50271 && salary <= 125140) { tax = 42.00; threshold = 50271 }
    else { tax = 47.00; threshold = 125141 }
  } else if (country == 'Ireland') {
    if (salary <= 12570) { tax = 0; threshold = 0 }
    else if (salary >= 12571 && salary <= 50270) { tax = 32.00; threshold = 12571 }
    else if (salary >= 50271 && salary <= 125140) { tax = 42.00; threshold = 50271 }
    else { tax = 47.00; threshold = 125141 }
  } else if (country == 'Wales') {
    if (salary <= 12570) { tax = 0; threshold = 0 }
    else if (salary >= 12571 && salary <= 50270) { tax = 32.00; threshold = 12571 }
    else if (salary >= 50271 && salary <= 125140) { tax = 42.00; threshold = 50271 }
    else { tax = 47.00; threshold = 125141 }
  } else { //Scotland
    if (salary <= 12570) { tax = 0; threshold = 0 }
    else if (salary >= 12571 && salary <= 14732) { tax = 31.00; threshold = 12571 }
    else if (salary >= 14733 && salary <= 25688) { tax = 32.00; threshold = 14668 }
    else if (salary >= 25689 && salary <= 43662) { tax = 33.00; threshold = 25297 }
    else if (salary >= 43663 && salary <= 50270) { tax = 44.00; threshold = 43663 }
    else if (salary >= 50271 && salary <= 125140) { tax = 44.00; threshold = 50271 }
    else { tax = 48.00; threshold = 125141 }
  }
  return { data: [(100 - tax) / 100, threshold], tax: tax };
}