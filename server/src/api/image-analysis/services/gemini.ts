import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI });

export const analyzeImage = async (_filePath: string) => {
  try {

    const base64ImageFile = fs.readFileSync(_filePath, {
      encoding: "base64",
    });

    const contents = [
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: base64ImageFile,
        },
      },
      {
        text: "Extract the food name and estimated calories from this image in JSON.",
      },
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
    });

    return response.text;

  } catch (error) {
    console.log(error);
    throw error;
  }
};