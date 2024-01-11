
import { Tabs } from "antd";

import { MdOutlineReviews, MdReviews } from "react-icons/md";
import Comments from "./Comments";
import Reviews from "./Reviews";
import { AiOutlineComment } from "react-icons/ai";
import { IService } from "@/types/data";

export default function ReviewsAndComments
    ({ service }: { service: IService }) {
    const items: any = [
        {
            key: 1,
            label: <p className="flex items-center gap-1">
                <MdOutlineReviews
                    className='text-xl ' />
                Reviews</p>,

            children: <Reviews reviews={service?.review} />
        },
        {
            key: 2,
            label: <p className="flex ">
                <AiOutlineComment

                    className='text-xl mr-1' />
                Comments</p>,
            children: <Comments />
        },


    ]
    return (
        <Tabs

            defaultActiveKey="2"
            items={items}
        />
    )
}
