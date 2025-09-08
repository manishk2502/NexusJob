
// import React, { useEffect, useState } from 'react'
// import Navbar from '../shared/Navbar'
// import { Label } from '../ui/label'
// import { Input } from '../ui/input'
// import { RadioGroup } from '../ui/radio-group'
// import { Button } from '../ui/button'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// //import { USER_API_END_POINT } from '@/utils/constant'
// import { toast } from 'sonner'
// import { useDispatch, useSelector } from 'react-redux'
// import { setLoading } from '@/redux/authSlice'
// import { Loader2 } from 'lucide-react'

// const Signup = () => {

//     const [input, setInput] = useState({
//         fullname: "",
//         email: "",
//         phoneNumber: "",
//         password: "",
//         role: "",
//         file: ""
//     });
//     const {loading, user} = useSelector(store => store.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     }
//     const changeFileHandler = (e) => {
//         setInput({ ...input, file: e.target.files?.[0] });
//     }
//     const submitHandler = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append("fullname", input.fullname);
//         formData.append("email", input.email);
//         formData.append("phoneNumber", input.phoneNumber);
//         formData.append("password", input.password);
//         formData.append("role", input.role);
//         if (input.file) {
//             formData.append("file", input.file);
//         }

//         try {
//             dispatch(setLoading(true));
//             const res = await axios.post("https://job-linker-xoes.onrender.com/api/v1/user/register", formData, {
//                 headers: { 'Content-Type': "multipart/form-data" },
//                 withCredentials: true,
//             });
//             if (res.data.success) {
//                 navigate("/login");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         } finally {
//             dispatch(setLoading(false));
//         }
//     }

//     useEffect(() => {
//         if(user) {
//             navigate("/"); //to the home page
//         }
//     }, [user]);

//     return (
//         <div className="bg-blue-50 min-h-screen">
//             <Navbar />
//             <div className="flex items-center justify-center max-w-7xl mx-auto">
//                 <form onSubmit={submitHandler} className="w-1/2 bg-white border border-gray-300 rounded-md p-6 my-10 shadow-md">
//                     <h1 className="font-bold text-2xl mb-5 text-gray-800">Sign Up</h1>
//                     <div className="my-3">
//                         <Label>Full Name</Label>
//                         <Input
//                             type="text"
//                             value={input.fullname}
//                             name="fullname"
//                             onChange={changeEventHandler}
//                             placeholder="shikha"
//                             className="border-gray-300 focus:border-blue-500"
//                         />
//                     </div>
//                     <div className="my-3">
//                         <Label>Email</Label>
//                         <Input
//                             type="email"
//                             value={input.email}
//                             name="email"
//                             onChange={changeEventHandler}
//                             placeholder="shikha@gmail.com"
//                             className="border-gray-300 focus:border-blue-500"
//                         />
//                     </div>
//                     <div className="my-3">
//                         <Label>Phone Number</Label>
//                         <Input
//                             type="text"
//                             value={input.phoneNumber}
//                             name="phoneNumber"
//                             onChange={changeEventHandler}
//                             placeholder="8080808080"
//                             className="border-gray-300 focus:border-blue-500"
//                         />
//                     </div>
//                     <div className="my-3">
//                         <Label>Password</Label>
//                         <Input
//                             type="password"
//                             value={input.password}
//                             name="password"
//                             onChange={changeEventHandler}
//                             placeholder="password"
//                             className="border-gray-300 focus:border-blue-500"
//                         />
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <RadioGroup className="flex items-center gap-4 my-5">
//                             <div className="flex items-center space-x-2">
//                                 <Input
//                                     type="radio"
//                                     name="role"
//                                     value="student"
//                                     checked={input.role === 'student'}
//                                     onChange={changeEventHandler}
//                                     className="cursor-pointer"
//                                 />
//                                 <Label htmlFor="r1">Student</Label>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <Input
//                                     type="radio"
//                                     name="role"
//                                     value="recruiter"
//                                     checked={input.role === 'recruiter'}
//                                     onChange={changeEventHandler}
//                                     className="cursor-pointer"
//                                 />
//                                 <Label htmlFor="r2">Recruiter</Label>
//                             </div>
//                         </RadioGroup>
//                         <div className="flex items-center gap-2">
//                             <Label>Profile</Label>
//                             <Input
//                                 accept="image/*"
//                                 type="file"
//                                 onChange={changeFileHandler}
//                                 className="cursor-pointer"
//                             />
//                         </div>
//                     </div>
//                     {
//                         loading ? (
//                             <Button className="w-full my-4 bg-blue-600 text-white flex items-center justify-center">
//                                 <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
//                             </Button>
//                         ) : (
//                             <Button type="submit" className="w-full my-4 bg-blue-600 text-white hover:bg-blue-700">Signup</Button>
//                         )
//                     }
//                     <span className="text-sm">Already have an account? <Link to="/login" className="text-blue-700 hover:underline">Login</Link></span>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup;
import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';

const Signup = () => {

    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });

    const { loading, user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phoneNumber);
    };

    const validateForm = () => {
        if (!input.fullname || !input.email || !input.phoneNumber || !input.password || !input.role) {
            toast.error("Please fill all fields");
            return false;
        }
        if (!validatePhoneNumber(input.phoneNumber)) {
            toast.error("Please enter a valid phone number");
            return false;
        }
        return true;
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            dispatch(setLoading(true));
            const res = await axios.post("https://job-linker-xoes.onrender.com/api/v1/user/register", formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || 'Something went wrong!');
        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (user) {
            navigate("/"); // Redirect to home page if user is already logged in
        }
    }, [user]);

    return (
        <div className="bg-blue-50 min-h-screen">
            <Navbar />
            <div className="flex items-center justify-center max-w-7xl mx-auto">
                <form onSubmit={submitHandler} className="w-1/2 bg-white border border-gray-300 rounded-md p-6 my-10 shadow-md">
                    <h1 className="font-bold text-2xl mb-5 text-gray-800">Sign Up</h1>
                    <div className="my-3">
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                            placeholder="Manish"
                            className="border-gray-300 focus:border-blue-500"
                        />
                    </div>
                    <div className="my-3">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="manish@gmail.com"
                            className="border-gray-300 focus:border-blue-500"
                        />
                    </div>
                    <div className="my-3">
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                            placeholder="1234567890"
                            className="border-gray-300 focus:border-blue-500"
                        />
                    </div>
                    <div className="my-3">
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="password"
                            className="border-gray-300 focus:border-blue-500"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className="flex items-center gap-2">
                            <Label>Profile</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                    {
                        loading ? (
                            <Button className="w-full my-4 bg-blue-600 text-white flex items-center justify-center">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                            </Button>
                        ) : (
                            <Button type="submit" className="w-full my-4 bg-blue-600 text-white hover:bg-blue-700">Signup</Button>
                        )
                    }
                    <span className="text-sm">Already have an account? <Link to="/login" className="text-blue-700 hover:underline">Login</Link></span>
                </form>
            </div>
        </div>
    );
};

export default Signup;
