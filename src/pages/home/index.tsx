import React, { FunctionComponent } from 'react'
import { Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Card,
  Typography,
  Container,
  Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

interface Module {
  title: string,
  link: string,
  image: string,
  description: string
}
const Home: FunctionComponent = () => {
  const history = useHistory()
  
  const modules: Module[] = [
    { title: 'Juros Compostos', link: 'juros-compostos', image: '/images/compound-interest.jpeg', description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. `},
  ]

  const moduleSize = 4;

  function redirect(uri: string){
    history.push(uri)
  }

  return (
    <>
      <Container>
        <Grid container
              style={{padding: `1.5rem 0 1.5rem 0` }}
              justify="flex-start"
              spacing={3}>

          {modules.map(({title, image, description, link}, index) => (
            <Grid item
                  lg={moduleSize}
                  md={moduleSize}
                  sm={moduleSize}
                  key={index}
                  onClick={ () => { redirect(`/${encodeURIComponent(link)}`) }}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 140 }}
                    image={image}
                    title={title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                      Simular
                    </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Home;