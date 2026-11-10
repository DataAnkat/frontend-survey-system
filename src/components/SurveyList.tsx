import { getSurveys } from "../surveyapi";
import { useState, useEffect } from "react";
import type { SurveyData } from "../types";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import { Button, Link } from "@mui/material";

function SurveyList () {

    const [survey, setSurveys] = useState<SurveyData[] | null>();
    const [open, setOpen] = useState(false);


    // tavallaan toimii mutta ei anna survey list

    const columns: GridColDef[] = [
        {field: 'name', headerName: 'Name', flex: 1, 
            renderCell: () => 
            <Button>Click this button</Button>
        },

    ]

    const fetchSurveys = () => {
        getSurveys()
        .then(data => setSurveys(data))
        .catch(err => console.error(err))
    }

    useEffect(() => {
        fetchSurveys();
    }, [])

    // const handleDelete = (url: string) => {
    //     if (window.confirm("Are you sure?")) {
    //         deleteCar(url)
    //         .then(() => {
    //             fetchCars()
    //             setOpen(true)
    //         })
    //         .catch(err => console.error(err))
    //     }
        
    // }

    return (
        <>
        <div style={{flex:1, height: 500, marginTop: 10}}>
            <DataGrid
            rows={survey || []}
            columns={columns}
            autoPageSize
            //getRowId={row => row.name}
            onRowClick={() => {
                console.log(survey);
            }}
            />
        </div>
        <Snackbar
        open={open}
        message="Jotain Deleted"
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        />
        </>
    )
}

export default SurveyList;