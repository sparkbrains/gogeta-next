export default function Card({className,children}:any){
    return<div className={`card ${className?className:''}`}>
{children}
    </div>
}