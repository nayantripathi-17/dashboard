import React from 'react'
import { Image, Tabs } from "@mantine/core"
import GridImage from './icons/GridImage'
import Cog from './icons/Cog'
import RisingIcon from './icons/RisingIcon'

function LeftNavbar({ activeTab }: { activeTab: string | null }) {
    return (
        <>
            <Tabs.List>
                <Image src="/logo.png" alt="Logo" classNames={{ image: "invert w-24", root: "w-fit mx-auto pt-10 mb-10" }} />
                <Tabs.Tab value="reports" icon={activeTab === "reports" ? <RisingIcon fill="#1B59F8" /> : <RisingIcon />}>
                    Reports
                </Tabs.Tab>
                <Tabs.Tab value="workspaces" icon={activeTab === "workspaces" ? <GridImage fill="#1B59F8" /> : <GridImage />}
                >
                    Workspaces
                </Tabs.Tab>
                <Tabs.Tab value="settings" icon={activeTab === "settings" ? <Cog fill="#1B59F8" /> : <Cog />}>
                    Settings
                </Tabs.Tab>
            </Tabs.List>
        </>
    )
}

export default LeftNavbar