import { useEffect, useRef, useState } from "react"
import Button from "../../component/button"
import { TextField } from "../../component/form/inputs"
import Image from "next/image"
export const InputSelectDrop = ({ selectParam = 'name',className, onChangeSearch, onChangeSelect, selectArrow = true, searchCustom = false, isLoading = false, name, onChange, defaultValue, data=[], ...rest }:any) => {
    const wrapperRef = useRef<any>(null);
    const [inputText, setInputText] = useState('')
    const [listShow, setlistShow] = useState(false)
    const [dataList, setState] = useState(data)
    const [datafilter, setStateFilter] = useState(data)
    useEffect(() => {
        setState(data)
        setStateFilter(data)
    }, [data])
    useEffect(()=>{
        if(defaultValue?.length){
            data.map((d:any)=>{
                if(d[selectParam] === +defaultValue){
                    setInputText(d.label)
                }
            })
        }else{
            setInputText('')
        }
    },[defaultValue])
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (inputText?.length) {
                onChangeSearch && onChangeSearch(inputText)
            }
        }, 1000)
        return () => clearTimeout(delayDebounceFn)
    }, [inputText])
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
        setlistShow(true)
        if (searchCustom) {
            let val = e.target.value?.toLowerCase()
            let filterData = dataList.filter((d:any) => d.name.toLowerCase().includes(val))
            setStateFilter(filterData)
        }
        if (!e.target.value?.length) {
            onChangeSelect && onChangeSelect({ target: { name: name, value: '' } })
        }
        onChange && onChange(e)
    }
    const selectedList = (val:any) => {
        setInputText(val.label)
        setlistShow(false)
        onChangeSelect && onChangeSelect({ target: { name: name, value: val } })
    }
    useEffect(() => {
        function handleClickOutside(event:any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setlistShow(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    return <div className={`box-search ${className?className:''}`}>
        
        <TextField
            {...rest}
            name={name}
            value={inputText}
            autoComplete='off'
            onChange={handleChange}
            onFocus={() => setlistShow(true)}
            InputProps={{
                endAdornment: (
                    <>
                        {isLoading ? 'loading....' : null}
                        <div className={`${className?.length?'icoArr':''} ${listShow ? 'rotate' : ''}`} onClick={() => setlistShow(true)}>
                            {selectArrow ? <Image src='/assets/header/chevron-blue.svg' width={12} height={12} alt='search' /> : null}
                        </div>
                    </>
                )
            }}
        />
        {listShow ? <div ref={wrapperRef}> <InputDropDownList isLoading={isLoading} selectedList={selectedList} keyword={inputText} data={datafilter} />
        </div>
            : null}
    </div>
}
export const InputDropDownList = ({ keyword, selectedList, data, }:any) => {
    const makeBold = (input:string) => {
        if (!input) {
            return;
        }
        const n = input.toUpperCase();
        const q = keyword.toUpperCase();
        const x = n.indexOf(q);
        if (!q || x === -1) {
            return input; // bail early
        }
        const l = q.length;
        return input.substr(0, x) + '<b>' + input.substr(x, l) + '</b>' + input.substr(x + l);
    }
    return data?.length ? <ul className="drop-list">
        {
            data?.map((d:any, key:number) => {
                return (
                    <li key={key}>
                        <Button type='button' onClick={() => selectedList(d)}>
                            {keyword ? <div dangerouslySetInnerHTML={{ __html: makeBold(d?.name || d?.label) || ''}}></div> : d?.name || d?.label}
                        </Button>
                    </li>
                )
            })
        }
        {/* {
                isLoading ?
                    <Box className="text-center">
                        <CircularProgress size={20} />
                    </Box>
                    : null
            } */}
        {/* </FetchOnScroll>  */}
    </ul> : null
}