 import AppartmentDetails from "./pages/residential/AppartmentDetails";
 import FacilityBooking from "./pages/residential/FacilityBooking";
 import HomeServices from "./pages/residential/HomeServices";
 import Payments from "./pages/residential/Payments";
 import ResidentialHome from "./pages/residential/ResidentialHome";
 import Visitor from "./pages/residential/Visitor";
 import CarWashDetail from "./pages/residential/CarWashDetail";
 import CommercialHome from "./pages/commercial/CommercialHome";
 import CommercialAppartmentDetails from "./pages/commercial/AppartmentDetails";
 import CommercialFacilityBooking from "./pages/commercial/FacilityBooking";
 import CommercialHomeServices from "./pages/commercial/HomeServices";
 import CommercialPayments from "./pages/commercial/Payments";
 import CommercialVisitor from "./pages/commercial/Visitor";
 import Offers from "./pages/residential/Offers";
 import CommercialOffers from "./pages/commercial/Offers";
 import CommercialCarWashDetail from "./pages/commercial/CarWashDetail";


export const routes = {
    residential: [
        {
            path: "/residential",
            element: <ResidentialHome />,
            type: "residential",
        },
        {
            path: "/residential/appartment-details",
            element: <AppartmentDetails />,
            type: "residential",
            bgimg: '/src/assets/discover_1.webp',
            title: 'Appartment Details'
        },
        {
            path: "/residential/payments",
            element: <Payments />,
            type: "residential",
            bgimg: '/src/assets/discover_2.webp',
            title: 'Payments and Invoices'
        },
        {
            path: "/residential/facility-booking",
            element: <FacilityBooking />,
            type: "residential",
            bgimg: '/src/assets/discover_3.webp',
            title: 'Facility Booking'
        },
        {
            path: '/residential/visitor',
            element: <Visitor />,
            type: "residential",
            bgimg: '/src/assets/discover_4.webp',
            title: 'Visitor'
        },
        {
            path: "/residential/home-services",
            element: <HomeServices />,
            type: "residential",
            bgimg: '/src/assets/discover_5.webp',
            title: 'Home Services'
        },
        {
            path: "/residential/offers",
            element: <Offers />,
            type: "residential",
            bgimg: '/src/assets/discover_6.webp',
            title: 'Offers and Promotions'
        },
        {
            path: "/residential/car-wash-details",
            element: <CarWashDetail />,
            type: "residential",
        }
    ],
    commercial: [
        {
            path: "/commercial",
            element: <CommercialHome />,
            type: "commercial",
        },
        {
            path: "/commercial/appartment-details",
            element: <CommercialAppartmentDetails />,
            type: "commercial",
            bgimg: '/src/assets/discover_1.webp',
            title: 'Appartment Details'
        },
        {
            path: "/commercial/payments",
            element: <CommercialPayments />,
            type: "commercial",
            bgimg: '/src/assets/discover_2.webp',
            title: 'Payments and Invoices'
        },
        {
            path: "/commercial/facility-booking",
            element: <CommercialFacilityBooking />,
            type: "commercial",
            bgimg: '/src/assets/discover_3.webp',
            title: 'Facility Booking'
        },
        {
            path: '/commercial/visitor',
            element: <CommercialVisitor />,
            type: "commercial",
            bgimg: '/src/assets/discover_4.webp',
            title: 'Visitor'
        },
        {
            path: "/commercial/home-services",
            element: <CommercialHomeServices />,
            type: "commercial",
            bgimg: '/src/assets/discover_5.webp',
            title: 'Home Services'
        },
        {
            path: "/commercial/offers",
            element: <CommercialOffers />,
            type: "commercial",
            bgimg: '/src/assets/discover_6.webp',
            title: 'Offers and Promotions'
        },
                {
            path: "/commercial/car-wash-details",
            element: <CommercialCarWashDetail />,
            type: "commercial",
        }
    ]
}