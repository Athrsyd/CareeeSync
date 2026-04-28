import { useState } from "react";
import aiPrompt from "../utils/aiPrompt";
import axios from "axios";
import API from '../services/api'
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY

const useAI = () => {
const [result, SetResult] = useState(null);
const [loading, SetLoading] = useState(false);

const runAnalysis = async (careerData, skillsMastery, readiness) => {
    try {
    SetLoading(true);

    const prompt = aiPrompt(careerData, skillsMastery, readiness);
    console.log("Prompt:", prompt);
    console.log("API KEY:", API_KEY);

    const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
        contents: [
            {
            parts: [{ text: prompt }],
            },
        ],
        },
    );

    const text =
        res.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Tidak Ada Hasil";

    console.log("FULL RESPONSE:", res.data);

    const token = localStorage.getItem('tokenCareerSync');

    await API.post(
        "/feedback",
        { result: text },
        {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        },
    );

    SetResult(text);
    SetLoading(false);
    } catch (error) {
    console.error("AI ERROR:", error.response?.data || error.message);
    SetLoading(false);
    }

    
}

return { result, loading, runAnalysis };
}

export default useAI