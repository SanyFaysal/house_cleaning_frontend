import { authKey } from "@/constants/storageKey";
import { useAddReviewMutation } from "@/redux/api/serviceApi";
import { useAppSelector } from "@/redux/hook";
import { getFromLocalStorage } from "@/utils/local-storage";
import { Button, Form, Input, Modal, Rate, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

export default function AddReviewForm({ isModalOpen, setIsModalOpen, serviceId }: any) {
    const token = getFromLocalStorage(authKey);
    const { user } = useAppSelector(state => state.auth);
    const [addReview] = useAddReviewMutation();


    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleAddReview = async (values: any) => {
        try {
            const data = {
                serviceId,
                userId: user?.id,
                ...values,

            };
            const res = await addReview({ data, token }).unwrap();
            if (res.status) {
                message.success('Review added successful.')
                setIsModalOpen(false)
            }
        } catch (error: any) {
            console.log(error)
            message.error(error.error)
        }

    }
    return (
        <Modal title="Add Review" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer>
            <div>
                <Form
                    name="basic"
                    layout="vertical"
                    onFinish={handleAddReview}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"

                >
                    <Form.Item
                        label="Ratings"
                        name="ratings"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Rate allowHalf />
                    </Form.Item>

                    <Form.Item
                        label="Review"
                        name="review"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <TextArea rows={2} />
                    </Form.Item>



                    <Form.Item className="flex justify-end gap-x-4">
                        <Button type="primary" onClick={() => setIsModalOpen(false)} danger >
                            Cancel
                        </Button>
                        <Button type="primary" htmlType="submit" className="ml-2">
                            Add Review
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    )
}
