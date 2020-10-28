import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {
    HeroWrapper,
    CarouselItemWrapper,
    CarouselItem,
    HeroContent,
    HeroBgWrapper,
    HeroBg,
    HeroIcon,
    HeroH1,
    HeroP,
    HeroSearchWrapper
} from './HomeElements'
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from '@material-ui/icons/Search';
import Carousel from 'react-material-ui-carousel'
import Video from '../../../images/heroBg.png'
import img from '../../../images/Papi_Kost_4.png'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    searchBar: {
        margin: theme.spacing(1),
        background: 'white'
    }
}));

function SlidingImages(props) {
    return (
        <CarouselItemWrapper>
            <CarouselItem alt={props.image.attributes.title_1} src={props.image.attributes.url_1} />
            <CarouselItem alt={props.image.attributes.title_2} src={props.image.attributes.url_2} />
            <CarouselItem alt={props.image.attributes.title_3} src={props.image.attributes.url_3} />
        </CarouselItemWrapper>
    )
}

function Index() {
    const classes = useStyles();
    const [values, setValues] = useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false
    });

    let imageSlide = [
        {
            id: 0,
            attributes: {
                title_1: "slider-img-1",
                url_1: require('./images/slider-img-1.png'),
                title_2: "slider-img-2",
                url_2: require('./images/slider-img-2.png'),
                title_3: "slider-img-3",
                url_3: require('./images/slider-img-3.png'),
            }
        },
        {
            id: 1,
            attributes: {
                title_1: "slider-img-3",
                url_1: require('./images/slider-img-3.png'),
                title_2: "slider-img-2",
                url_2: require('./images/slider-img-2.png'),
                title_3: "slider-img-1",
                url_3: require('./images/slider-img-1.png'),
            }
        },
        {
            id: 2,
            attributes: {
                title_1: "slider-img-2",
                url_1: require('./images/slider-img-2.png'),
                title_2: "slider-img-3",
                url_2: require('./images/slider-img-3.png'),
                title_3: "slider-img-1",
                url_3: require('./images/slider-img-1.png'),
            }
        }
    ]

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box component="section">
                    <HeroWrapper>
                        <HeroBgWrapper>
                            <HeroBg alt="image" src={Video} />
                        </HeroBgWrapper>
                        <HeroContent>
                            <HeroIcon alt="a" src={img} />
                            <HeroH1>Bingung Cari Kosan?</HeroH1>
                            <HeroP>Sini papi bantuin cari</HeroP>
                            <HeroSearchWrapper>
                                <FormControl style={{ borderRadius: 50 }} fullWidth className={classes.searchBar}>
                                    <OutlinedInput
                                        style={{ borderRadius: 50 }}
                                        id="outlined-adornment-amount"
                                        value={values.amount}
                                        onChange={handleChange("amount")}
                                        startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                                        endAdornment={
                                            <InputAdornment position="start">
                                                <Button style={{
                                                    color: 'white',
                                                    backgroundColor: "#33c9ff",
                                                    borderRadius: 50
                                                }} variant="contained">
                                                    Cari
                                                </Button>
                                            </InputAdornment>}
                                        placeholder="Masukkan Area Yang Dicari"
                                    />
                                </FormControl>
                            </HeroSearchWrapper>
                        </HeroContent>
                    </HeroWrapper>
                </Box>
                <Box component="section">
                    <Carousel interval="3000">
                        {imageSlide.map((image, index) => (
                            <SlidingImages key={index} image={image} />
                        ))}
                    </Carousel>
                </Box>
                <Box component="section">
                </Box>
                <Box component="section">
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Index

