import { useState, MouseEvent } from "react";
import Button from "../button";
import Card from "../card";
import Image from "next/image"
import ColorWay from "./colorway";
import { handleChangeSalary } from "<prefix>/common/utilits";

export default function ProductList({ profile, item,host='' }: any) {
    console.log(host);

    const [selectColorProduct, setselectColorProduct] = useState<any>({})
    let price = `${'SRP ' + profile.currencySymbol + handleChangeSalary(item.currencyProduct.unitSuggestedRetailPrice)}`
    return <Card className={'h-100'}>
        <div className="card-image">
            <Image width={260} height={173} alt='ss' className="img-fluid card-img-top product-image" src={selectColorProduct?.colourwayImage?.length ? selectColorProduct?.colourwayImage[0] : item.productImage} />
        </div>
        <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
                <Image width={80} height={26} src={item.brandImage} alt={item.brandName} className='brandImg' />
                <ul className="color_palette">
                    <ColorWay setselectColorProduct={setselectColorProduct} selectColorProduct={selectColorProduct} item={item} />
                </ul>
            </div>
            <h5>{item.productName}</h5>
            
            {item?.context && Object.keys(item?.context)?.length ?
            host?.includes('uk')?
                <>
                    <s className="price-current pe-1">{price} </s>
                    <p className="price-current">Best price {profile.currencySymbol + handleChangeSalary(item.saving_price.offerPrice)}</p>
                    <p className="primary-color price-des">gogeta C2W price {profile.currencySymbol + handleChangeSalary(Math.round(item.currencyProduct.unitSuggestedRetailPrice - Number(item?.context?.total_savings)))}</p>
                    <p className="pt-3">Save {profile.currencySymbol + handleChangeSalary(item?.context?.total_savings)} ({item?.context?.total_savings_percentage})</p>
                </>: <>
                    <s className="price-current pe-1">{price} </s> <span className="primary-color ml-1">{profile.currencySymbol + handleChangeSalary(Math.round(item.currencyProduct.unitSuggestedRetailPrice - Number(item?.context?.total_savings)))}</span>
                    <p className="primary-color price-des">Save {profile.currencySymbol + handleChangeSalary(item?.context?.total_savings)} with Cycle to Work ({item?.context?.saving_percentage})</p>
                    <p className="price-des py-3">Just 12 monthly payments of <span className="primary-color">{profile.currencySymbol + handleChangeSalary(item.context?.per_month)}</span> from your gross salary</p>
                    {item.context?.initial_payment ? <p className="price-des">Plus a <span className="primary-color">{profile.currencySymbol + item.context?.initial_payment}</span> initial payment</p>:null}
                </> :
                <>
                    {item.saving_price.offerPrice ? <s className="price-current">{price}</s> : <p className="price-current">{price}</p>}
                    {item.saving_price.offerPrice ?
                        <>
                            <p><span>Best price </span>{profile.currencySymbol + handleChangeSalary(item.saving_price.offerPrice)}</p>
                            <p>Save <span>{profile.currencySymbol + handleChangeSalary(item.saving_price.saving)}</span></p>
                        </> : null}
                </>
            }
        </div>
        <div className={`card-footer ${!item.stockReport ? 'outStock' : ''}`}>
            {
                !item.stockReport ? 'ENQUIRE FOR AVAILABILITY' : <>
                    In stock now
                    <Image src='/assets/speedybike_electric.svg' width={25} height={14} alt='speedybike_electric' />
                </>
            }

        </div>
    </Card>
}