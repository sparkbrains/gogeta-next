export function RadioInput({ title, count,value,name, id, ...rest }:any) {
    return <div className="d-flex align-items-center justify-content-between check-input">
        <div className="d-flex align-items-center">
            <input {...rest} name={name} id={id} value={value} className="form-check-input me-1 checkbox cursor-pointer" type="checkbox" autoComplete="off" />
            <label htmlFor={id} className="cursor-pointer">{title}</label>
        </div>
        {count ? <span>{count}</span> : null}
    </div>
}
export function TextField({InputProps,label,...rest}:any){
    return<div className="form-input">
        {label ? <label>{label}</label>:null}
        <div className="d-flex align-items-center justify-content-between">
            {InputProps?.startAdornment?InputProps?.startAdornment:null}
            <input {...rest}/>
            {InputProps?.endAdornment?InputProps?.endAdornment:null}
        </div>
    </div>
}