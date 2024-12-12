import React from 'react';
import { projects } from '../data/index.js';
import { FaLocationArrow } from 'react-icons/fa6';

const RecentProjects = () => {
    return (
        <div className='py-20' id='projects'>
            <h1 className='heading'>
                A small selection of {' '}
                <span className='text-purple'>recent projects</span>
            </h1>
            <div className='container mt-10'>
                <div className='row'>
                    {projects.map(({ id, title, des, img, iconLists, link }) => (
                        <div key={id} className='col-md-4 mb-4'>
                            <div className='card shadow-lg border-0 rounded-3xl'>
    <div className='position-relative overflow-hidden'>
        <img
            src="/bg.png"
            alt='bg-img'
            className='card-img-top rounded-3xl'
        />
        <img
            src={img}
            alt={title}
            className='position-absolute start-50 translate-middle-x img-fluid rounded-3xl'
            style={{ width: '80%', bottom: '-20px' }}  // Adjusted to keep the image within bounds
        />
    </div>
    <div className='card-body'>
        <h5 className='card-title text-center font-weight-bold'>
            {title}
        </h5>
        <p className='card-text text-center text-muted'>{des}</p>
        <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                {iconLists.map((icon, index) => (
                    <div key={icon} className='d-inline-block me-2'>
                        <div className='border border-white/[0.2] rounded-circle bg-black d-flex justify-content-center align-items-center' style={{ width: '35px', height: '35px' }}>
                            <img src={icon} alt={icon} className='p-2' style={{ width: '40px', height: '40px' }} />
                        </div>
                    </div>
                ))}
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" className='d-flex align-items-center text-purple text-decoration-none'>
                <p className='mb-0 me-2'>Visit Github</p>
                <FaLocationArrow color='#CBACF9' />
            </a>
        </div>
    </div>
</div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentProjects;
