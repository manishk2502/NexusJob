
// import React from 'react'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Button } from '../ui/button'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { LogOut, User2 } from 'lucide-react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// //import { USER_API_END_POINT } from '@/utils/constant'
// import { setUser } from '@/redux/authSlice'
// import { toast } from 'sonner'

// const Navbar = () => {
//     const { user } = useSelector(store => store.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const logoutHandler = async () => {
//         try {
//             const res = await axios.get("https://job-linker-xoes.onrender.com/api/v1/user/logout", { withCredentials: true });
//             if (res.data.success) {
//                 dispatch(setUser(null));
//                 navigate("/");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         }
//     }

//     return (
//         <div className='bg-gray-50 shadow-md'>
//             <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-6'>
//                 <div>
//                     <h1 className='text-2xl font-bold text-indigo-600'>Carrer<span className='text-rose-600'>Bloom</span></h1>
//                 </div>
//                 <div className='flex items-center gap-10'>
//                     <ul className='flex font-medium items-center gap-6 text-gray-700'>
//                         {
//                             user && user.role === 'recruiter' ? (
//                                 <>
//                                     <li><Link className='hover:text-indigo-600' to="/admin/companies">Companies</Link></li>
//                                     <li><Link className='hover:text-indigo-600' to="/admin/jobs">Jobs</Link></li>
//                                 </>
//                             ) : (
//                                 <>
//                                     <li><Link className='hover:text-indigo-600' to="/">Home</Link></li>
//                                     <li><Link className='hover:text-indigo-600' to="/jobs">Jobs</Link></li>
//                                     <li><Link className='hover:text-indigo-600' to="/browse">Browse</Link></li>
//                                 </>
//                             )
//                         }
//                     </ul>
//                     {
//                         !user ? (
//                             <div className='flex items-center gap-4'>
//                                 <Link to="/login"><Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-100">Login</Button></Link>
//                                 <Link to="/signup"><Button className="bg-indigo-600 text-white hover:bg-indigo-700">Signup</Button></Link>
//                             </div>
//                         ) : (
//                             <Popover>
//                                 <PopoverTrigger asChild>
//                                     <Avatar className="cursor-pointer">
//                                         <AvatarImage src={user?.profile?.profilePhoto} alt="user profile" />
//                                     </Avatar>
//                                 </PopoverTrigger>
//                                 <PopoverContent className="w-80 bg-white shadow-lg border border-gray-200">
//                                     <div className='p-4'>
//                                         <div className='flex items-center gap-3 mb-4'>
//                                             <Avatar>
//                                                 <AvatarImage src={user?.profile?.profilePhoto} alt="user profile" />
//                                             </Avatar>
//                                             <div>
//                                                 <h4 className='font-semibold text-gray-800'>{user?.fullname}</h4>
//                                                 <p className='text-sm text-gray-500'>{user?.profile?.bio}</p>
//                                             </div>
//                                         </div>
//                                         <div className='flex flex-col space-y-2 text-gray-600'>
//                                             {
//                                                 user && user.role === 'student' && (
//                                                     <div className='flex items-center gap-2'>
//                                                         <User2 className="text-indigo-600" />
//                                                         <Button variant="link" className="text-indigo-600 hover:text-indigo-700">
//                                                             <Link to="/profile">View Profile</Link>
//                                                         </Button>
//                                                     </div>
//                                                 )
//                                             }
//                                             <div className='flex items-center gap-2'>
//                                                 <LogOut className="text-rose-600" />
//                                                 <Button onClick={logoutHandler} variant="link" className="text-rose-600 hover:text-rose-700">Logout</Button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </PopoverContent>
//                             </Popover>
//                         )
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar


import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get("https://nexusjob-716x.onrender.com/api/v1/user/logout", { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            } else {
                toast.error('Logout failed. Please try again.');
            }
        } catch (error) {
            // Check if error.response exists and provide a fallback message
            toast.error(error?.response?.data?.message || 'An unexpected error occurred.');
            console.error(error);
        }
    }

    return (
        <div className='bg-gray-50 shadow-md'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-6'>
                <div>
                    <h1 className='text-2xl font-bold text-indigo-600'>Nexus<span className='text-rose-600'>Job</span></h1>
                </div>
                <div className='flex items-center gap-10'>
                    <ul className='flex font-medium items-center gap-6 text-gray-700'>
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li><Link className='hover:text-indigo-600' to="/admin/companies">Companies</Link></li>
                                    <li><Link className='hover:text-indigo-600' to="/admin/jobs">Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link className='hover:text-indigo-600' to="/">Home</Link></li>
                                    <li><Link className='hover:text-indigo-600' to="/jobs">Jobs</Link></li>
                                    <li><Link className='hover:text-indigo-600' to="/browse">Browse</Link></li>
                                </>
                            )
                        }
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-4'>
                                <Link to="/login"><Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-100">Login</Button></Link>
                                <Link to="/signup"><Button className="bg-indigo-600 text-white hover:bg-indigo-700">Signup</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src={user?.profile?.profilePhoto} alt="user profile" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80 bg-white shadow-lg border border-gray-200">
                                    <div className='p-4'>
                                        <div className='flex items-center gap-3 mb-4'>
                                            <Avatar>
                                                <AvatarImage src={user?.profile?.profilePhoto} alt="user profile" />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-semibold text-gray-800'>{user?.fullname}</h4>
                                                <p className='text-sm text-gray-500'>{user?.profile?.bio}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col space-y-2 text-gray-600'>
                                            {
                                                user?.role === 'student' && (
                                                    <div className='flex items-center gap-2'>
                                                        <User2 className="text-indigo-600" />
                                                        <Button variant="link" className="text-indigo-600 hover:text-indigo-700">
                                                            <Link to="/profile">View Profile</Link>
                                                        </Button>
                                                    </div>
                                                )
                                            }
                                            <div className='flex items-center gap-2'>
                                                <LogOut className="text-rose-600" />
                                                <Button onClick={logoutHandler} variant="link" className="text-rose-600 hover:text-rose-700">Logout</Button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;
