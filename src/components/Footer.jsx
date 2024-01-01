import { github, linkedin, instagram } from '../assets';
import { styles } from "../styles";
import '../index.css'


const Footer = () => {
    return (
        <footer className='w-full flex-items-center py-4 bottom-0 bg-primary'>
            <div className="w-full flex justify-between items-center px-8">
                <p className='text-secondary'>Copyright &copy; 2024 • Jack Heimburge • (619) 992-9602 • jheimburge@gmail.com</p>
                <div className='flex flex-row'>
                    <a href="https://github.com/jackheimburge" target='_blank'><img className="w-9 h-9 object-contain mx-3" src={github} alt="github" /></a>
                    <a href="https://www.linkedin.com/in/jackheimburge/" target='_blank'><img className="w-9 h-9 mx-3 object-contain" src={linkedin} alt="LinkedIn" /></a>
                    <a href="https://www.instagram.com/centipedejam/?hl=en" target='_blank'><img className="w-9 h-9 mx-3 object-contain" src={instagram} alt="github" /></a>
                </div>
            </div>
        </footer >
    );

}

export default Footer