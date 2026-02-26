import React from 'react';
import Navbar from './Navbar';

const Footer = () => (
    <footer className="bg-gray-50 border-t py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} API Hub. All rights reserved.
        </div>
    </footer>
);

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
            <Navbar />
            <main className="flex-1 flex flex-col">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
