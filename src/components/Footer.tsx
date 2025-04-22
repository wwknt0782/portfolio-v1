import BreadCrumb from "@/components/BreadCrumb";

export default function Footer() {
    return (
        <footer className="bottom-0 w-ful mt-20">
            <BreadCrumb />
            {/*パンくずリスト*/}
            <div className="flex items-center justify-center h-15 ">
                <p className="text-center">
                    {/*コピーライト*/}
                    <small className="whitespace-nowrap uppercase">
                        &copy; 2025 K-Watanabe
                    </small>
                </p>
            </div>
        </footer>
    );
}
