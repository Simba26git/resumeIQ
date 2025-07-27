import {Link} from "react-router";
import ScoreCircle from "~/components/ScoreCircle";
import {useEffect, useState} from "react";
import {usePuterStore} from "~/lib/puter";

const ResumeCard = ({ resume: { id, companyName, jobTitle, feedback, imagePath } }: { resume: Resume }) => {
    const { fs } = usePuterStore();
    const [resumeUrl, setResumeUrl] = useState('');

    useEffect(() => {
        const loadResume = async () => {
            const blob = await fs.read(imagePath);
            if(!blob) return;
            let url = URL.createObjectURL(blob);
            setResumeUrl(url);
        }

        loadResume();
    }, [imagePath]);

    return (
        <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-1000 group">
            <div className="resume-card-header">
                <div className="flex flex-col gap-3">
                    {companyName && <h2 className="!text-slate-800 font-bold break-words group-hover:text-indigo-600 transition-colors duration-200">{companyName}</h2>}
                    {jobTitle && <h3 className="text-lg break-words text-slate-500 font-medium">{jobTitle}</h3>}
                    {!companyName && !jobTitle && <h2 className="!text-slate-800 font-bold group-hover:text-indigo-600 transition-colors duration-200">Resume Analysis</h2>}
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Analyzed</span>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>
            {resumeUrl && (
                <div className="gradient-border animate-in fade-in duration-1000 group-hover:shadow-xl transition-all duration-300">
                    <div className="w-full h-full relative overflow-hidden rounded-2xl">
                        <img
                            src={resumeUrl}
                            alt="resume preview"
                            className="w-full h-[350px] max-sm:h-[200px] object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>
                )}
        </Link>
    )
}
export default ResumeCard
