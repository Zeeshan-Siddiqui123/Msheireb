import { useLocation } from "react-router-dom";
import ProfileCard from "../portals/residential/ProfileCard";
import qrCode from "../../assets/svg/qr_img.svg";

export const LeftSidebarContent = () => {
  const location = useLocation();
  const isEmployeeRoute = location.pathname.includes("employee");
  return (
    <div className="space-y-6">
      {/* <h2 className="heading-medium-bold">Tenant Profile</h2> */}
      <ProfileCard
        variant={isEmployeeRoute ? "employee" : "residential"}
        name="Rakan"
        leasingType="Residential"
        validUntil="10/26"
        nationality="Expat"
        familyMembers={4}
        buildingRef="UNASSIGNED"
        {...(isEmployeeRoute
          ? {
            company: "OPSO",
            buildingStatus: "UNASSIGNED",
            qrCodeUrl: qrCode,
          }
          : {
            leasingType: "Residential",
            nationality: "Expat",
            familyMembers: 4,
            buildingRef: "UNASSIGNED",
          })}
      />
      {/* You can easily add more cards here later */}
    </div>
  )
};