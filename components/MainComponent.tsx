import React from 'react'
import LeftNavbar from './LeftNavbar'
import { Image, Tabs } from '@mantine/core'
import OrderSection from './OrderSection'

function MainComponent() {
    const [activeTab, setActiveTab] = React.useState<string | null>("workspaces")

    return (
        <div>
            <Tabs defaultValue="workspaces" orientation="vertical" variant="pills"
                value={activeTab}
                onTabChange={setActiveTab}
                className="flex-none"
                classNames={{
                    root: "flex-none",
                    tabsList: "w-9/12 mx-auto",
                    tab: "data-[active=true]:bg-[#1B59F8] data-[active=true]:bg-opacity-10 data-[active=true]:text-[#1B59F8] rounded-lg h-10 hover:bg-transparent text-sm font-medium",
                    tabIcon: "mr-4"
                }}
            >
                <div className="w-1/6 min-h-screen rounded-r-2xl shadow-2xl shadow-[rgba(0,0,0,0.5)]">
                    <LeftNavbar activeTab={activeTab} />
                </div>

                <Tabs.Panel value="reports">
                    Reports
                </Tabs.Panel>
                <Tabs.Panel value="workspaces">
                    <OrderSection />
                </Tabs.Panel>
                <Tabs.Panel value="settings">
                    Not Made
                </Tabs.Panel>
            </Tabs>
        </div>
    )
}

export default MainComponent