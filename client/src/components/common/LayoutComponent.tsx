import { ReactNode } from "react"
import { TabComponent } from "./TabComponent"
import { CommonLayout } from "../../styles/common"

interface CommonLayoutProps {
  children: ReactNode;
}

export const Layout = ({children}: CommonLayoutProps) => {
  return (
    <CommonLayout>
      <TabComponent />
      {children}
    </CommonLayout>
  )
}