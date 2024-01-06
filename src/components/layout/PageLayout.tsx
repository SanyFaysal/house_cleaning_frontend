import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

export default function PageLayout({ children }: { children: React.ReactNode | React.ReactElement }) {
    return (
        <>
            <Navbar />
            <div className="min-h-[78vh]">
                {children}
            </div>
            <Footer />
        </>
    )
}
