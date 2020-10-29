import React, { useState, useRef } from 'react';
import firstIcon from './images/svg-4.svg'
import secondIcon from './images/svg-5.svg'
import thirdIcon from './images/svg-6.svg'
import fourthIcon from './images/svg-7.svg'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
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
    HeroSearchWrapper,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    FirstColumn,
    SecondColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    CustomButton,
    CategoryContainer,
    CategoryWrapper,
    CategoryCard,
    CategoryIcon,
    CategoryH1,
    CategoryH2Cont,
    CategoryH2,
    CategoryP,
    RekomendasiContainer,
    RekomendasiHeader,
    LeftSideWrapper,
    RightSideWrapper,
    RekomendasiKosContainer,
    RekomendasiKosWrapper,
    RekomendasiKosCard,
    RekomendasiKosIcon,
    RekomendasiKosH2,
    RekomendasiKosP
} from './HomeElements'
import Carousel from 'react-material-ui-carousel'
import Video from '../../../images/heroBg.png'
import iconImg from '../../../images/Papi_Kost_4.png'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
    searchBar: {
        margin: theme.spacing(1),
        background: 'white'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
        maxWidth: 300,
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function SlidingImages(props) {
    return (
        <CarouselItemWrapper>
            <CarouselItem alt={props.image.attributes.title_1} src={props.image.attributes.url_1} />
        </CarouselItemWrapper>
    )
}

function RekomendasiCards() {
    return (
        <RekomendasiKosContainer>
            <RekomendasiKosWrapper>
                <RekomendasiKosCard>
                    <RekomendasiKosIcon src={firstIcon} />
                    <RekomendasiKosH2>Kos-kosan</RekomendasiKosH2>
                    <RekomendasiKosP>Cari kos-kosan yang sesuai dengan kriteriamu.</RekomendasiKosP>
                </RekomendasiKosCard>
                <RekomendasiKosCard>
                    <RekomendasiKosIcon src={secondIcon} />
                    <RekomendasiKosH2>Kontrakan</RekomendasiKosH2>
                    <RekomendasiKosP>Kontrakan yang cocok dan cozy untuk kamu.</RekomendasiKosP>
                </RekomendasiKosCard>
                <RekomendasiKosCard>
                    <RekomendasiKosIcon src={thirdIcon} />
                    <RekomendasiKosH2>Apartemen</RekomendasiKosH2>
                    <RekomendasiKosP>Apartemen nyaman dengan kualitas premium.</RekomendasiKosP>
                </RekomendasiKosCard>
                <RekomendasiKosCard>
                    <RekomendasiKosIcon src={fourthIcon} />
                    <RekomendasiKosH2>Lain - lain</RekomendasiKosH2>
                    <RekomendasiKosP>Lihat rekomendasi lainnya yang cocok untuk anda.</RekomendasiKosP>
                </RekomendasiKosCard>
            </RekomendasiKosWrapper>
        </RekomendasiKosContainer>
    )
}

function Index({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headLine,
    darkText,
    description,
    buttonLabel,
    img,
    alt }) {
    const classes = useStyles();
    const theme = useTheme();

    const [values, setValues] = useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false
    });
    const [personName, setPersonName] = useState([]);

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
    ];

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    function getStyles(name, personName, theme) {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleChangeDropdown = (event) => {
        setPersonName(event.target.value);
    };

    return (
        <React.Fragment>
            <Container style={{ backgroundColor: 'white' }} maxWidth="lg">
                <Box component="section">
                    <HeroWrapper>
                        <HeroBgWrapper>
                            <HeroBg alt="image" src={Video} />
                        </HeroBgWrapper>
                        <HeroContent>
                            <HeroIcon alt="a" src={iconImg} />
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
                                                <CustomButton to="/login">Cari</CustomButton>
                                            </InputAdornment>}
                                        placeholder="Masukkan Kata Kunci Pencarian"
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
                    <InfoContainer lightBg={lightBg} id={id}>
                        <InfoWrapper>
                            <InfoRow imgStart={imgStart}>
                                <FirstColumn>
                                    <TextWrapper>
                                        <TopLine>{topLine}</TopLine>
                                        <Heading lightText={lightText}>{headLine}</Heading>
                                        <Subtitle darkText={darkText}>{description}</Subtitle>
                                        <BtnWrap>
                                            <CustomButton to="/login">{buttonLabel}</CustomButton>
                                        </BtnWrap>
                                    </TextWrapper>
                                </FirstColumn>
                                <SecondColumn>
                                    <ImgWrap>
                                        <Img src={img} alt={alt} />
                                    </ImgWrap>
                                </SecondColumn>
                            </InfoRow>
                        </InfoWrapper>
                    </InfoContainer>
                </Box>
                <Box>
                    <CategoryContainer>
                        <CategoryH1>Kategori</CategoryH1>
                        <CategoryH2Cont>Cari pilihan anda sesuai kategori</CategoryH2Cont>
                        <CategoryWrapper>
                            <CategoryCard>
                                <CategoryIcon src={firstIcon} />
                                <CategoryH2>Kos-kosan</CategoryH2>
                                <CategoryP>Cari kos-kosan yang sesuai dengan kriteriamu!</CategoryP>
                            </CategoryCard>
                            <CategoryCard>
                                <CategoryIcon src={secondIcon} />
                                <CategoryH2>Kontrakan</CategoryH2>
                                <CategoryP>Kontrakan yang cocok dan cozy untuk kamu!</CategoryP>
                            </CategoryCard>
                            <CategoryCard>
                                <CategoryIcon src={thirdIcon} />
                                <CategoryH2>Apartemen</CategoryH2>
                                <CategoryP>Apartemen nyaman dengan kualitas premium!</CategoryP>
                            </CategoryCard>
                        </CategoryWrapper>
                    </CategoryContainer>
                </Box>
                <Box style={{ marginTop: '100px' }} component="section">
                    <RekomendasiContainer>
                        <RekomendasiHeader>
                            <LeftSideWrapper>
                                <FormControl className={classes.formControl}>
                                    <InputLabel style={{ fontWeight: 700 }} id="demo-mutiple-name-label">Rekomendasi Kos</InputLabel>
                                    <Select
                                        labelId="demo-mutiple-name-label"
                                        id="demo-mutiple-name"
                                        value={personName}
                                        onChange={handleChangeDropdown}
                                        input={<Input />}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </LeftSideWrapper>
                            <RightSideWrapper>
                                <CustomButton to="/login">Lihat Semua</CustomButton>
                                <CustomButton to="/login"><FaChevronLeft /></CustomButton>
                                <CustomButton to="/login"><FaChevronRight /></CustomButton>
                            </RightSideWrapper>
                        </RekomendasiHeader>
                        <Carousel navButtonsAlwaysInvisible={true} autoPlay={false} animation="slide" interval="3000">
                            <RekomendasiCards />
                        </Carousel>
                        <RekomendasiHeader>
                            <LeftSideWrapper>
                                <FormControl className={classes.formControl}>
                                    <InputLabel style={{ fontWeight: 700 }} id="demo-mutiple-name-label">Area Terpopuler</InputLabel>
                                    <Select
                                        labelId="demo-mutiple-name-label"
                                        id="demo-mutiple-name"
                                        value={personName}
                                        onChange={handleChangeDropdown}
                                        input={<Input />}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </LeftSideWrapper>
                            <RightSideWrapper>
                                <CustomButton to="/login">Lihat Semua</CustomButton>
                                <CustomButton to="/login"><FaChevronLeft /></CustomButton>
                                <CustomButton to="/login"><FaChevronRight /></CustomButton>
                            </RightSideWrapper>
                        </RekomendasiHeader>
                        <Carousel autoPlay={false} animation="slide" interval="3000">
                            <RekomendasiCards />
                        </Carousel>
                    </RekomendasiContainer>
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

