import DiscoverCard from "../../DiscoverCard"

const Services = () => {
    const bgImg1 = '/src/assets/services_1.webp';
    const bgImg2 = '/src/assets/services_2.webp';
    const bgImg3 = '/src/assets/services_3.webp';
    const bgImg4 = '/src/assets/services_4.webp';
    return (
        <section className="flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:max-w-[410px]">
                <DiscoverCard title="Car Wash Services" bgUrl={bgImg1} href="/residential/car-wash-details" />
                <DiscoverCard title="Cleaning Service
(Silver Package)" bgUrl={bgImg2} />
                <DiscoverCard title="Cleaning Service
(Bronze Package)" bgUrl={bgImg3} />
                <DiscoverCard title="Home Services" bgUrl={bgImg4} />
            </div>
        </section>
    )
}

export default Services