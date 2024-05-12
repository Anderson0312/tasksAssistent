import React from 'react'
import { AppsOutline, GridOutline, HomeOutline, Link, LogOutOutline, NotificationsCircleOutline, PeopleCircleOutline, PieChartOutline } from 'react-ionicons'

const Sidebar = () => {
    const navLinks =[
        {
            title: 'Home',
            icon: <HomeOutline color ="green" width='22px' height='22px' />,
            active:false,
        },
        {
            title: 'Postagem',
            icon: <AppsOutline color ="green" width='22px' height='22px' />,
            active:true,
        },
        {
            title: 'Projetos',
            icon: <GridOutline color ="green" width='22px' height='22px' />,
            active:false,
        },
        {
            title: 'Análise',
            icon: <PieChartOutline color ="green" width='22px' height='22px' />,
            active:false,
        },
        {
            title: 'Fluxo de trabalho',
            icon: <PeopleCircleOutline color ="green" width='22px' height='22px' />,
            active:false,
        },
        {
            title: 'Notificaçoes',
            icon: <NotificationsCircleOutline color ="green" width='22px' height='22px' />,
            active:false,
        }
    ];
    return(
        <div className='fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col'>
            <div className='w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-[#fff]'>
                <span className='text-green-900 font-bold text-2xl md:block hidden'>
                    Cursos
                </span>
                <span  className='text-green-900 font-semi-bold text-2xl md:hidden block'>
                    -
                </span>
            </div>
            <div className='w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-start items-center gap-2 border-slate-300 bg-[#fff] py-5 md:px-3 px-3 relative '>
                {navLinks.map((link) => {
                    return(
                        <div key={link.title}
                        className={`flex items-center gap-2 w-full rounded-lg hover:text-green-800 hover:bg-[#e4e1e1] px-2 py-3 cursor-pointer ${link.active ?"bg-gray-300":" bg-transparent"}`}
                        >
                            {link.icon}
                            <span className='font-medium text-[15px] md:block hidden cursor-pointer'>
                                 {link.title}
                            </span>
                        </div>
                    );
                })}
                <div className='flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-[#e4e1e1] px-2 py-3 cursor-pointer bg-gray-200'>
                    <LogOutOutline />
                    <span className='font-medium cursor-pointer text-[15px] md:block hidden hover:text-green-800 '>
                        sair
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar