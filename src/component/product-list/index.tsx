import { useState,MouseEvent } from "react";
import Button from "../button";
import Card from "../card";
import Image from "next/image"
import ColorWay from "./colorway";

export default function ProductList({ item }: any) {
    const [selectColorProduct, setselectColorProduct] = useState<any>({})
    let price = `${'SRP ' + item.currencyProduct.currencySymbol + item.currencyProduct.unitSuggestedRetailPrice}`
    return <Card className={'h-100'}>
        <div className="card-image">
            <Image width={260} height={173} alt='ss' className="img-fluid card-img-top product-image" src={selectColorProduct?.colourwayImage?.length ? selectColorProduct?.colourwayImage[0] : item.productImage} />
        </div>
        <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
                <Image width={80} height={26} src={item.brandImage} alt={item.brandName} />
                <ul className="color_palette">
                    <ColorWay setselectColorProduct={setselectColorProduct} selectColorProduct={selectColorProduct} item={item}/>
                </ul>
            </div>
            <h5>{item.productName}</h5>
            {item?.context && Object.keys(item?.context)?.length ?
                <>
                    <s className="price-current">{price} </s> <span className="primary-color ml-1">{item.currencyProduct.currencySymbol + (item.currencyProduct.unitSuggestedRetailPrice - Number(item?.context?.total_savings))}</span>
                    <p className="primary-color price-des">Save {item.currencyProduct.currencySymbol + item?.context?.total_savings} with Cycle to Work ({item?.context?.saving_percentage})</p>
                    <p className="price-des py-3">Just 12 monthly payments of <span className="primary-color">{item.currencyProduct.currencySymbol +item.context?.per_month}</span> from your gross salary</p>
                    <p className="price-des">Plus a <span className="primary-color">{item.currencyProduct.currencySymbol +item.context?.initial_payment}</span>initial payment</p>
                </> :
                <>
                    {item.saving_price.offerPrice ? <s className="price-current">{price}</s> : <p className="price-current">{price}</p>}
                    {item.saving_price.offerPrice ?
                        <>
                            <p><span>Best price </span>{item.currencyProduct.currencySymbol + item.saving_price.offerPrice}</p>
                            <p>Save <span>{item.currencyProduct.currencySymbol + item.saving_price.saving}</span></p>
                        </> : null}
                </>
            }
        </div>
        <div className={`card-footer ${!item.stockReport?'outStock':''}`}>
            {
                !item.stockReport ? 'ENQUIRE FOR AVAILABILITY':<>
                In stock now
            <Image src='/assets/speedybike_electric.svg' width={25} height={14} alt='speedybike_electric' />
                </>
            }
            
        </div>
    </Card>
}