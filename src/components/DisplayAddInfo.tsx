import React from "react";
import { useForm } from "react-hook-form";
import Modal from "@mui/material/Modal";
import { useSubmit } from "react-router-dom"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseMake, chooseModel, chooseYear, chooseColor, choosePrice } from "../redux/slices/RootSlice"

interface AddInfoProps {
    id?: string[]
}

const DisplayAddInfo = ( props:AddInfoProps ) => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const store = useStore();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${data.year_} ${data.make} ${data.model} ${props.id}`)
        } else {
            dispatch(chooseMake(data.make))
            dispatch(chooseModel(data.model))
            dispatch(chooseYear(data.year_))
            dispatch(chooseColor(data.color))
            dispatch(choosePrice(data.price))

            server_calls.add(store.getState())
        }
    }

  return (
    <div className="mt-4">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
            <div className="flex flex-row justify-between w-80">
                <p className="mr-2 font-semibold">MAKE:</p>
                <input {...register("make")} className="bg-gray-200 border border-solid border-1 border-black text-gray-800" type="text" name="make" placeholder="enter here"/>
            </div>
            <div className="flex flex-row justify-between w-80">
                <p className="mr-2 font-semibold">MODEL:</p>
                <input {...register("model")} className="bg-gray-200 border border-solid border-1 border-black text-gray-800" type="text" name="model" placeholder="enter here"/>
            </div>
            <div className="flex flex-row justify-between w-80">
                <p className="mr-2 font-semibold">YEAR:</p>
                <input {...register("year_")} className="bg-gray-200 border border-solid border-1 border-black text-gray-800" type="number" name="year_" placeholder="enter here"/>
            </div>
            <div className="flex flex-row justify-between w-80">
                <p className="mr-2 font-semibold">COLOR:</p>
                <input {...register("color")} className="bg-gray-200 border border-solid border-1 border-black text-gray-800" type="text" name="color" placeholder="enter here"/>
            </div>
            <div className="flex flex-row justify-between w-80">
                <p className="mr-2 font-semibold">PRICE (USD):</p>
                <input {...register("price")} className="bg-gray-200 border border-solid border-1 border-black text-gray-800" type="number" name="price" placeholder="enter here"/>
            </div>
            <button className="bg-green-500 text-white m-3 p-1 rounded hover:bg-green-800 font-semibold" onClick={handleOpen}>SUBMIT</button>
            <Modal className="flex flex-col items-center" open={open} onClose={handleClose}>
                    <div className="text-center bg-gray-800 text-white h-24 w-80 inset-0">
                        <h1 className="text-xl bg-gray-900">Data has been submitted</h1>
                        <div className="flex flex-row justify-center">  
                            <button className="bg-gray-200 text-black m-3 p-1 rounded hover:bg-gray-400 w-12 font-semibold" onClick={handleClose}>okay</button>
                        </div>
                    </div>
                </Modal>
        </form>
    </div>
  )
}

export default DisplayAddInfo