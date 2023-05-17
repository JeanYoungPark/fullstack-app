import { ReactNode } from "react"
import TabComponent from "./TabComponent"
import { CommonLayout } from "../../styles/common"

interface CommonLayoutProps {
  children: ReactNode;
}

function Layout({children}: CommonLayoutProps) {
  return (
    <CommonLayout>
      <TabComponent />
      {children}
    </CommonLayout>
  )
}

export default Layout