import ProfileCard from "../portals/residential/ProfileCard";

export const LeftSidebarContent = () => (
  <div className="space-y-6">
    <h2 className="heading-medium-bold">Tenant Profile</h2>
    <ProfileCard
      name="Rakan"
      leasingType="Residential"
      validUntil="10/26"
      nationality="Expat"
      familyMembers={4}
      buildingRef="UNASSIGNED"
    />
    {/* You can easily add more cards here later */}
  </div>
);