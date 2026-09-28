import React from "react";

const PublicGroupLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="@container">{children}</div>;
};

export default PublicGroupLayout;
