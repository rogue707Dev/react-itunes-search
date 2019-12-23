import React from 'react';
import { useFormik } from 'formik';
import { makeStyles, TextField, Button, Grid, Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getMedia } from '../store/media';
import * as Yup from 'yup';

const useStyles = makeStyles(() => ({
  textField: {
    height: 68
  },
  button: {
    marginTop: 4
  }
}));

function SearchForm() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      search: ''
    },
    validationSchema: Yup.object().shape({
      search: Yup.string().required('Required')
    }),
    onSubmit: ({ search }) => {
      dispatch(getMedia(search));
    }
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} mt={3} mb={3}>
      <Grid container spacing={3} alignItems="flex-start">
        <Grid item xs={8} sm={9} lg={10}>
          <TextField
            error={formik.errors.search && formik.touched.search}
            helperText={formik.errors.search}
            name="search"
            inputProps={formik.getFieldProps('search')}
            label="Search Term"
            fullWidth
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={4} sm={3} lg={2}>
          <Button type="submit" variant="contained" color="primary" size="large" fullWidth className={classes.button}>
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchForm;
