import { useEffect, useState } from 'react'
import OrderHeader from './OrderHeader'
import { dataType } from '../types';
import { useRecoilState, useRecoilValue } from 'recoil';
import { orderArrayState } from '../atoms/orderArrayAtom';
import { filterState, filters } from '../atoms/filterAtom';
import { Button, Group, Menu, Radio, TextInput } from '@mantine/core';
import OrderComponent from './OrderComponent';
import { sortOptions } from '../atoms/sortAtom';
import { sortState } from '../atoms/sortAtom';
import { sortedOrder } from '../atoms/sortOrder';

function OrderSection() {
    const [orderArray, setOrderArray] = useRecoilState(orderArrayState)
    const [filter, setFilter] = useRecoilState(filterState)
    const [sort, setSort] = useRecoilState(sortState)
    const filteredOrderArray = useRecoilValue(sortedOrder)
    const [openedFilter, setOpenedFilter] = useState(false);
    const [openedAmount, setOpenedAmount] = useState(false);
    const [openedPlacedOn, setOpenedPlacedOn] = useState(false);


    useEffect(() => {
        (async function () {
            const res = await fetch("/data.json")
            const dataArray: dataType[] = (await res.json()).data
            setOrderArray(dataArray)
        })();

    }, [setOrderArray])


    return (
        <div className="mx-10">
            <OrderHeader />
            <div className="bg-white min-h-fit rounded-[20px]">
                <div className="p-8">
                    <div className="flex flex-grow justify-between">
                        <div className="flex space-x-2 items-center mx-1">
                            <h1 className="font-semibold text-lg capitalize">{filter}</h1>
                            <h1 className="font-semibold text-lg capitalize text-[#2F2F2F] text-opacity-40">{filteredOrderArray.length}</h1>
                        </div>
                    </div>
                    <hr className="h-px my-4 bg-black bg-opacity-10 border-0" />
                    <div className="flex justify-between">
                        <TextInput
                            placeholder="Search"
                            icon={
                                <svg className="scale-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.001 256.001" id="magnifying-glass"><rect width="20" height="20" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="rgb(0,0,0,0.5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle><line x1="175.394" x2="223.994" y1="175.4" y2="224.001" fill="none" stroke="rgba(0,0,0,0.5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg>
                            }
                            classNames={{
                                input: "border-0 text-black text-opacity-50 font-medium text-sm ml-0",
                                icon: "mr-1 pr-0"
                            }}
                        />
                        <Menu opened={openedFilter} onChange={setOpenedFilter} width={200} position="bottom-end" offset={0}>
                            <Menu.Target>
                                <Button
                                    className="bg-[#EFF0F6] uppercase text-[#4F5E74] text-xs font-bold rounded-lg"
                                    rightIcon={
                                        openedFilter ?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 512 512" id="chevron-up"><path d="M256 213.7l174.2 167.2c4.3 4.2 11.4 4.1 15.8-.2l30.6-29.9c4.4-4.3 4.5-11.3.2-15.5L264.1 131.1c-2.2-2.2-5.2-3.2-8.1-3-3-.1-5.9.9-8.1 3L35.2 335.3c-4.3 4.2-4.2 11.2.2 15.5L66 380.7c4.4 4.3 11.5 4.4 15.8.2L256 213.7z"></path></svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 512 512" id="chevron-down"><path d="M256 298.3l174.2-167.2c4.3-4.2 11.4-4.1 15.8.2l30.6 29.9c4.4 4.3 4.5 11.3.2 15.5L264.1 380.9c-2.2 2.2-5.2 3.2-8.1 3-3 .1-5.9-.9-8.1-3L35.2 176.7c-4.3-4.2-4.2-11.2.2-15.5L66 131.3c4.4-4.3 11.5-4.4 15.8-.2L256 298.3z"></path></svg>
                                    }
                                    onClick={() => setOpenedFilter(!openedFilter)}
                                >
                                    Active Orders
                                </Button>
                            </Menu.Target>
                            <Menu.Dropdown className="rounded-lg shadow-lg">
                                <Radio.Group
                                    name="selectedFilter"
                                    value={filter}
                                    //@ts-ignore
                                    onChange={(value) => setFilter(value)}
                                >
                                    <div className="space-y-5 px-5 py-5">
                                        {filters.map((filterName, index) => {
                                            return (
                                                <Radio
                                                    key={index}
                                                    checked={filter === filterName}
                                                    classNames={{
                                                        radio: "border-2 border-black border-opacity-30 cursor-pointer",
                                                        icon: `${filter === filterName ? "text-[#4F5E74] cursor-pointer" : "cursor-pointer"}`,
                                                        inner: `${filter === filterName ? "gray cursor-pointer" : "cursor-pointer"}`,
                                                        label: "capitalize cursor-pointer"
                                                    }}
                                                    value={filterName}
                                                    label={filterName}
                                                />
                                            )
                                        })}
                                    </div>
                                </Radio.Group>
                            </Menu.Dropdown>
                        </Menu>
                        <Menu opened={openedAmount} onChange={setOpenedAmount} width={200} position="bottom-end" offset={0}>
                            <Menu.Target>
                                <Button
                                    className="bg-[#EFF0F6] capitalize text-[#4F5E74] text-xs font-bold rounded-lg"
                                    rightIcon={
                                        openedFilter ?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 512 512" id="chevron-up"><path d="M256 213.7l174.2 167.2c4.3 4.2 11.4 4.1 15.8-.2l30.6-29.9c4.4-4.3 4.5-11.3.2-15.5L264.1 131.1c-2.2-2.2-5.2-3.2-8.1-3-3-.1-5.9.9-8.1 3L35.2 335.3c-4.3 4.2-4.2 11.2.2 15.5L66 380.7c4.4 4.3 11.5 4.4 15.8.2L256 213.7z"></path></svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 512 512" id="chevron-down"><path d="M256 298.3l174.2-167.2c4.3-4.2 11.4-4.1 15.8.2l30.6 29.9c4.4 4.3 4.5 11.3.2 15.5L264.1 380.9c-2.2 2.2-5.2 3.2-8.1 3-3 .1-5.9-.9-8.1-3L35.2 176.7c-4.3-4.2-4.2-11.2.2-15.5L66 131.3c4.4-4.3 11.5-4.4 15.8-.2L256 298.3z"></path></svg>
                                    }
                                    onClick={() => setOpenedAmount(!openedAmount)}
                                >
                                    Amount
                                </Button>
                            </Menu.Target>
                            <Menu.Dropdown className="rounded-lg shadow-lg">
                                <Radio.Group
                                    name="selectedFilter"
                                    value={sort.amount}
                                    //@ts-ignore
                                    onChange={(value) => setSort({ amount: value })}
                                >
                                    <div className="space-y-5 px-5 py-5">
                                        {sortOptions.map((sortOption, index) => {
                                            return (
                                                <Radio
                                                    key={index}
                                                    checked={sort.amount === sortOption}
                                                    classNames={{
                                                        radio: "border-2 border-black border-opacity-30 cursor-pointer",
                                                        icon: `${sort.amount === sortOption ? "text-[#4F5E74] cursor-pointer" : "cursor-pointer"}`,
                                                        inner: `${sort.amount === sortOption ? "gray cursor-pointer" : "cursor-pointer"}`,
                                                        label: "capitalize cursor-pointer"
                                                    }}
                                                    value={sortOption}
                                                    label={sortOption}
                                                />
                                            )
                                        })}
                                    </div>
                                </Radio.Group>
                            </Menu.Dropdown>
                        </Menu>
                        <Menu opened={openedPlacedOn} onChange={setOpenedPlacedOn} width={200} position="bottom-end" offset={0}>
                            <Menu.Target>
                                <Button
                                    className="bg-[#EFF0F6] capitalize text-[#4F5E74] text-xs font-bold rounded-lg"
                                    rightIcon={
                                        openedFilter ?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 512 512" id="chevron-up"><path d="M256 213.7l174.2 167.2c4.3 4.2 11.4 4.1 15.8-.2l30.6-29.9c4.4-4.3 4.5-11.3.2-15.5L264.1 131.1c-2.2-2.2-5.2-3.2-8.1-3-3-.1-5.9.9-8.1 3L35.2 335.3c-4.3 4.2-4.2 11.2.2 15.5L66 380.7c4.4 4.3 11.5 4.4 15.8.2L256 213.7z"></path></svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 512 512" id="chevron-down"><path d="M256 298.3l174.2-167.2c4.3-4.2 11.4-4.1 15.8.2l30.6 29.9c4.4 4.3 4.5 11.3.2 15.5L264.1 380.9c-2.2 2.2-5.2 3.2-8.1 3-3 .1-5.9-.9-8.1-3L35.2 176.7c-4.3-4.2-4.2-11.2.2-15.5L66 131.3c4.4-4.3 11.5-4.4 15.8-.2L256 298.3z"></path></svg>
                                    }
                                    onClick={() => setOpenedPlacedOn(!openedPlacedOn)}
                                >
                                    Placed On
                                </Button>
                            </Menu.Target>
                            <Menu.Dropdown className="rounded-lg shadow-lg">
                                <Radio.Group
                                    name="selectedFilter"
                                    value={sort.amount}
                                    //@ts-ignore
                                    onChange={(value) => setSort({ amount: value })}
                                >
                                    <div className="space-y-5 px-5 py-5">
                                        {sortOptions.map((sortOption, index) => {
                                            return (
                                                <Radio
                                                    key={index}
                                                    checked={sort.amount === sortOption}
                                                    classNames={{
                                                        radio: "border-2 border-black border-opacity-30 cursor-pointer",
                                                        icon: `${sort.amount === sortOption ? "text-[#4F5E74] cursor-pointer" : "cursor-pointer"}`,
                                                        inner: `${sort.amount === sortOption ? "gray cursor-pointer" : "cursor-pointer"}`,
                                                        label: "capitalize cursor-pointer"
                                                    }}
                                                    value={sortOption}
                                                    label={sortOption}
                                                />
                                            )
                                        })}
                                    </div>
                                </Radio.Group>
                            </Menu.Dropdown>
                        </Menu>
                        <div className="flex fill-[#808080] cursor-pointer bg-transparent">
                            <p className="text-lg font-semibold text-[#808080]">Options</p>
                            <svg className="scale-[60%]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="arrow"><path d="M16.682 19.674c.01-.012.014-.028.024-.04l6.982-7.714c.39-.434.39-1.138 0-1.572-.004-.004-.008-.006-.012-.008a.936.936 0 0 0-.712-.34H8.998a.948.948 0 0 0-.722.352l-.004-.004a1.202 1.202 0 0 0 0 1.572l6.998 7.754a.928.928 0 0 0 1.412 0z"></path></svg>
                        </div>
                    </div>
                    {filteredOrderArray.map((orderData, index) => (
                        <OrderComponent key={index} orderData={orderData} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OrderSection

