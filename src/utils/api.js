import { resturentList } from "../../constants"

export const fetchResturentsData = () => {
    const data = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(resturentList)
        },2000)
    })
    return data;
}

export const fetchResturentDetails = (id) => {
    const data = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(resturentList[id])
        },2000)
    })
    return data;
}