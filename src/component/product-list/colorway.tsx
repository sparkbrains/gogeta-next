import { MouseEvent } from "react";
import Button from "../button";

export default function ColorWay({item,setselectColorProduct,selectColorProduct}:any){
    return item.colourway?.map((imgItem: any, i: number) => <li key={i}><Button className={selectColorProduct?.colourwayID === imgItem?.colourwayID ? 'activebtn' : ""} onClickCapture={(e:MouseEvent<HTMLButtonElement>) => {e.stopPropagation(); setselectColorProduct(imgItem) }} type='button' style={{ background: `${imgItem?.colourway_secondary_detail ? `linear-gradient(to right bottom, #${imgItem?.colourway_primary_detail?.colourHue} 50%,#${imgItem?.colourway_secondary_detail?.colourHue} 50%)` : `#${imgItem?.colourway_primary_detail?.colourHue}`}` }}></Button></li>)
}