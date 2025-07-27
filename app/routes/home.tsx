import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {Link, useNavigate} from "react-router";
import {useEffect, useState} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeIQ - AI-Powered Resume Analysis" },
    { name: "description", content: "Get smart AI-powered feedback for your resume and track your job applications with advanced analytics." },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);

      const resumes = (await kv.list('resume:*', true)) as KVItem[];

      const parsedResumes = resumes?.map((resume) => (
          JSON.parse(resume.value) as Resume
      ))

      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    }

    loadResumes()
  }, []);

  return <main className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
    <Navbar />

    <section className="main-section">
      <div className="page-heading py-20">
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-center">Track Your Applications & Resume Ratings</h1>
        </div>
        {!loadingResumes && resumes?.length === 0 ? (
            <div className="text-center space-y-4">
              <h2 className="text-slate-600">Welcome to your resume journey!</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Upload your first resume to get AI-powered feedback and insights that will help you land your dream job.
              </p>
            </div>
        ): (
          <div className="text-center space-y-4">
            <h2 className="text-slate-700">Your Resume Portfolio</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Review your submissions and check AI-powered feedback to improve your job applications.
            </p>
          </div>
        )}
      </div>
      {loadingResumes && (
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="relative">
              <div className="w-32 h-32 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-12 h-12 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <p className="text-indigo-600 font-medium text-lg">Loading your resumes...</p>
          </div>
      )}

      {!loadingResumes && resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume, index) => (
              <div key={resume.id} className="animate-in fade-in duration-700" style={{animationDelay: `${index * 100}ms`}}>
                <ResumeCard resume={resume} />
              </div>
          ))}
        </div>
      )}

      {!loadingResumes && resumes?.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-16 gap-8">
            <div className="text-center space-y-4 max-w-md">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-12 h-12 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-700">Ready to get started?</h3>
              <p className="text-slate-500">Upload your resume and let our AI provide personalized feedback to boost your career prospects.</p>
            </div>
            <Link to="/upload" className="primary-button w-fit text-xl font-semibold px-10 py-4">
              <span className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Upload Your First Resume
              </span>
            </Link>
          </div>
      )}
    </section>
  </main>
}
