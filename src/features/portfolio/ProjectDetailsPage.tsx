import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
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
        </div>
    );
};

export default ProjectDetailsPage;