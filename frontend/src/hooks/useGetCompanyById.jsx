// import { setSingleCompany } from '@/redux/companySlice'
// import { setAllJobs } from '@/redux/jobSlice'
// //import { COMPANY_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'

// const useGetCompanyById = (companyId) => {
//     const dispatch = useDispatch();
//     useEffect(()=>{
//         const fetchSingleCompany = async () => {
//             try {
//                 const res = await axios.get("https://job-linker-xoes.onrender.com/api/v1/company/get/${companyId}",{withCredentials:true});
//                 console.log(res.data.company);
//                 if(res.data.success){
//                     dispatch(setSingleCompany(res.data.company));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchSingleCompany();
//     },[companyId, dispatch])
// }

// export default useGetCompanyById

import { setSingleCompany } from '@/redux/companySlice';
import { setAllJobs } from '@/redux/jobSlice';
// import { COMPANY_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchSingleCompany = async () => {
            try {
                const res = await axios.get(`https://job-linker-xoes.onrender.com/api/v1/company/get/${companyId}`, { withCredentials: true });
                console.log(res.data.company);
                if (res.data.success) {
                    dispatch(setSingleCompany(res.data.company));
                }
            } catch (error) {
                console.error("Error fetching company by ID:", error.response?.data?.message || error.message);
            }
        };
        
        fetchSingleCompany();
    }, [companyId, dispatch]); // Added dispatch to dependency array
};

export default useGetCompanyById;
