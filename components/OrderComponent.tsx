import { Image, Radio, TextInput } from '@mantine/core'
import { useEffect, useState } from 'react'
import { dataType } from '../types'
import { useRecoilState } from 'recoil'
import { orderState } from '../atoms/orderAtom'

function OrderComponent({ orderData }: { orderData: dataType }) {
    const [order, setOrderState] = useRecoilState(orderState(orderData.id))
    const [checked, setChecked] = useState<boolean>(order.checked)
    const [edit, setEdit] = useState<boolean>(false)

    useEffect(() => {
        setOrderState({ ...orderData, checked: order.checked })
    }, [orderData, setOrderState])

    useEffect(() => {
        setOrderState(orderPrev => {
            return {
                ...orderPrev,
                checked: checked
            }
        })
    }, [checked])


    return (
        <div className="grid items-center grid-cols-12 py-5 mx-5">
            <div className="col-span-4 flex items-center space-x-4 ">
                <Radio
                    checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                    classNames={{
                        radio: "border-2 border-black border-opacity-30 cursor-pointer",
                        icon: `${order.checked ? "text-[#4F5E74] cursor-pointer" : "cursor-pointer"}`,
                        inner: `${order.checked ? "gray cursor-pointer" : "cursor-pointer"}`,
                    }}
                    onClick={() => {
                        setChecked(!checked)
                    }}

                    color="gray"
                />
                {order.logoBg ?
                    <div className="w-14 h-10 flex justify-center items-center rounded-xl" style={{ backgroundImage: `url(${order.logoBg})` }}>
                        <Image className="w-8 h-auto" src={order.logo} alt={order.id} />
                    </div> :
                    <div className="w-14 h-10 flex justify-center items-center rounded-xl bg-gray-200">
                        <Image className="w-8 h-auto" src={order.logo} alt={order.id} />
                    </div>
                }
                <div>
                    {edit ?
                        <TextInput
                            value={order.brandName.charAt(0).toUpperCase() + order.brandName.slice(1)}
                            onChange={(event) => setOrderState(orderPrev => {
                                return {
                                    ...orderPrev,
                                    brandName: String(event.currentTarget.value).toLowerCase()
                                }
                            })}
                            classNames={{
                                input: "text-black text-opacity-50 font-medium text-sm ml-0 my-2",
                            }}
                        />
                        :
                        <p className="font-semibold capitalize">{order.brandName}</p>
                    }

                    {edit ?
                        <TextInput
                            value={(order.item.split(" ").map((item) => { return item.charAt(0).toUpperCase() + item.slice(1) })).join(" ")}
                            onChange={(event) => setOrderState(orderPrev => {
                                return {
                                    ...orderPrev,
                                    item: String(event.currentTarget.value).toLowerCase()
                                }
                            })}
                            classNames={{
                                input: "text-black text-opacity-50 font-medium text-sm ml-0 my-2",
                            }}
                        />
                        :
                        <p className="text-sm text-black opacity-50">{(order.item.split(" ").map((item) => { return item.charAt(0).toUpperCase() + item.slice(1) })).join(" ")}</p>
                    }
                </div>
            </div>
            <div className="col-span-2 ml-auto">
                <p className="font-medium text-sm text-[#70768C]">
                    {order.amount}
                </p>
            </div>
            <div className="col-span-2 ml-auto">
                <p className="font-medium text-sm text-[#70768C]">
                    {order.price}
                </p>

            </div>
            <div className="col-span-2 ml-auto">
                <p className="font-medium text-sm text-[#70768C]">
                    {new Date(Number(order.placedOn.split("/")[2]), Number(order.placedOn.split("/")[1]) - 1, Number(order.placedOn.split("/")[0])).toLocaleDateString("en-US", {
                        year: "2-digit",
                        month: "numeric",
                        day: "numeric"
                    })}
                </p>
            </div>
            <div className="col-span-2 ml-auto mr-4 cursor-pointer" onClick={() => setEdit(!edit)}>
                <p className="font-medium text-sm text-[#70768C]">
                    {edit
                        ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="check"><path fill="none" d="M0 0h24v24H0V0z"></path><path stroke="green" d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"></path></svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="ellipsis">
                            <path fill="#828282" d="M4 8a2 2 0 1 1-3.999.001A2 2 0 0 1 4 8zM10 8a2 2 0 1 1-3.999.001A2 2 0 0 1 10 8zM16 8a2 2 0 1 1-3.999.001A2 2 0 0 1 16 8z">
                            </path>
                        </svg>}
                </p>
            </div>
        </div>
    )
}

export default OrderComponent