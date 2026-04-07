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
import { EmployeeHome } from "./pages/employee/Home";
import SmartParking from "./pages/employee/SmartParking";
import LPNRegistration from "./pages/employee/LPNRegistration";
import TrainingAndResources from "./pages/employee/Traning&Resources";
import AccessControl from "./pages/employee/AccessControl";
import IDCard from "./pages/employee/IDCard";

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
            bgimg: '/src/assets/apartment-details.webp',
            title: 'Appartment Details'
        },
        {
            path: "/residential/payments",
            element: <Payments />,
            type: "residential",
            bgimg: '/src/assets/payments&invoices.webp',
            title: 'Payments and Invoices'
        },
        {
            path: "/residential/facility-booking",
            element: <FacilityBooking />,
            type: "residential",
            bgimg: '/src/assets/facility-booking.webp',
            title: 'Facility Booking'
        },
        {
            path: '/residential/visitor',
            element: <Visitor />,
            type: "residential",
            bgimg: '/src/assets/visitor-management.webp',
            title: 'Visitor'
        },
        {
            path: "/residential/home-services",
            element: <HomeServices />,
            type: "residential",
            bgimg: '/src/assets/home-services.webp',
            title: 'Home Services'
        },
        {
            path: "/residential/offers",
            element: <Offers />,
            type: "residential",
            bgimg: '/src/assets/offers&promotions.webp',
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
            bgimg: '/src/assets/discover_1.jpg',
            title: 'Appartment Details'
        },
        {
            path: "/commercial/payments",
            element: <CommercialPayments />,
            type: "commercial",
            bgimg: '/src/assets/discover_2.jpg',
            title: 'Payments and Invoices'
        },
        {
            path: "/commercial/facility-booking",
            element: <CommercialFacilityBooking />,
            type: "commercial",
            bgimg: '/src/assets/discover_3.jpg',
            title: 'Facility Booking'
        },
        {
            path: '/commercial/visitor',
            element: <CommercialVisitor />,
            type: "commercial",
            bgimg: '/src/assets/discover_4.jpg',
            title: 'Visitor'
        },
        {
            path: "/commercial/home-services",
            element: <CommercialHomeServices />,
            type: "commercial",
            bgimg: '/src/assets/discover_5.jpg',
            title: 'Home Services'
        },
        {
            path: "/commercial/offers",
            element: <CommercialOffers />,
            type: "commercial",
            bgimg: '/src/assets/discover_6.jpg',
            title: 'Offers and Promotions'
        }
    ],
    employee: [
        {
            path: "/employee",
            element: <EmployeeHome />,
            type: "employee",
        },
        {
            path: "/employee/smart-parking",
            element: <SmartParking />,
            bgimg: '/src/assets/employee/smart-parking.webp',
            title: 'Smart Parking',
            type: "employee",
        },
        {
            path: "/employee/lpn-registration",
            element: <LPNRegistration />,
            bgimg: '/src/assets/employee/lpn-registration.webp',
            title: 'LPN Registration',
            type: "employee",
        },
        {
            path: "/employee/training-resources",
            element: <TrainingAndResources />,
            bgimg: '/src/assets/employee/training&resources.webp',
            title: 'Training and Resources',
            type: "employee",
        },
        {
            path: "/employee/access-control",
            element: <AccessControl />,
            bgimg: '/src/assets/employee/access-logs.webp',
            title: 'Access Control',
        },
        {
            path: "/employee/id-card",
            element: <IDCard />,
            bgimg: '/src/assets/employee/id-card.webp',
            title: 'ID Card',
        },
    ]
}