import Applayout from "<prefix>/layout/applayout";
import Image from "next/image";
import { Container } from "react-bootstrap";

export default function Congratulation() {
    return <Applayout className='applyNow pt-0'>
        <Container>
            <ul className="applyNow-steps">
                <li>
                    <Image src='/go/assets/apply-steps/ic_package.svg' width={48} height={48} alt='Package' />
                    <p>Package</p>
                </li>
                <li>
                    <Image src='/go/assets/apply-steps/personal_details.svg' width={48} height={48} alt='Personal details' />
                    <p>Personal details</p>
                </li>
                <li>
                    <Image src='/go/assets/apply-steps/salary_sacrifice.svg' width={48} height={48} alt='Salary sacrifice' />
                    <p>Salary sacrifice</p>
                </li>
                <li>
                    <Image src='/go/assets/apply-steps/salary_sacrifice.svg' width={48} height={48} alt='Hire agreement' />
                    <p>Hire agreement</p>
                </li>
                <li>
                    <Image src='/go/assets/apply-steps/confirmation.svg' width={48} height={48} alt='Confirmation' />
                    <p>Confirmation</p>
                </li>
            </ul>
        </Container>
    </Applayout>
}