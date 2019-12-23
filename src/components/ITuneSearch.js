import React from 'react';
import { Container, Grid, Typography, Box, CircularProgress } from '@material-ui/core';
import Media from './Media';
import SearchForm from './SearchForm';
import { useSelector } from 'react-redux';

function ITuneSearch() {
  const { media, isLoading, error } = useSelector((state) => state.media);

  return (
    <Container maxWidth="lg">
      <SearchForm />
      {media == null && !isLoading ? (
        <Box mt={3}>
          <Typography variant="h5" color="primary" align="center">
            Enter keyword and click search
          </Typography>
        </Box>
      ) : error ? (
        <Box mt={3}>
          <Typography variant="h5" color="secondary" align="center">
            {error}
          </Typography>
        </Box>
      ) : isLoading ? (
        <Box mt={3} display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : media.length === 0 ? (
        <Box mt={3}>
          <Typography variant="h5" align="center">
            No result found
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {media.map((media) => <Media key={media.trackId} media={media} />)}
        </Grid>
      )}
    </Container>
  );
}

export default ITuneSearch;
