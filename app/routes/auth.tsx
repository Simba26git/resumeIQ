import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";

export const meta = () => ([
    { title: 'ResumeIQ | Authentication' },
    { name: 'description', content: 'Log into your ResumeIQ account to access AI-powered resume analysis and career insights.' },
])

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next])

    return (
        <main className="bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 min-h-screen flex items-center justify-center p-6">
            <div className="gradient-border shadow-2xl max-w-2xl w-full">
                <section className="flex flex-col gap-10 bg-white/95 backdrop-blur-sm rounded-3xl p-12">
                    <div className="flex flex-col items-center gap-6 text-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-3xl">R</span>
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-5xl">Welcome to ResumeIQ</h1>
                            <h2 className="text-slate-600">Log In to Continue Your Career Journey</h2>
                            <p className="text-slate-500 max-w-md mx-auto">
                                Get AI-powered insights on your resume and track your job applications with smart analytics.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {isLoading ? (
                            <button className="auth-button animate-pulse flex items-center justify-center gap-3">
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <p>Signing you in...</p>
                            </button>
                        ) : (
                            <>
                                {auth.isAuthenticated ? (
                                    <button className="auth-button hover:shadow-2xl" onClick={auth.signOut}>
                                        <span className="flex items-center gap-3">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            <p>Log Out</p>
                                        </span>
                                    </button>
                                ) : (
                                    <button className="auth-button hover:shadow-2xl" onClick={auth.signIn}>
                                        <span className="flex items-center gap-3">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                            </svg>
                                            <p>Log In to Get Started</p>
                                        </span>
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Auth
