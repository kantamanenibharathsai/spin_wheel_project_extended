import { Box } from "@mui/material"
import landingPageStyles from "./LandingPage.Styles"
import { Wheel } from "react-custom-roulette"
import { useState } from "react"






const data = [
    { option: '0' },
    { option: '1' },
    { option: '2' },
]


const LandingPage = () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * data.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    }


    return (
        <Box sx={landingPageStyles.mainContainer}>
            <Box sx={landingPageStyles.childContainer}>
                <Box sx={landingPageStyles.leftContainer}>
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={data}
                        onStopSpinning={() => {
                            setMustSpin(false);
                        }}
                        backgroundColors={[
                            "#F95901",
                            "#FB87AB",
                            "#DC2E56",
                            "#3C91E6",
                            "#C1FF9B",
                            "#000000",
                            "#FCF2E8",
                        ]}
                        textColors={["#000", "#fff"]}
                        outerBorderColor="#fff"
                        outerBorderWidth={5}
                        spinDuration={1.0}
                        innerRadius={15}
                        innerBorderColor="black"
                        innerBorderWidth={3}
                        radiusLineColor="transparent"
                        radiusLineWidth={0}
                        perpendicularText={false}
                        pointerProps={{
                            src: "",
                            style: {
                                color: "pink",
                                position: "absolute",
                                top: 49,
                                marginBottom: -10,
                                width: 50,
                            },
                        }}
                    />
                    <button onClick={handleSpinClick}>SPIN</button>
                </Box>
            </Box>
        </Box>
    )
}


export default LandingPage