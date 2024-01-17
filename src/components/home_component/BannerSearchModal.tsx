import { useGetAllServiceQuery } from "@/redux/api/serviceApi";
import { IService } from "@/types/data";
import { Modal } from "antd";

export default function BannerSearchModal({ services, isModalOpen, setIsModalOpen, query }: any) {
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Modal centered title='Search Result' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div >
                    {services?.length ?
                        services?.map((service: IService) => <p>{service?.serviceName}</p>)
                        : <p>No service found</p>
                    }
                </div>
            </Modal>
        </div>
    )
}
