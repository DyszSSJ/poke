import Sidebar from "../Ui/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Sidebar
            children={children}
        />
    );
}