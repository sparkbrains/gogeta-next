import { useState } from "react";
import Button from "../button";
import Image from "../image";

export default function Toggle({ title,children }:any) {
    const [open, setOpen] = useState(false)
    return <Button className="toggle-card mb-3" onClick={()=>setOpen(!open)}>
        <div className="d-flex align-center justify-content-between">
            <h3>{title}</h3>
            {
                open ?
                    <Image src='/assets/toggle_close.svg' width={35} height={35} alt='toggle' />
                    :
                    <Image src='/assets/toggle_open.svg' width={35} height={35} alt='toggle' />
            }
        </div>
        {open ? <div className="pt-4">{children}</div>:null}
    </Button>
}