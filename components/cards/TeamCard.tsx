import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

interface TeamCardProps {
  name?: string;
  title?: string;
  imageSrc?: string;
  linkedInUrl?: string;
  onReadMore?: () => void;
}

const TeamCard = ({ name, title, imageSrc, linkedInUrl, onReadMore }: TeamCardProps) => {
  return (
    <div className="rounded-2xl overflow-hidden group">
      <div className="relative overflow-hidden">
        {/* Image */}
        <Image
          src={imageSrc || '/images/team-avatar.png'}
          alt={name || 'Team member'}
          width={450}
          height={500}
          className="object-cover object-top w-full max-h-[410px] group-hover:scale-100 grayscale-100 group-hover:grayscale-0 transition-transform duration-500"
        />

        {/* Name/Title Box */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white/20 backdrop-blur-lg shadow-md rounded-xl px-5 py-3 w-[94%] border-2 border-white/20">
          <h4 className="text-lg font-semibold text-white line-clamp-1">{name}</h4>
          <p className="text-white text-sm line-clamp-1">{title}</p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-6 text-center ">
        <div className='flex items-center justify-between gap-8 pr-3'>
            <button onClick={onReadMore} className='text-main-maroon flex items-center gap-2 cursor-pointer border border-main-maroon px-3 py-1 hover:bg-main-maroon hover:text-white transiltion-all duration-150'>Read More 
                {/* <FaArrowRightLong/> */}
            </button>
            {linkedInUrl && (
                <Link
                    href={linkedInUrl}
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-sm text-white w-full'"
                >
                    
                    <FaLinkedin className='text-main-maroon' size={20} />
                </Link>
            )}
         
        </div>
 
      </div>
    </div>
  );
};

export default TeamCard;
