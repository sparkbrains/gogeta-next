export function MainHeadSub({ title,des }:any) {
    return <div className="main-head-sub">
        <h3>{title}</h3>
        {des ? <p>{des}</p>:null}
    </div>
}