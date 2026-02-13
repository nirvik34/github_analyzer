const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

// Manually load .env.local
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
        envVars[match[1].trim()] = match[2].trim();
    }
});

const genAI = new GoogleGenerativeAI(envVars.GEMINI_API_KEY);

const modelsToTest = [
    "gemini-pro",
    "gemini-1.0-pro",
    "gemini-1.5-pro",
    "gemini-1.5-flash",
    "gemini-2.0-flash-exp",
    "gemini-2.5-flash",
    "models/gemini-pro",
    "models/gemini-1.5-flash"
];

async function testModel(modelName) {
    try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent("Hello");
        const text = await result.response.text();
        return { success: true, response: text.substring(0, 50) + "..." };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function testAllModels() {
    console.log("🔍 Testing available Gemini models...\n");
    console.log("API Key:", envVars.GEMINI_API_KEY?.substring(0, 20) + "...\n");
    console.log("=".repeat(60));

    for (const modelName of modelsToTest) {
        process.stdout.write(`\nTesting "${modelName}"... `);
        const result = await testModel(modelName);

        if (result.success) {
            console.log("✅ WORKS!");
            console.log(`   Response: ${result.response}`);
        } else {
            console.log("❌ FAILED");
            if (result.error.includes("404")) {
                console.log("   Error: Model not found (404)");
            } else if (result.error.includes("403")) {
                console.log("   Error: Permission denied (403)");
            } else {
                console.log(`   Error: ${result.error.substring(0, 80)}`);
            }
        }
    }

    console.log("\n" + "=".repeat(60));
    console.log("\n💡 Use the first model that shows ✅ WORKS!");
}

testAllModels();
