import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Material UI
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { Add, RemoveSharp } from '@material-ui/icons';
// hook
import { HeroContext } from '../../hooks/HeroHook/heroContext';
import { GlobalContext } from '../../hooks/GlobalHook/globalContext';
// API
import { apiUpdateHeroAbility } from '../../services/api';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    innner: {
        maxWidth: '900px',
        margin: '15px auto',
        position: 'relative',
        textAlign: 'left',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        textAlign: 'center',
    },
    rBlock: {
        position: 'absolute',
        right: 10,
        bottom: 10
    },
    countWrap: { 
        padding: 15
    },
    tlt: {
        display: 'inline-block',
        width: '10%'
    },
    countBlock: {
        display: 'inline-block',
    },
    countBtn: {
        display: 'inline-block',
        margin: '0 10px'
    },
    valurAbility: {
        display: 'inline-block',
        width: 25,
        textAlign: 'center',
    },
}));

export default function HeroProfile() {
    const classes = useStyles();
    const heroState = React.useContext(HeroContext);
    
    const snackbarState = React.useContext(GlobalContext);
    const loadingState = React.useContext(GlobalContext);
    const [heroProfileData, set_heroProfileData] = useState({});
    const [heroAbility, setHeroAbility] = useState({});
    const heroProfileDataX = {
        str: 0,
        int: 0,
        agi: 0,
        luk: 0
    };

    useEffect(() => {
        
        if (heroState) {
            set_heroProfileData(heroState.heroProfileData);
            setHeroAbility(heroState.heroProfileData);
            setAbilityNum(0);
        }
      
    }, [heroState]);
    
    const [abilityNum, setAbilityNum] = useState(0);
    // count hero ability
    const handleHeroProfile = (key, onCount) => {
        const num = onCount ? 1 : -1;
        const hangleTotalNum  = onCount ? -1 : 1;
        
        setAbilityNum( (abilityNum + hangleTotalNum) !== 0 ? (abilityNum + hangleTotalNum) : 0);
        setHeroAbility({
            ...heroAbility,
            [key]: (heroAbility[key] + num)
        });
        
    }
    // submit hero ability
    const submitHeroAbility = () => {
        if (abilityNum !== 0) {
            snackbarState.snackbarStateDispatch({ 
                type: 'SUCCESS_SNACKBAR',
                typeState: 'info', 
                open: true,
                message: 'Please add Remaining points!'
            });
        } else {
            loadingState.loadingStateDispatch({ 
                loading: true
            });
            apiUpdateHeroAbility(heroState.heroId, heroAbility)
            .then(result => {
                // if (result.status === 200) {
                    loadingState.loadingStateDispatch({ 
                        loading: false
                    });
                        
                    snackbarState.snackbarStateDispatch({ 
                        type: 'SUCCESS_SNACKBAR',
                        typeState: 'success', 
                        open: true, 
                        message: 'Successfully modified!'
                    });
                // }
            })
            .catch( error => {
                snackbarState.snackbarStateDispatch({ 
                    type: 'SUCCESS_SNACKBAR',
                    typeState: 'error', 
                    open: true, 
                    message: error
                });
            });
        }
    }

    
    return (
        <div className={classes.root}>
            <div className={classes.innner}>
                <Paper className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Box className={classes.countWrap}>
                        { Object.keys(heroProfileData).map(( key ) => (
                        <Grid item xs={12} key={key}>                            
                            <b className={classes.tlt}>{key.toUpperCase()}</b>
                            <div className={classes.countBlock}>
                                <IconButton 
                                color="primary" 
                                aria-label="Add heroAbility" 
                                className={classes.countBtn}
                                onClick={() => handleHeroProfile(key, true)}
                                disabled={abilityNum === 0}
                                >
                                    <Add />
                                </IconButton>
                                <b className={classes.valurAbility}>
                                    {heroAbility[key]}
                                </b>
                                <IconButton 
                                color="primary" 
                                aria-label="minus heroAbility" 
                                className={classes.countBtn}
                                onClick={() => handleHeroProfile(key, false)}
                                disabled={heroAbility[key] < 1 }>
                                    <RemoveSharp />
                                </IconButton>
                            </div>
                        </Grid>
                        ))}
                        </Box>
                    </Grid>
                    
                    <Grid item xs={6}>
                        <div className={classes.rBlock}>
                            <p>Points: <b>{abilityNum}</b></p>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                className={classes.button}
                                disabled={JSON.parse(String(JSON.stringify(heroAbility) === JSON.stringify(heroProfileDataX)))}
                                onClick={() => submitHeroAbility()}
                            >
                                Save
                            </Button>
                        </div>
                    </Grid>

                    </Grid>
                </Paper>
            </div>

        </div>
    );

}