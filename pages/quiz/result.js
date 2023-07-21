import React, { useEffect, useState } from 'react'
import Header from '@/components/header'

const Result = () => {

    const [bmr, setBmr] = useState(0)
    const [tdee, setTdee] = useState(0)

    function calculateBMRAndTDEE(ageRange, gender, height, weight, unit) {

        // Define the BMR constants based on gender
        const bmrConstants = {
            Male: { A: 66, B: 6.23, C: 12.7, D: 6.8 },
            Female: { A: 655, B: 4.35, C: 4.7, D: 4.7 },
            Others: { A: 661, B: 4.35, C: 4.7, D: 4.7 }
        };

        // Calculate BMR based on gender and age
        const { A, B, C, D } = bmrConstants[gender];
        let bmr;
        if (unit === 'Metric') {
            bmr = A + (B * weight) + (C * height) - (D * ageRange);
        } else if (unit === 'Imperial') {
            // Convert height from inches to centimeters
            const heightInCm = height * 2.54;
            // Convert weight from pounds to kilograms
            const weightInKg = weight * 0.453592;
            bmr = A + (B * weightInKg) + (C * heightInCm) - (D * ageRange);
        } else {
            throw new Error('Invalid unit specified. Please use "Metric" or "Imperial".');
        }

        // Calculate TDEE based on BMR and activity level
        const activityLevels = {
            Sedentary: 1.2,
            LightlyActive: 1.375,
            ModeratelyActive: 1.55,
            VeryActive: 1.725,
            ExtraActive: 1.9
        };
        const tdee = Object.values(activityLevels).reduce((acc, val) => acc + (val * bmr), 0);

        return { bmr, tdee };
    }



    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem("answers"))
        let a = Number(data["How Old Are You?"])
        let g = data["How do you identify yourself?"]
        let w = Number(data["What is your current height and weight?"]["weight"])
        let h = Number(data["What is your current height and weight?"]["height"])
        let u = data["What is your current height and weight?"]["unit"]

        let { bmr, tdee } = calculateBMRAndTDEE(a, g, h, w, u)
        setBmr(bmr)
        setTdee(tdee)

    }, [])

    return (
        <div className='relative h-screen'>
             <div className='backgroundOverlayGreen'></div>
            <div className='backgroundOverlay'></div>
            <Header fill={100} />
            <div className='w-screen bg-transparent mb-12 flex flex-col justify-center items-center mt-20'>
                <p className='text-center text-white text-4xl font-extralight mb-20 min-[1024px]:mt-0  underline'>Result</p>
                <p className='text-center text-white text-2xl font-extralight mb-8'>BMR : { Math.round(bmr).toFixed(2)} calories/day</p>
                <p className='text-center text-white text-2xl font-extralight mb-20'>TDEE : {Math.round(tdee).toFixed(2)} calories/day</p>
                <p className='text-center text-white text-2xl font-extralight mb-8'>Protein : {Math.round(bmr*0.3).toFixed(2)}</p>
                <p className='text-center text-white text-2xl font-extralight mb-8'>Carbohydrates : {Math.round(bmr*0.4).toFixed(2)}</p>
                <p className='text-center text-white text-2xl font-extralight mb-20'>Fat : {Math.round(bmr*0.3).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Result