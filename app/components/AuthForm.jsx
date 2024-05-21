'use client';

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FcGoogle } from "react-icons/fc";

const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email('Неверный формат email').required('Обязательное поле'),
    password: Yup.string().min(6, 'Пароль должен содержать не менее 6 символов').required('Обязательное поле'),
});

const RegistrationSchema = Yup.object().shape({
    name: Yup.string().required('Обязательное поле'),
    email: Yup.string().email('Неверный формат email').required('Обязательное поле'),
    password: Yup.string().min(6, 'Пароль должен содержать не менее 6 символов').required('Обязательное поле'),
});

const AuthForm = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px]">
            <div className="w-full p-8 space-y-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-bold text-center text-black">{isLoginForm ? 'Вход в аккаунт' : 'Регистрация'}</h2>
                <Formik
                    initialValues={isLoginForm ? { email: '', password: '' } : { name: '', email: '', password: '' }}
                    validationSchema={isLoginForm ? LoginFormSchema : RegistrationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        // Имитация отправки данных
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            resetForm();
                            setSubmitting(false);

                        }, 400);


                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-4">
                            {!isLoginForm && (
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Имя
                                    </label>
                                    <Field
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none text-black "
                                    />
                                    <ErrorMessage name="name" component="div" className="text-sm text-red-600" />
                                </div>
                            )}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none text-black "
                                />
                                <ErrorMessage name="email" component="div" className="text-sm text-red-600" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Пароль
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none text-black "
                                />
                                <ErrorMessage name="password" component="div" className="text-sm text-red-600" />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
                                    disabled={isSubmitting}
                                >
                                    {isLoginForm ? 'Войти' : 'Зарегистрироваться'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className="text-center">
                    <button
                        onClick={toggleForm}
                        className="text-blue-500 hover:underline focus:outline-none"
                    >
                        {isLoginForm ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
                    </button>

                </div>
                <h2 className='text-center text-blue-500 font-bold'>- или -</h2>
                <div className="flex flex-col items-center text-center">
                    <p className="text-blue-500 mb-3"> Bойти с помощью: </p>

                    <button type="submit"
                        className="flex items-center  py-2 px-4 border border-blue-500 hover:border-blue-700 rounded text-black">
                        <FcGoogle className='w-[20px] h-[20px]' />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default AuthForm;
