import { Link } from "react-router-dom";
import logo from '../../assets/navbar/navbarLogo.png'
import { CiFacebook } from 'react-icons/ci'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillHome, AiFillPhone, AiOutlineGlobal, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import './Footer.css'
import { CgMail } from "react-icons/cg";
const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="container p-4 lg:p-0">
                <div className="grid grid-cols-1  md:grid-cols-3 py-12 gap-8">
                    <div>
                        {/* <img src={logo} alt="logo of the company" width={156} height={56} />
                        <p className="mb-2"><span> House 664/A, Road # 09 (Main Road), DOHS Mirpur, Dhaka – 1216.</span></p>
                        <p className="mb-2"> elevatorengineersltd@gmail.com | +8801748881363</p> */}
                        <div>
                            <img src={logo} alt="logo of the company" width={156} height={56} />
                            <p className="flex gap-x-2"><AiFillPhone size={22} className='text-red-500' /> <span>+880 1748881363</span></p>
                            <p className="flex gap-x-2"><CgMail size={22} className='text-red-500' /> <span>elevatorengineersltd@gmail.com</span></p>
                            <p className="flex gap-x-2 cursor-pointer"><AiOutlineGlobal size={22} className='text-red-500 ' /> <span>www.elevator.com.bd</span></p>
                            <p className="flex gap-x-2"><AiFillHome size={22} className='text-red-500' /> <span> House 664/A, Road # 09 (Main Road), DOHS Mirpur, Dhaka – 1216.</span></p>
                        </div>
                        <div className='flex items-center gap-x-2 mt-2'>
                            <a href="https://www.facebook.com/profile.php?id=100063929474301" target="_blank" rel="noreferrer"><CiFacebook /></a>
                            <BsLinkedin />
                            <AiOutlineInstagram />
                            <AiOutlineYoutube />
                        </div>
                    </div>
                    <div>
                        <h2>Menu</h2>
                        <ul className="grid grid-cols-2">
                            <li className="mb-1"><Link to={'/'}>Home</Link></li>
                            <li className="mb-1"><Link to={'/company-profile'}>About</Link></li>
                            <li className="mb-1"><Link to={'/products'}>Products</Link></li>
                            <li className="mb-1"><Link to={'/modernization'}>Modernization</Link></li>
                            <li className="mb-1"><Link to={'/projects'}>Projects</Link></li>
                            {/* <li className="mb-1"><Link to={"/download"}>Download</Link></li> */}
                            {/* <li className="mb-1"><Link to={'/blog'}>Blog</Link></li> */}
                            {/* <li className="mb-1"><Link to={"/agent"}>Agent</Link></li> */}
                            <li className="mb-1"><Link to={"/contact"}>Contact</Link></li>
                            <li className="mb-1"><Link to={"/clients"}>Clients</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2>You can trust us</h2>
                        <p className="my-6">Being an independent Elevator Company, we provide the best all-round product for
                            the customers’ appliances. One manufacturer may be the best at one thing; they
                            may just be average at another. But we can provide you always best product as we
                            have numerous non-proprietary manufacturers that all excel in one product or
                            another....</p>
                        {/* <button className="primaryButton rounded-2xl mt-5">Contact Us</button> */}
                    </div>
                </div>
                {/* footer under section  */}
                <div className="flex flex-col lg:flex-row gap-y-4 items-center justify-between py-8 lowerFooter">
                    <ul className="flex flex-wrap gap-x-4 items-center">
                        <li>&copy; Elevator Engineers Limited </li>
                        {/* <li>RELATED ARTICLES</li>
                        <li><Link>SiteMap.html</Link></li>
                        <li><Link>Terms of Service</Link></li>
                        <li>|</li>
                        <li><Link>Privacy Policy</Link></li> */}
                    </ul>
                    <div>
                        <p>Developed By : A K Techbd</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;