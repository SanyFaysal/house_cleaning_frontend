import { Spin } from "antd";
import Image from "next/image";
import loading from '../../public/loading.webp'

export default function Loading() {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="example">
                <Image src={loading} height={60} width={60} alt="loading" />
            </div>
        </div>
    )
}

