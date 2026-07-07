import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  const cvPath = join(process.cwd(), "public", "cv.pdf");

  try {
    const cvBuffer = await readFile(cvPath);

    return new Response(cvBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="cv.pdf"',
        "Cache-Control": "public, max-age=3600"
      }
    });
  } catch {
    return new Response(
      JSON.stringify({
        error: "CV PDF not found",
        expectedPath: "public/cv.pdf"
      }),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}

