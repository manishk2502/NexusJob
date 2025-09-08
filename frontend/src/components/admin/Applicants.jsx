// import React, { useEffect } from 'react'
// import Navbar from '../shared/Navbar'
// import ApplicantsTable from './ApplicantsTable'
// import axios from 'axios';
// //import { APPLICATION_API_END_POINT } from '@/utils/constant';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setAllApplicants } from '@/redux/applicationSlice';

// const Applicants = () => {
//     const params = useParams();
//     const dispatch = useDispatch();
//     const {applicants} = useSelector(store=>store.application);

//     useEffect(() => {
//         const fetchAllApplicants = async () => {
//             try {
//                 const res = await axios.get("https://job-linker-xoes.onrender.com/api/v1/application/applicants", { withCredentials: true });
//                 dispatch(setAllApplicants(res.data.job));
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchAllApplicants();
//     }, []);
//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-7xl mx-auto'>
//                 <h1 className='font-bold text-xl my-5'>Applicants {applicants?.applications?.length}</h1>
//                 <ApplicantsTable />
//             </div>
//         </div>
//     )
// }

// export default Applicants

// import React, { useEffect } from 'react';
// import Navbar from '../shared/Navbar';
// import ApplicantsTable from './ApplicantsTable';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setAllApplicants } from '@/redux/applicationSlice';
// import { toast } from 'sonner';

// const Applicants = () => {
//     const params = useParams();
//     const dispatch = useDispatch();
//     const { applicants } = useSelector(store => store.application);

//     useEffect(() => {
//         const fetchAllApplicants = async () => {
//             try {
//                 // Adjust the API endpoint if necessary
//                 const res = await axios.get("https://job-linker-xoes.onrender.com/api/v1/application/applicants", { withCredentials: true });
                
//                 // Check if applicants data exists and dispatch to Redux store
//                 if (res.data && res.data.applicants) {
//                     dispatch(setAllApplicants(res.data.applicants));
//                 } else {
//                     toast.error('No applicants found.');
//                 }
//             } catch (error) {
//                 console.log(error);
//                 toast.error('Failed to fetch applicants.');
//             }
//         };
//         fetchAllApplicants();
//     }, [dispatch]);

//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-7xl mx-auto'>
//                 <h1 className='font-bold text-xl my-5'>
//                     Applicants {applicants ? applicants.length : 0} {/* Safeguard for undefined applicants */}
//                 </h1>
//                 <ApplicantsTable />
//             </div>
//         </div>
//     );
// }

//export default Applicants;


import React, { useEffect } from 'react';
import Navbar from '../shared/Navbar';
import ApplicantsTable from './ApplicantsTable';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllApplicants } from '@/redux/applicationSlice';
import { toast } from 'sonner';

const Applicants = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { applicants } = useSelector(store => store.application);

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                // Retrieve the token from localStorage
                const token = localStorage.getItem('token');
                
                // Adjust the API endpoint if necessary
                const res = await axios.get("https://job-linker-xoes.onrender.com/api/v1/application/applicants", {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                // Check if applicants data exists and dispatch to Redux store
                if (res.data && res.data.applicants) {
                    dispatch(setAllApplicants(res.data.applicants));
                } else {
                    toast.error('No applicants found.');
                }
            } catch (error) {
                console.error(error);
                toast.error('Failed to fetch applicants.');
            }
        };
        fetchAllApplicants();
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto'>
                <h1 className='font-bold text-xl my-5'>
                    Applicants {applicants ? applicants.length : 0} {/* Safeguard for undefined applicants */}
                </h1>
                <ApplicantsTable />
            </div>
        </div>
    );
}

export default Applicants;

