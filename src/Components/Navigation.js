
import { useEffect } from 'react';
import './Navigation.scss';
import NavLink from './NavLink';


const Navigtion = ({current}) => {

    useEffect(() => {
            const currentTab = current;
            const home =document.getElementById('l-home')
            const about =document.getElementById('l-about')
            const project =document.getElementById('l-projects')
            const contact =document.getElementById('l-contact')
            
            const sectionSelect =(active, remove1, remove2, remove3) => {
                active.classList.add('active');
                remove1.classList.remove('active');
                remove2.classList.remove('active');
                remove3.classList.remove('active');
            }
            
            if (currentTab === 'home') {
                sectionSelect(home, about, project, contact)
            } else if (currentTab === 'about') {
                sectionSelect(about, home, project, contact)
            }   else if (currentTab === 'projects'){
                sectionSelect(project, about, home, contact)
            }   else {
                sectionSelect(contact, about, project, home)
            }
    }, [current])

    
    const toggleNav =(menu, open, close) => {
            const nav = document.getElementById('navigation');
            const openBtn = document.getElementById('open-btn');
            const closeBtn = document.getElementById('close-btn');
    
            nav.style.display = menu;
            openBtn.style.display = open;
            closeBtn.style.display = close;
    }

    const openMenu = () => toggleNav('flex', 'none', 'block');
    const closeMenu = () => {
        if (window.innerWidth < 992) {
            toggleNav('none', 'block', 'none');
        }
    } 

    const checkNav = () => {
        if(window.innerWidth >= 992) {
            openMenu()
            console.log('checking Nav');
        }
    }
    
    window.addEventListener('resize', checkNav)

    return(
        <div>
            <div className='menu_btn'>
                <svg className='close none' id='close-btn'  
                onClick={closeMenu} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm7.491 6.432 2.717-2.718c.146-.146.338-.219.53-.219.404 0 .751.325.751.75 0 .193-.073.384-.22.531l-2.717 2.717 2.728 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-2.728-2.728-2.728 2.728c-.147.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .384.073.53.219z"/></svg>

                <svg className='menu' id='open-btn' 
                 onClick={openMenu}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm12.5 10.75c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75zm0-3.248c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75zm0-3.252c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75z"/></svg>
            </div>
            <div className='navigation' id='navigation'>
                <nav>
                    <NavLink link={'home'} click={closeMenu}/>
                    <NavLink link={'about'} click={closeMenu} />
                    <NavLink link={'projects'} click={closeMenu} />
                    <NavLink link={'contact'} click={closeMenu} />
                </nav>
                <div className='external_link'>
                    <a href='https://github.com/sheri0441' target='_blank'>
                        <svg id='github' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
                    </a>



                    <a href='mailto:sa2283493@gmail.com'>
                        <svg id='gmail' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M24 24h-24v-24h24v24zm-5.141-6.333c.63 0 1.141-.512 1.141-1.142v-9.05c0-.63-.511-1.142-1.141-1.142h-13.718c-.63 0-1.141.512-1.141 1.142v9.05c0 .63.511 1.142 1.141 1.142h13.718zm-6.859-4.058l-6.228-4.321-.014 7.712h12.457v-7.712l-6.215 4.321zm5.913-6.609c-1.745 1.215-5.913 4.153-5.913 4.153l-5.947-4.153h11.86z"/></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navigtion;