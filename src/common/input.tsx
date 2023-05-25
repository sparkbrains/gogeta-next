import Error from "./error";

export default function Input({errorText,className,...rest}:any){
    return<>
    <div className="d-flex align-items-center form-price-input">
                                        <div className="currency">£</div>
        <input className={`${className?className:''} ${errorText?.length ? 'error-input':''}`}{...rest}/>
        </div>
        <Error text={errorText}/>
    </>
}