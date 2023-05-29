import { useEffect } from "react"

export default function StoreFinder({type='ireland'}:any) {
    useEffect(()=>{
        var a=document.createElement("script");
        a.type="text/javascript";
        a.async=!0;
        a.src="https://cdn.storepoint.co/api/v1/js/163d501120d560.js";
        var b:any =document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a,b);
    },[])
    return<div id="storepoint-container" data-tags={type} data-map-id="163d501120d560"></div>
}