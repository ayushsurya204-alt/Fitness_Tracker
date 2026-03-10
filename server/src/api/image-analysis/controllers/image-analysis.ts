import { Context } from "koa";
import { analyzeImage } from "../services/gemini";

export default {
  async analyze(ctx: Context) {
    try {
      const file = ctx.request.files?.image as any;

      if (!file) {
        return ctx.badRequest("No image uploaded");
      }

      // Strapi upload file path
      const filePath = file.filepath || file.path;

      if (!filePath) {
        return ctx.badRequest("Invalid file upload");
      }

      console.log("Uploaded image path:", filePath);

      const result = await analyzeImage(filePath);

      return ctx.send({
        success: true,
        result,
      });

    } catch (error: any) {
      console.error("Controller Error:", error);

      return ctx.internalServerError("Analysis failed", {
        error: error.message,
      });
    }
  },
};