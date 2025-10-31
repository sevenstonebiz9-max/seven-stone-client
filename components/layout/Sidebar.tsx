import Link from 'next/link';
import CloseBar from '@/components/ui/CloseBar';
import { useSidebar } from '@/context/SideBarContext';
import Image from 'next/image';
import SidebarDropdown from '@/components/dropdown/MobileEventsDropdown';
import { IoArrowForwardOutline } from 'react-icons/io5';


const Sidebar = () => {
  const {isSidebarOpen, toggleSidebar} = useSidebar();

  return (
    <header className={`fixed top-0 left-0 bg-[#F5F5F0] w-full min-h-[87vh] rounded-2xl ${
          isSidebarOpen ? 'translate-y-0' : 'translate-y-[5000px]'
        } transition-transform duration-900 ease-in-out z-20 shadow-2xl border` }>
        <div className='p-4 md:px-16 flex w-full justify-between items-center'>
          <Link href="/" onClick={toggleSidebar} className=''>
            <Image
              src='/seven-stone-logo.png'
              alt='Tausi Logo'
              className='w-10 h-10'
              width={40}
              height={40}
            />   
          </Link>
          <CloseBar/>
        </div>
        
        <nav className='text-xl md:text-2xl font-semibold flex flex-col lg:hidden gap-4 relative px-8 md:px-16 '>
          <Link href="/" onClick={toggleSidebar} className='text-black/80 pt-3'>
            <p>Home</p>
          </Link>

          {/* Sidebar programme dropdown */}
              <SidebarDropdown
                title="Our Track Record"
                toggleSidebar={toggleSidebar}
                items={[
                  {
                    label: '254 Youth Entrepreneurship Awards & Mentorship Program',
                    href: '/programmes/tausi-first-initiative',
                  },
                  {
                    label: 'Kiambu County Youth Innovation & Entrepreneurship Week',
                    href: '/programmes/graduating-queens',
                  },
                  {
                    label: 'Zetech University Research & Innovation Week',
                    href: '/programmes/graduating-queens',
                  },
                  {
                    label: 'Kiambu County Youth Awards',
                    href: '/programmes/graduating-queens',
                  },
                ]}
              />
          
          <Link href="/our-services" onClick={toggleSidebar} className='text-black/80 pt-3'>
            <p>Our Services</p>
          </Link>
          <Link href="/programs" onClick={toggleSidebar} className='text-black/80 pt-3'>
            <p>Programs</p>
          </Link>
          <Link href="/about-us" onClick={toggleSidebar} className='text-black/80 pt-3'>
            <p>About Us</p>
          </Link>   
          <Link href="/about-us/team" onClick={toggleSidebar} className='text-black/80 pt-3'>
            <p>Our Team</p>
          </Link>   
          <Link href="/careers" onClick={toggleSidebar} className='text-black/80 pt-3'>
            <p>News & Insights</p>
          </Link>    
          <Link
            href="/contact-us"
            onClick={toggleSidebar}
            className="bg-gradient-to-br from-[#5C1A25] via-[#7A2C38] to-[rgb(168,75,88)] mt-5
            pl-5 pr-3 py-2 rounded-full flex items-center justify-between gap-3 text-white 
            hover:opacity-90 transition-all duration-300 text-lg ease-in-out group"
          >
            Contact Us
            <div
              className="bg-white rounded-full flex items-center justify-center text-black p-2
              transition-all duration-300 group-hover:scale-110"
            >
              <IoArrowForwardOutline className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-all duration-500" />
            </div>
          </Link>

          <div className='flex flex-col gap-1'>
            {/* <Link href='/login' className='mt-4' onClick={toggleSidebar}>
              <button className=' bg-gradient-to-b from-red-300 to-orange-700 text-neutral-100 px-4 py-1.5 rounded-full  transition-colors duration-300 active:scale-[0.98] active:shadow-none w-full hover:cursor-pointer font-medium flex items-center justify-center gap-2 shadow-md'>
                  <p>Log In</p>
              </button>
            </Link> */}
            {/* <Link href='/serviceBooking' className='mt-4' onClick={toggleSidebar}>
              <button className=' bg-gradient-to-b from-black/60 to-black text-neutral-100 px-4 py-1.5 rounded-full transition-colors duration-300 active:scale-[0.98] active:shadow-none w-full hover:cursor-pointer font-medium flex items-center justify-center gap-2 shadow-md'>
                  <p>Book A Service Now</p>
              </button>
            </Link> */}
          </div>
       
            
        </nav>
    </header>
  )
}

export default Sidebar
