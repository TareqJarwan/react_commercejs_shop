import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';

const FieldInput = ({ name, label }) => {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                control={control}
                name={name}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        fullWidth
                        label={label}
                        required />
                )}
            />
        </Grid>
    )
}

export default FieldInput;
