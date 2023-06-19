import { useState } from "react";
import Button from "../button";
import Image from "../image";

export default function Toggle({ title,children,open }:any) {
    const [openToggle, setOpen] = useState(open || false)
    return <div className="toggle-card mb-3">
            <Button type='button' onClick={()=>setOpen(!openToggle)} className={`d-flex w-100 align-center justify-content-between toggle-head ${openToggle?'show':''}`}>
            <h3>{title}</h3>
            {
                openToggle ?
                    <Image src='/go/assets/toggle_close.svg' width={35} height={35} alt='toggle' />
                    :
                    <Image src='/go/assets/toggle_open.svg' width={35} height={35} alt='toggle' />
            }

        </Button>
        {openToggle ? <div className="pt-0 toggle-body">{children}</div>:null}
    </div>
}