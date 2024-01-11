export const averageRatings = (reviews: any) => {
    let totalRatings = 0;
    let average = 0;
    if (reviews?.length) {
        for (let index = 0; index < reviews?.length; index++) {
            totalRatings += reviews[index].ratings;
        };
        average = totalRatings / reviews?.length
    }
    return average;
}