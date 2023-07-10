import React, { useEffect, useState } from 'react'
import Header from '@/components/header'

const Result = () => {

    const [bmr, setBmr] = useState(0)
    const [tdee, setTdee] = useState(0)

    function calculateBMRAndTDEE(ageRange, gender, height, weight, unit) {
        // Extract the minimum and maximum ages from the age range
        const ageRegex = /(\d+)-(\d+)\s+years/;
        const [, minAge, maxAge] = ageRange.match(ageRegex).map(Number);

        console.log(minAge, maxAge)

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
            bmr = A + (B * weight) + (C * height) - (D * ((maxAge + minAge) / 2));
        } else if (unit === 'Imperial') {
            // Convert height from inches to centimeters
            const heightInCm = height * 2.54;
            // Convert weight from pounds to kilograms
            const weightInKg = weight * 0.453592;
            bmr = A + (B * weightInKg) + (C * heightInCm) - (D * ((maxAge + minAge) / 2));
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

        console.log(bmr, tdee)
        return { bmr, tdee };
    }



    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem("answers"))
        let a = data["How Old Are You?"]
        let g = data["How do you identify yourself?"]
        let w = Number(data["What is your current height and weight?"]["weight"])
        let h = Number(data["What is your current height and weight?"]["height"])
        let u = data["What is your current height and weight?"]["unit"]

        console.log({ a, g, w, h, u })

        let { bmr, tdee } = calculateBMRAndTDEE(a, g, h, w, u)
        setBmr(bmr)
        setTdee(tdee)

    }, [])

    return (
        <div className='relative h-screen'>
            <Header fill={20} />
            <div className='relative top-20 left-0 w-screen bg-[#dedccf] min-h-[100%] z-10 flex flex-col justify-center items-center'>
                <p className='text-center text-[#343434] text-4xl font-extralight mb-20 min-[1024px]:mt-0 mt-20 underline'>Result</p>
                <p className='text-center text-[#343434] text-2xl font-extralight mb-20'>BMR : {bmr} calories/day</p>
                <p className='text-center text-[#343434] text-2xl font-extralight mb-20'>TDEE : {tdee} calories/day</p>
            </div>
        </div>
    )
}

export default Result