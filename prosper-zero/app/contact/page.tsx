import Background from '../components/background';
import Navbar from '../components/topNavbar';
import React, { FC } from 'react';

const ContactPage: FC = () => {
    const backgroundImageUrl = '/gradients/05.png';
    return (
        <main className="h-screen text-white">
            <Background url={backgroundImageUrl} flexDirection='column'>
                <Navbar navbarIndex={1}/>
                <div className="flex flex-col grow justify-center items-center">
                    <div className="flex flex-col justify-center items-center w-3/4">
                        <p className="inline-block text-5xl text-center mb-4">
                            Please do not try to contact me.
                        </p>
                    </div>
                </div>
            </Background>
        </main>
   );
};

export default ContactPage;
