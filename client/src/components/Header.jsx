import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";


const Header = () => {
    return (
        <div className='text-center my-8 space-y-2'>
            <Image src={logo} alt="Logo" width={300} height={200}  className='mx-auto'/>
            <h1>Journalism Without Fear or Favour</h1>
            <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;