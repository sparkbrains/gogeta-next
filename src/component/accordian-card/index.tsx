import { useEffect } from "react";
import { useState } from "react";
import Button from "../button";
import Card from "../card";
import Image from "next/image"

export default function AccordianCard({ title='',handleTab, children, toggleOpen = false }:any) {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        setOpen(toggleOpen)
    }, [toggleOpen])
    const handleClick = () => {
        setOpen(!open);
        handleTab && handleTab()
    }
    return <Card className='mb-3'>
        <Button type='button' onClick={handleClick} className='toggle-head'>
            <div className="d-flex align-items-center justify-content-between">
                <h5>{title}</h5>
                {
                    !open ?
                        <Image src='/Icon-Expand.svg' alt='' width={13} height={13} />
                        :
                        <Image src='/Icon-Collapse.svg' alt='' width={13} height={12} />
                }
            </div>
        </Button>
        {open ? children : null}
    </Card>
}