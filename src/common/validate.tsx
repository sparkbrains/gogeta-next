import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

export const validation = (data:any) => {
  let errors:any = {}
  for (const property in data) {
    if (data[property]?.length && Array.isArray(data[property])) {
      errors[property] = handleArrayValidation(data[property])
      if(!errors[property]?.length){
        delete errors[property]
      }
    } else {
      errors = {
        ...errors,
        ...inputValidation(data, property)
      }
    }

  }
  return errors
}
function handleArrayValidation(arr:any){
  let err = []
  let datass = {}
  err = arr?.map((item:any, key:number) => {
    for (const propertyName in item) {
        datass = {
          ...datass,
          ...inputValidation(item, propertyName)
        }
    }
      return datass
  })
  return err?.filter((d:any)=>Object.keys(d)?.length)
}
const inputValidation = (data:any, property:any) => {
  const errors:any = {}
  if (data[property] === null || data[property] === undefined || !data[property].toString().length)
    errors[property] = `Please enter ${property === 'email' ? 'email address.' : property?.split('_') ? property?.split('_').join(' ') + '.' : property + '.'
      }`
  if (property === 'email' && data[property]?.length) {
    if (ValidateEmailAddress(data[property])) {
      errors[property] = ValidateEmailAddress(data[property]);
    }
  }
  if (property === 'password' && data[property].length) {
    if (passwordCheck(data[property])) {
      errors[property] = passwordCheck(data[property]);
    }
  }
  if (property === 'confirm_password') {
    if (data['confirm_password'] !== data['password']) {
      errors['confirm_password'] = 'Password mismatch'
    } else {
      delete errors['confirm_password']
    }
  }
  if (property === 'confirm_new_password') {
    if (data['confirm_new_password'] !== data['new_password'])
      errors['confirm_new_password'] = 'Password mismatch'
  }
  if (property === 'hr_email' && data[property]?.length) {
    if (ValidateEmailAddress(data[property])) {
      errors[property] = ValidateEmailAddress(data[property]);
    }
  }  
  return errors
}
export const passwordCheck = (password:string) => {
  if (password.length < 8) return 'At least 8 characters'
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[^\w\d\s]).{8,}$/
  if (!regex.test(password)) return 'Your password is incorrect. Please try again'
}
export const ValidateEmailAddress = (emailString:string) => {
  if (!emailString) return 'Please enter email'
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (!regex.test(emailString)) return 'Your email is incorrect. Please try again'
}
export const FormC = ({ values, removeValidValue, onSubmit,onSubmitError, onChange }:any) => {
  const [err, setErr] = useState({});
  const [stateParam, setStateParam] = useState<any>({ ...values });
  useEffect(() => {
    if ((values && JSON.stringify(values)) !== JSON.stringify(stateParam)) {
      setStateParam(values);
    }
  }, [values]);
  const removeAllError = () => {
    setErr({})
  }
  const handleSubmit = (e:FormEvent) => {
    e?.preventDefault();
    const data = removeFormValidation(stateParam);
    const error = validation(data);
    setErr(error);
    console.log(values,error,'errors== 1');
    
    if (!Object?.keys(error)?.length) {
      onSubmit(e);
    } else {
      onSubmitError&&onSubmitError(error);
      const err = Object.keys(error);
      if (err.length) {
        const input = document.querySelector(`input[name=${err[0]}]`);
        input?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    }
  };
  const handleNewError = (error:any) => {
    setErr({ ...err, ...error });
  };
  const handleBlur = (e:any) => {
    const { name, value } = e.target;
    const state = {
      ...stateParam,
      [name]: value,
    };
    setStateParam(state);
    if (value?.length) {
      const data = removeFormValidation({ [name]: value });
      if (!Object?.keys(data)?.length) {
        let error = validation(state);
        setErr(error);
      }
    }
  };
  const handleArrayChange = (e:any, type:any) => {
    let err = []
    const { name, value } = e?.target || {};
    let state = {
      [name]: value,
    };
    if (value?.length) {
      let error = validation(state);
      setErr({
        [type]: [error]
      });
    } else {
      setErr({});
    }
  }
  const handleChange = (e:any) => {
    const { name, value } = e?.target || {};
    let state = {
      [name]: value,
    };
    const data = removeFormValidation({ [name]: value });
    if (Object?.keys(data)?.length) {
      if (value?.length) {
        var stateparam:any = {
          ...state,
        }
        if (name === 'confirm_password') {
          stateparam = {
            ...stateparam,
            password: stateParam?.password
          }
        }
        let error = validation(stateparam);
        setErr(error);
      } else {
        setErr({});
      }
    }
  };
  const removeFormValidation = (stateUpdate:any) => {
    let d = { ...stateUpdate };
    if (removeValidValue?.length) {
      for (let name in d) {
        if (removeValidValue?.includes(name)) {
          delete d[name];
        }
      }
    }
    return d;
  };
  const obj = {
    handleBlur,
    removeFormValidation,
    handleChange,
    handleSubmit,
    handleNewError,
    handleArrayChange,
    removeAllError,
    errors: err as any,
  };
  return obj;
};