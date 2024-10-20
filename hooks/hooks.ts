// import { BeforeAll, AfterAll, Before, After, Status, AfterStep, setDefaultTimeout } from  "@cucumber/cucumber";
// import { Browser, BrowserContext  } from "@playwright/test";
// import { invokeBrowser } from "../helper/browsers/browserManager";
// import { getEnv } from "../helper/env/env";
// import { fixture } from "./pageFixture";

// let browser: Browser;
// let context: BrowserContext;

// setDefaultTimeout(60 * 60 * 1000);

// BeforeAll(async function () {
//     getEnv();
//     browser = await invokeBrowser();
// });

// //It will trigger for not auth scenarios
// Before({ tags: "not @auth" }, async function ({ pickle }){
//     const scenarioName = pickle.name + pickle.id;
//     context = await browser.newContext({
//         recordVideo: {
//             dir: "test-results/videos",
//         },
//     });
//     const page = await context.newPage();
//     fixture.page = page;
// });

// // It will trigger for auth scenarios
// Before({ tags: "@auth" }, async function ( { pickle }) {
//     const scenarioName = pickle.name + pickle.id;
//     context = await browser.newContext({
//         storageState: getStrorageState(pickle.name),
//         recordVideo: {
//             dir: "test-results/videos",
//         }
//     })
//     const page = await context.newPage();
//     fixture.page = page;
// });

// AfterStep(async function ({pickle}) {
//     let img: Buffer;
//     img = await fixture.page.screenshot({
//         path: './test-result/screenshots/${pickle.name}.png',
//         type: "png",
//     });
//     await fixture.page.waitForTimeout(1000);
//     this.attach(img, "image/png"); 
// })

// After(async function ({ pickle, result }) {
//     let videoPath: string;
//     let img: Buffer;
//     if (result?.Status == Status.FAILED) {
//         img = await fixture.page.screenshot({ 
//             path: './test-result/screenshots/${pickle.name}.png',
//             type: "png"
//         })
//         videoPath = await fixture.page.video().path();
//     }
//     await fixture.page.close();
//     await context.close();
//     if (result?.status == Status.Failed){
//         this.attach(img, "image/png");
//         this.attach(fs.readFileSync(videoPath), "video/webm");
//     }
// })

// AfterAll(async function  (){
//     await browser.close();
// })
    
// function getStrorageState(name: any): string | { cookies: Array<{ name: string; value: string; domain: string; path: string; expires: number; httpOnly: boolean; secure: boolean; sameSite: "Strict" | "Lax" | "None"; }>; origins: Array<{ origin: string; localStorage: Array<{ name: string; value: string; }>; }>; } | undefined {
//     throw new Error("Function not implemented.");
//     } { 
//     if (user.endsWith("(loginAuth)")) return "src/helper/auth/loginAuth.json";
// }

