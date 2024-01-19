import { useGetAllServiceQuery } from "@/redux/api/serviceApi";
import { IService } from "@/types/data";
import { Modal } from "antd";
import { useRouter } from "next/navigation";

export default function BannerSearchModal({ services, isModalOpen, setIsModalOpen }: any) {
    const router = useRouter();
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Modal centered title='Search Result' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="flex flex-col gap-3 overflow-y-auto max-h-[300px] min-h-[150px] ">
                    {services?.length ?
                        services?.map((service: IService) => <div className="flex justify-between mr-5">
                            <div className="flex  gap-2">
                                <img src={service?.image} className="w-10 h-10 rounded-lg" />
                                <div>
                                    <p className="font-semibold">{service?.serviceName}</p>
                                    <p>{service?.category?.title}</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => router.push(`/service/service-details/${service?.id}`)} className="border px-3 py-1 rounded">See full</button>
                            </div>

                        </div>)
                        : <div>
                            <p>No service found</p>
                        </div>
                    }
                </div>
            </Modal>
        </div>
    )
}
