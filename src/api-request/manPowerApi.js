
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
    },
    manpowerGetAllData : [],

    manpowerGetAllDataApi : async ()=>{
        const res = await useAxios.get(`/man-power`);
        if(res){
            set({manpowerGetAllData : res.data});
            return true;
        } else {
            return false;
        }
    },
    deleteManPowerApi : async (id)=>{
        const res = await useAxios.delete(`/man-power/${id}`);
        if(res){
            return true;
        } else {
            return false;
        }
    }
}));



export default manPowerStore;