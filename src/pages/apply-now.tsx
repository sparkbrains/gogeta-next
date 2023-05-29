import Input from "<prefix>/common/input";
import { FormC } from "<prefix>/common/validate";
import ApplyNowEbay from "<prefix>/component/apply/ebay";
import ApplyNowUK from "<prefix>/component/apply/uk";
import { MainHead } from "<prefix>/component/main-head";
import Toggle from "<prefix>/component/toggle";
import { withContext } from "<prefix>/context/appContext";
import Applayout from "<prefix>/layout/applayout";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { calculatEbikePrice, onKeyPress } from '../common/utilits'
function ApplyNow({context:{host}}:any) {
    return <Applayout className='applyNow pt-0'>
        <Container>
            {
                host === 'uk' ? <ApplyNowUK/>:<ApplyNowEbay/>
            }
        </Container>
    </Applayout>
}
export default withContext(ApplyNow)