import { ReactNode } from "react";

const AuthLayout = ({children} : {children: ReactNode}) => {
    return ( 
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
            {children}
        </div>
    );
}

export default AuthLayout;