import React, { useState, useEffect, useReducer } from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// conponets
import HeroProfile from '../HeroProfile/HeroProfile';
// router
import { Link, useParams } from 'react-router-dom';
// hook
import { HERO_PROFILE_REDUCER } from '../../hooks/HeroHook/heroProfileReducer';
import { HeroContext } from '../../hooks/HeroHook/heroContext';
import { GlobalContext } from '../../hooks/GlobalHook/globalContext';
// API
import { apiHeroesList, apiSingleHero } from '../../services/api';


    const useStyles = makeStyles(theme => ({
        root: {
        flexGrow: 1,
        padding: theme.spacing(5)
        },
        innner: {
            maxWidth: '900px',
            margin: '0 auto'
        },
        paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        },
        link: {
            textDecoration: 'none'
        },
        hTlt: {
            overflow : 'hidden',
            textOverflow : 'ellipsis',
            whiteSpace : 'nowrap',
            width : '95%',
            fontSize: '1.3em',
            margin: '0 auto'
        },
        onFocus: {
            boxShadow: 'inset 3px 3px 15px #000',
            backgroundColor: 'rgba(255, 238, 75, 0.7)'
        },
    }));
  
  export default function HeroList() {
    const classes = useStyles();
    let { heroId } = useParams();
    const [heroState, heroStateDispatch] = useReducer(HERO_PROFILE_REDUCER);
    const [heroesData, setHeroesData] = useState([]);
    const loadingState = React.useContext(GlobalContext);
    const snackbarState = React.useContext(GlobalContext);

    useEffect(() => {
        loadingState.loadingStateDispatch({ 
            loading: true
        });
        apiHeroesList().then(result => {
            setHeroesData(result);
            
        });

        if (heroId) { 
            
            apiSingleHero(heroId).then(result => {
                heroStateDispatch({ type: 'CHANGE_HERO_PROFILE',heroId , heroProfile: result});
                
                loadingState.loadingStateDispatch({ 
                    loading: false
                });
            });
           
        }  else {
           
            loadingState.loadingStateDispatch({ 
                loading: false
            });
        }

        

    }, []);


    const handleHeroProfile = (heroId) => {
        loadingState.loadingStateDispatch({ 
            loading: true
        });
        apiSingleHero(heroId).then(result => {
            heroStateDispatch({ type: 'CHANGE_HERO_PROFILE',heroId, heroProfile: result});
            loadingState.loadingStateDispatch({ 
                loading: false
            });

            snackbarState.snackbarStateDispatch({ 
                type: 'SUCCESS_SNACKBAR',
                typeState: 'success', 
                open: false, 
                message: 'Successful!'
            });
        });
       
    }

    const heroes = heroesData.map((data) => (
        
        <Grid item md={3} xs={4}  key={data.id} onClick={() => handleHeroProfile(data.id)}>
            <Link to={`/heroes/${data.id}`} className={classes.link}>
                <Card  className={`${ heroId === data.id ? classes.onFocus : '' }`}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={`Into ${data.name} Profile`}
                            image={data.image}
                            title={`Into ${data.name} Profile`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.hTlt}>
                                {data.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid>
    
    ));
    
  
    return (
        <HeroContext.Provider value={heroState}> 
        <div className={classes.root}>
            <div className={classes.innner}>
                <Grid container spacing={3}>
                    {heroes}
                </Grid>
            </div>
            {heroId ? <HeroProfile /> : null}
        </div>
        </HeroContext.Provider>
    );
  }