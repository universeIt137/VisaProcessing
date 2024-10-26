
import { create } from 'zustand';
import useAxiosPublic from './../hooks/useAxiosPublic';


const useAxios = useAxiosPublic();

const manPowerStore = create((set)=>({
    manpowerCreateApi : async (payload)=>{
        const res = await useAxios.post('/man-power', payload);
        if(res){
            return true;
        }else {
            return false;
        }
    }
}));


export default manPowerStore;