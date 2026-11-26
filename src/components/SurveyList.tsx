import { getSurveys } from "../surveyapi";
import { useState, useEffect } from "react";
import type { SurveyData } from "../types";
import type { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import Snackbar from "@mui/material/Snackbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

function SurveyList () {

    const [survey, setSurveys] = useState<SurveyData[] | null>();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();


    const columns: GridColDef[] = [
        {
            field: 'name', headerName: 'Name', flex: 1,
            renderCell: (params) =>
            <>
                <Button onClick={() => navigate(`/surveys/${params.row.id}`)}>{'Kysely: ' + params.row.name}</Button>
                {/* <Button onClick={() => navigate(`/surveys/${params.row.id}/answers`)}>Vastaukset</Button> */}
            </>
        },
        {
            field: 'name2', headerName: 'Name2', flex: 1,
            renderCell: (params) =>
            <>
                <Button onClick={() => navigate(`/surveys/${params.row.id}/answers`)}>Vastaukset</Button>
            </>
        }

    ]

    const fetchSurveys = () => {
        getSurveys()
        .then(data => setSurveys(data))
        .catch(err => console.error(err))
    }

    useEffect(() => {
        fetchSurveys();
    }, [])


    return (
        <>
        <div style={{flex:1, height: 500, marginTop: 10}}>
            <DataGrid
            rows={survey || []}
            columns={columns}
            autoPageSize
            //getRowId={row => row.name}
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