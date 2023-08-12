import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: "h1xys0by",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-08-12",
    basePath: "/admin",
    plugins: [deskTool()],
})

export default config