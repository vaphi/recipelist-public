import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Column {
    id: 'name' | 'description' | 'notes' | 'origin' | 'type' | 'createdby';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'description', label: 'Description', minWidth: 100 },
    {
        id: 'notes',
        label: 'Notes',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'origin',
        label: 'Origin',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'type',
        label: 'Type',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'createdby',
        label: 'Created By',
        minWidth: 170,
        align: 'right',
    },
];

export interface Data {
    name: string;
    description: string;
    ingredients: string;
    notes: string;
    origin: string;
}

export default function RecipeTable() {
    let navigate = useNavigate();

    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [rows, setRows] = useState<[]>([]);

    useEffect(() => {
        const apiUrl = 'http://localhost:4200/recipes/getRecipes';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setRows(data);
                console.log('This is your data', data)
            });
    }, []);

    function goToRecipeDetail(recipeId: number) {
        navigate(`/recipe/detail/${recipeId}`);
    }

    function handleChangePage(event: unknown, newPage: number) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
        setPage(0);
        setRowsPerPage(+event.target.value);
    }

    return (
        <><div>
            <button>test</button>
        </div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row: any) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align} onClick={() => goToRecipeDetail(row.id)}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage} />
            </Paper></>
    );
}
