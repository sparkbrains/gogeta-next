import { useState } from "react";
import { InfoIco } from "../svgIcon";

export default function ToolTip({ des,position='left', className }: any) {
    const [open, setOpen] = useState(false)
    return <label className={`tooltipCell ${className ? className : ''}`} onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <InfoIco />
        {open ?
            <div className={`tooltipCell_des ${position}`} dangerouslySetInnerHTML={{__html:des}}>
                {/* {des} */}
            </div>
            : null}
    </label>
}