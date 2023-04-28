import { useEffect } from "react";
import { useState } from "react";
import Button from "../button";
import Card from "../card";
import Image from "next/image"

export default function AccordianCard({ title='', children, toggleOpen = false }:any) {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        setOpen(toggleOpen)
    }, [toggleOpen])
    const handleClick = () => {
        setOpen(!open)
    }
    return <Card className='mb-3'>
        <Button type='button' onClick={handleClick} className='toggle-head'>
            <div className="d-flex align-items-center justify-content-between">
                <h5>{title}</h5>
                {
                    !open ?
                        <Image src='/assets/plus.svg' alt='' width={13} height={13} />
                        :
                        <Image src='/assets/minus.svg' alt='' width={13} height={12} />
                }
            </div>
        </Button>
        {open ? children : null}
    </Card>
}