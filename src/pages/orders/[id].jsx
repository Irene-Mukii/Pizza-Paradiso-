import Image from "next/image";
import styles from '@/styles/Order.module.css'
import axios from "axios";

const Order = ({order}) => {
    const status = order.status;
    const statusClass = (index) => {
        if (index-status < 1) return styles.done
        if (index-status === 1) return styles.inProgress
        if (index-status > 1) return styles.undone
    }
    return (
        <div className=" h-screen flex items-center">
            <div className=" basis-2/3 ">
                <div className=" mb-14">
                <table className="w-full border-spacing-5">
                    <tbody className=" ">
                        <tr className=" pb-5 flex justify-between items-center justify-items-start">
                            <th>ORDER ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th className=" text-right">Total</th>
                        </tr>
                        <tr className=" pb-5 flex justify-between items-center">
                            <td>
                                <span> {order._id}</span>
                            </td>
                            <td >
                                <span className=" font-medium text-orange-600 text-2xl">{order.customer}</span>
                            </td>
                            <td>
                                <span> {order.address}</span>
                            </td>
                            <td>
                                <span className=" font-medium text-xl">$ {order.total}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>

                <div className=" flex flex-row justify-around"> 
                    <div className={statusClass(0)}>
                        <Image src='/../public/images/paid.png' width={30} height={30}/>
                        <span>Payment</span>
                        <div >
                            <Image src="/../public/images/checked.png" width={20} height={20}/>
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src='/../public/images/bake.png' width={30} height={30}/>
                        <span>Preparing</span>
                        <div>
                            <Image src="/../public/images/checked.png" width={20} height={20}/>
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image src='/../public/images/bike.png' width={30} height={30}/>
                        <span>On the way</span>
                        <div>
                            <Image src="/../public/images/checked.png" width={20} height={20}/>
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image src='/../public/images/delivered.png' width={30} height={30}/>
                        <span>Delivered</span>
                        <div>
                            <Image src="/../public/images/checked.png" width={20} height={20}/>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>

            <div className=" basis-1/3 ml-14">
                <div className=" max-h-72 w-5/6 bg-gray-700 p-12 pt-3 flex flex-col justify-between text-white">
                        <h2>CART TOTAL</h2>
                        <div className=" mr-2">
                            <b>Subtotal:  </b>$ {order.total}
                        </div>
                        <div className=" mr-2">
                            <b>Discount: </b>$ 0
                        </div>
                        <div className=" mr-2">
                            <b>Total: </b>$ {order.total}
                        </div>
                        <button disabled className=" h-7 text-teal-500 font-bold cursor-not-allowed bg-white mt-5">PAID</button>
                </div>
            </div>
        </div>
    )
};
export const getServerSideProps = async ({params}) => {
    console.log(params)
    const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
    return {
      props: {
        order: res.data
      },
    };
  };

export default Order;