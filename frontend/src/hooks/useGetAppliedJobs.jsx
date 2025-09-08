// import { setAllAppliedJobs } from "@/redux/jobSlice";
// //import { APPLICATION_API_END_POINT } from "@/utils/constant";
// import axios from "axios"
// import { useEffect } from "react"
// import { useDispatch } from "react-redux"

// const useGetAppliedJobs = () => {
//     const dispatch = useDispatch();

//     useEffect(()=>{
//         const fetchAppliedJobs = async () => {
//             try {
//                 const res = await axios.get("https://job-linker-xoes.onrender.com/api/v1/application/get", {withCredentials:true});
//                 console.log(res.data);
//                 if(res.data.success){
//                     dispatch(setAllAppliedJobs(res.data.application));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchAppliedJobs();
//     },[])
// };
// export default useGetAppliedJobs;


import { setAllAppliedJobs } from "@/redux/jobSlice";
// import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                const res = await axios.get("https://nexusjob-716x.onrender.com/api/v1/application/get", { withCredentials: true });
                console.log(res.data);
                if (res.data.success) {
                    dispatch(setAllAppliedJobs(res.data.application));
                }
            } catch (error) {
                console.error("Error fetching applied jobs:", error.response?.data?.message || error.message);
            }
        };
        
        fetchAppliedJobs();
    }, [dispatch]); // Added dispatch to dependency array
};

export default useGetAppliedJobs;
