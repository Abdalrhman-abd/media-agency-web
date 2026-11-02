import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useParams, Navigate, Link } from 'react-router-dom';
import { projectsData } from './data';

const ProjectDetailsPage = () => {
    const { projectId } = useParams<{ projectId: string }>();

    const project = projectsData.find((p) => p.id === projectId);

    if (!project) {
        return <Navigate to="/404" replace />;
    }
    const relatedProjects = projectsData
        .filter((p) => p.category === project.category && p.id !== project.id)
        .slice(0, 3);

    return (
        <div className="py-20 flex ">
            <div className='flex items-center justify-center'>
                <img src={project.image} alt={project.title} />
                <div className='flex  flex-col p-10 '>
                    <h1 className='text-3xl text-white  brand-gradient p-4 rounded-2xl'>{project.title}</h1>
                    <span className='p-5 text-2xl'>{project.client}</span>
                    <p className='p-5 text-[#9E9E9E] '>{project.subtitle}</p>
                </div>
            </div>
            {/* 3. Four Info Cards (Client, Year, Services, Category) */}

            {/* 4. Description & Gallery */}

            {/* 5. Related Projects */}

            {/* 6. CTA Banner */}
        <div className="py-20 flex flex-col">
            <div className='flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 gap-10'>
                <img src={project.image} alt={project.title} className="w-full lg:w-1/2 object-cover rounded-2xl shadow-md" />
                <div className='flex  flex-col p-4 lg:p-10 w-full lg:w-1/2'>
                    <h1 className='text-3xl text-white  brand-gradient p-4 rounded-2xl shadow-sm'>{project.title}</h1>
                    <span className='p-5 text-2xl font-bold text-gray-800 border-b border-gray-100'>{project.client}</span>
                    <p className='p-5 text-[#9E9E9E] leading-relaxed'>{project.subtitle}</p>
                    <span className='p-5 text-xl font-medium text-gray-700 bg-gray-50 rounded-xl my-1'>year: <span className="text-gray-900 font-bold">{project.year}</span></span>
                    <span className='p-5 text-xl font-medium text-gray-700 bg-gray-50 rounded-xl my-1'>category: <span className="text-gray-900 font-bold">{project.category}</span></span>
                    <span className='p-5 text-lg font-medium text-gray-700 bg-gray-50 rounded-xl my-1'>description: <span className="text-gray-600 font-normal">{project.description}</span></span>
                </div>
            </div>
            {relatedProjects.length > 0 && (
                <div className="flex flex-col gap-6 px-10 md:px-35 mt-10">
                    <h2 className="text-2xl font-bold text-gray-800">مشاريع مشابهة</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedProjects.map((item) => (
                            <Link
                                key={item.id}
                                to={`/portfolio/${item.id}`}
                                className="flex flex-col rounded-2xl border border-gray-100 overflow-hidden"
                            >
                                <div className="relative">
                                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                                    <span className="absolute top-3 left-3 bg-white/80 p-2 rounded-full text-xl text-gray-800">
                                        ↖
                                    </span>
                                </div>
                                <div className="p-4 flex flex-col">
                                    <h3 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h3>
                                    <p className="text-sm text-[#9E9E9E]">{item.subtitle}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetailsPage;