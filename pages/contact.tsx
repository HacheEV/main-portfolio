import {NextPage} from "next";
import {Navbar} from "../components/navbar";
import {Social} from "../components/social";
import React, {useContext, useState} from 'react';
import {Footer} from "../components/footer";
import DarkModeContext from "../context/mode-context";
import {classNames} from "../utils/utils";
import ThemeContext from "../context/theme-context/theme-context";
import LanguageContext from "../context/language-context/language-context";
import { CheckCircleIcon } from '@heroicons/react/solid'

interface contactProps {
    props: any;
}


const Contact: NextPage = (props: any) => {
    const {darkMode, setDarkMode} = useContext(DarkModeContext)
    const {theme} = useContext(ThemeContext)
    const {language} = useContext(LanguageContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [reason, setReason] = useState("")
    const [note, setNote] = useState("")
    const [form, setForm] = useState({
        open: false,
        check: false
    })
    const handleMessage = (message:number) => {
        if(message === 200){
            setForm({
                open: true,
                check: true
            })
            setTimeout(()=> {
                setForm({
                    ...form,
                    open: false,
                })
            }, 4000)
        }else{
            setForm({
                check: false,
                open: true,
            })
            setTimeout(()=> {
                setForm({
                    ...form,
                    open: false,
                })
            }, 4000)
        }
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email, phone, reason, note})
        };
        fetch("/api/funnel", requestOptions)
            .then(res => (
                res.json(),
                    res.status === 200 ? (
                        setName(""),
                        setEmail(""),
                        setPhone(""),
                        setNote(""),
                        setReason(""),
                        handleMessage(res.status)
                    ) : null
            ))
            .catch(err => console.error(err));
    }

    return (
        <div className={classNames("grid grid-cols-9 grid-rows-6 grid-flow-col w-full h-screen overflow-x-hidden",
            darkMode ? "bg-dark-primary" : "bg-light-primary")}>
            <div className="flex flex-col row-span-6 col-span-1 h-screen w-32 z-20">
                <div className={classNames("h-[58%] ml-8 md:ml-16 border-l-[5px]",
                    theme.border ? theme.border : "")}></div>
                <Social/>
            </div>
            <div className=" row-span-1 col-span-9 ">
                <Navbar/>
            </div>
            <div className=" row-span-5 col-span-9 grid grid-cols-6">
                <div
                    className={classNames("col-span-6", darkMode ? "bg-dark-primary text-white" : "bg-light-primary text-black")}>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="mt-5 md:mt-0 md:col-span-3">
                                <form onSubmit={handleSubmit}>
                                    <div className="p-4 overflow-hidden">
                                        <div
                                            className={classNames("px-4 rounded-md rounded-md sm:p-6", darkMode ? "bg-dark-primary" : "bg-light-primary")}>
                                            <div className="font-Montserrat grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="name" className="block text-xl">
                                                        {language.contact[0]}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        value={name}
                                                        onChange={(e)=> setName(e.target.value)}
                                                        autoComplete="given-name"
                                                        className="text-black mt-1 focus:ring-accent-green focus:border-accent-green block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="phone" className="block text-xl ">
                                                        {language.contact[1]}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        id="phone"
                                                        value={phone}
                                                        onChange={(e)=> setPhone(e.target.value)}
                                                        autoComplete="family-name"
                                                        className="text-black mt-1 focus:ring-accent-green focus:border-accent-green block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="email" className="block text-xl ">
                                                        {language.contact[2]}
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        value={email}
                                                        onChange={(e)=> setEmail(e.target.value)}
                                                        autoComplete="email"
                                                        className="text-black mt-1 focus:ring-accent-green focus:border-accent-green block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="reason" className="block text-xl">
                                                        {language.contact[3]}
                                                    </label>
                                                    <select
                                                        id="reason"
                                                        name="reason"
                                                        autoComplete="reason"
                                                        value={reason}
                                                        onChange={(e)=> setReason(e.target.value)}
                                                        className="text-black mt-1 text-black focus:ring-accent-green focus:border-accent-green block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    >
                                                        {language.contactSelect.map((reason: any) => (
                                                            <option
                                                                key={language.contactSelect.indexOf(reason)} value={reason}>{reason}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="col-span-6">
                                                    <label htmlFor="message" className="block text-xl">
                                                        {language.contact[4]}
                                                    </label>
                                                    <textarea
                                                        rows={4}
                                                        name="message"
                                                        id="message"
                                                        value={note}
                                                        onChange={(e)=> setNote(e.target.value)}
                                                        className="text-black mt-1 focus:ring-accent-green focus:border-accent-green block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 font-Montserrat text-center sm:px-6 md:text-right">
                                            <button
                                                type="submit"
                                                className={classNames("inline-flex justify-center mt-4 py-2 px-8 border border-transparent shadow-sm font-2xl font-bold tracking-widest rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green",
                                                    darkMode ? "bg-dark-third text-white hover:bg-dark-secondary" : "bg-light-third text-black hover:bg-light-secondary")}
                                            >
                                                {language.contactButton}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                {form.open ? (
                                    <div className="absolute top-36 w-[85%] sm:top-12 sm:right-72 sm:w-64">
                                        <div className={classNames("rounded-md p-4", form.check ? "bg-green-50" : "bg-red-50")}>
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <CheckCircleIcon className={classNames("h-5 w-5", form.check ? "text-green-400" : "text-red-400")} aria-hidden="true" />
                                                </div>
                                                <div className="ml-3">
                                                    <h3 className={classNames("text-sm font-medium",  form.check ? "text-green-800" : "text-red-800" )}>{form.check ? language.formMessage.check : language.formMessage.error}</h3>
                                                    <div className={classNames("mt-2 text-sm",form.check ? "text-green-700" : "text-red-700"  )}>
                                                        <p>{form.check ? language.formMessage.message : language.formMessage.errorMessage}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-9">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Contact
