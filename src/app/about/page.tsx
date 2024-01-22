
'use client'
import PageLayout from "@/components/layout/PageLayout";
import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import { ICategory } from "@/types/data";

const AboutPage = () => {

    const { data }: any = useGetAllCategoriesQuery(undefined)
    return (
        <PageLayout>
            <div className="bg-gray-100 my-5">
                <div className="container mx-auto py-16">
                    <h1 className="text-4xl font-bold mb-8 text-center">About Our Services</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
                            <p>
                                At HomeSync Solution, we pride ourselves on delivering exceptional services to our customers. With years
                                of experience in the industry, we have become a trusted name for various home-related services.
                            </p>
                            <p className="mt-4">
                                Our team consists of skilled professionals dedicated to ensuring your satisfaction. We believe in
                                providing top-notch services that make your life more comfortable and convenient.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p>
                                Our mission is to enhance the quality of life for our customers by offering reliable and efficient
                                services. Whether it's maintaining your home environment, fixing appliances, or ensuring cleanliness, we
                                aim to exceed your expectations.
                            </p>
                            <p className="mt-4">
                                We are committed to providing services that not only meet industry standards but also reflect our passion
                                for customer satisfaction. Your comfort and well-being are at the forefront of everything we do.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Services We Offer</h2>
                        <ul className="list-disc ml-6">
                            {data?.data?.map((category: ICategory) => <li>{category?.title}</li>)
                            }

                        </ul>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <p>
                            Have questions or need our services? Feel free to reach out to us. Our friendly team is ready to assist you.
                        </p>
                        <p className="mt-4">
                            Phone: HomeSync Solution | Email: homesync.solution@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default AboutPage;
