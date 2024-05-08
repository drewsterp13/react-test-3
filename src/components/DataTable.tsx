import React, { useState } from 'react'
import Modal from "@mui/material/Modal";
import { server_calls } from "../api/server"
import DisplayAddInfo from "./DisplayAddInfo"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from "../custom-hooks/FetchData"

interface displayFormProp {
    displayForm: boolean;
  }

interface mySelectionModel {
    selmodel: string[];
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'make', headerName: 'Make', width: 130 },
    { field: 'model', headerName: 'Model', width: 130 },
    { field: 'year_', headerName: 'Year', width: 130, type: 'number'},
    { field: 'color', headerName: 'Color', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
];

function FormModal( prop: mySelectionModel ) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button className="bg-gray-500 text-white m-3 p-1 rounded hover:bg-gray-800 font-semibold" onClick={handleOpen}>add new car</button>
            <button className="bg-gray-500 text-white m-3 p-1 rounded hover:bg-gray-800 font-semibold" onClick={handleOpen}>update car</button>
            <Modal className="flex flex-col items-center" open={open} onClose={handleClose}>
                <div className="text-center bg-gray-800 text-white w-96 inset-0">
                    <h1 className="text-xl bg-gray-900">Enter data</h1>
                    <DisplayAddInfo id={prop.selmodel} />
                    <div className="flex flex-row justify-center">  
                        <button className="bg-red-600 text-white m-3 p-1 rounded hover:bg-red-700 font-semibold" onClick={handleClose}>exit</button>
                    </div>
                </div>
            </Modal>
        </div>
        
    )
}

export default function DataTable() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(selectionModel[0])
        setTimeout( () => { location.reload()}, 500)
        handleClose()
    }

    return (
        <div className="flex flex-col align-center">
            <div className="flex flex-row justify-center">
                {/* OBVIOUSLY, these are not functional buttons */}
                <FormModal selmodel={selectionModel}/>
                
                
                <button className="bg-gray-500 text-white m-3 p-1 rounded hover:bg-red-700 font-semibold" onClick={handleOpen}>delete car</button>
                <Modal className="flex flex-col items-center" open={open} onClose={handleClose}>
                    <div className="text-center bg-gray-800 text-white h-24 w-80 inset-0">
                        <h1 className="text-xl bg-gray-900">Are you sure you want to delete?</h1>
                        <div className="flex flex-row justify-center">  
                            <button className="bg-red-600 text-white m-3 p-1 rounded hover:bg-red-700 w-12 font-semibold" onClick={deleteData}>yes</button>
                            <button className="bg-gray-200 text-black m-3 p-1 rounded hover:bg-gray-400 w-12 font-semibold" onClick={handleClose}>no</button>
                        </div>
                    </div>
                </Modal>
                
            </div>
            <DataGrid
                        rows={contactData}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page:0, pageSize: 5},
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        onRowSelectionModelChange={ (item:any) => {
                            setSelectionModel(item)
                        } }
                    />
        </div>
    )
    
}
