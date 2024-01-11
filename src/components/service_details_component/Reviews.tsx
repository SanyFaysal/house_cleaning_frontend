import ReviewCard from "../ui/ReviewCard";

export default function Reviews({ reviews }: any) {

    return (
        <div className="mb-5">
            <div >
                <div>
                    <div>
                        <h3 className="text-xl">All Reviews </h3>
                        <h3 className="">Total {reviews?.length} </h3>
                    </div>
                    <div>
                        <button>Please rate us with your personal experience</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 my-4">
                    {reviews?.map((review: any) => <ReviewCard review={review} key={review?.id} />)}
                </div>
            </div>
        </div>
    )
}
