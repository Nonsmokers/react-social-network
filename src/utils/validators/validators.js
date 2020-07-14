export const required = (value) =>{
    if(value) return undefined;
    return 'Field is required'
}
export const max_length_creator =(max_length)=> (value) =>{
    if(value.length > max_length) return `Max length is ${max_length} symbols`;
    return undefined;
}
