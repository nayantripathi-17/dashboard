import { Button } from '@mantine/core'

function OrderHeader() {
    return (
        <>
            <div className="flex flex-grow justify-between my-10">
                <h1 className="font-bold text-2xl">Orders</h1>
                <Button className="rounded-xl bg-[#1B59F8] hover:opacity-90 h-10"
                    leftIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                            <path fill='#fff' fillRule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                        </svg>
                    }
                    classNames={{
                        icon: "mr-1",
                        label: "items-center text-sm font-semibold",
                    }}
                >
                    Add Order
                </Button>
            </div>
            <hr className="h-px mb-8 bg-black bg-opacity-10 border-0" />
        </>
    )
}

export default OrderHeader