/**
 * Pack Volume Estimator
 * This script calculates the volume of a backpack using the Cube Method and Cylinder Method.
 * It also estimates the weight based on different material densities.
 * 
 * Cracked Asphalt - 2025
 * https://www.crackedasphalt.com
 */

function validateInput(input) {
    let value = parseFloat(input.value);

    // Allow empty input (so user can type normally)
    if (input.value === "") return;

    // Prevent zero and negative values
    if (value <= 0) {
        alert("Values must be greater than zero. Resetting to 1.");
        input.value = 1;
    }
    // Prevent values larger than 1000
    else if (value > 1000) {
        alert("Values cannot exceed 1000 cm or 1000 inches.");
        input.value = 1000;
    }
}

function calculateVolume() {
    let height = parseFloat(document.getElementById("height").value);
    let width = parseFloat(document.getElementById("width").value);
    let depth = parseFloat(document.getElementById("depth").value);
    let unit = document.getElementById("unit").value;

    // Ensure all three fields have valid values before calculating
    if (isNaN(height) || isNaN(width) || isNaN(depth) || height <= 0 || width <= 0 || depth <= 0) {
        clearResults();
        return;
    }

    // Convert inches to cm if needed
    let conversionFactor = (unit === "cm") ? 1 : 2.54;
    height *= conversionFactor;
    width *= conversionFactor;
    depth *= conversionFactor;

    // Cube Method
    let cubeVolumeCm3 = height * width * depth;

    // Cylinder Method
    let circumference = (2 * depth) + (2 * width);
    let radius = circumference / (2 * Math.PI);
    let cylinderVolumeCm3 = Math.PI * Math.pow(radius, 2) * height;

    // Averaged Volume
    let avgVolumeCm3 = (cubeVolumeCm3 + cylinderVolumeCm3) / 2;

    // Convert to cubic inches & liters
    let cubeVolumeLiters = (cubeVolumeCm3 / 1000).toFixed(1);
    let cylinderVolumeLiters = (cylinderVolumeCm3 / 1000).toFixed(1);
    let avgVolumeLiters = (avgVolumeCm3 / 1000).toFixed(1);

    let cubeVolumeInches = (cubeVolumeCm3 * 0.0610237).toFixed(1);
    let cylinderVolumeInches = (cylinderVolumeCm3 * 0.0610237).toFixed(1);
    let avgVolumeInches = (avgVolumeCm3 * 0.0610237).toFixed(1);

    // Update Quick Reference for Pack Volume
    document.getElementById("quickVolumeLiters").innerText = avgVolumeLiters;

    // Update Volume Table
    document.getElementById("cubeVolumeLiters").innerText = cubeVolumeLiters;
    document.getElementById("cubeVolumeInches").innerText = cubeVolumeInches;
    document.getElementById("cylinderVolumeLiters").innerText = cylinderVolumeLiters;
    document.getElementById("cylinderVolumeInches").innerText = cylinderVolumeInches;
    document.getElementById("avgVolumeLiters").innerText = avgVolumeLiters;
    document.getElementById("avgVolumeInches").innerText = avgVolumeInches;

    // Update Weight Estimates
    updateWeightEstimates(avgVolumeLiters);
}

function updateWeightEstimates(volumeLiters) {
    let densities = { "water": 1.00, "clothing": 0.20, "gear": 0.40, "jellybeans": 0.68 };
    let conversionFactor = 2.20462; // kg to lbs

    document.getElementById("weightWaterKg").innerText = (volumeLiters * densities["water"]).toFixed(1);
    document.getElementById("weightWaterLbs").innerText = (volumeLiters * densities["water"] * conversionFactor).toFixed(1);
    document.getElementById("weightClothingKg").innerText = (volumeLiters * densities["clothing"]).toFixed(1);
    document.getElementById("weightClothingLbs").innerText = (volumeLiters * densities["clothing"] * conversionFactor).toFixed(1);
    document.getElementById("weightGearKg").innerText = (volumeLiters * densities["gear"]).toFixed(1);
    document.getElementById("weightGearLbs").innerText = (volumeLiters * densities["gear"] * conversionFactor).toFixed(1);
    document.getElementById("weightJellybeansKg").innerText = (volumeLiters * densities["jellybeans"]).toFixed(1);
    document.getElementById("weightJellybeansLbs").innerText = (volumeLiters * densities["jellybeans"] * conversionFactor).toFixed(1);
}

// Reset Outputs when Input is Missing
function clearResults() {
    let elements = [
        "cubeVolumeLiters", "cubeVolumeInches",
        "cylinderVolumeLiters", "cylinderVolumeInches",
        "avgVolumeLiters", "avgVolumeInches",
        "quickVolumeLiters",  // Reset Quick Reference
        "weightWaterKg", "weightWaterLbs",
        "weightClothingKg", "weightClothingLbs",
        "weightGearKg", "weightGearLbs",
        "weightJellybeansKg", "weightJellybeansLbs"
    ];

    elements.forEach(id => {
        document.getElementById(id).innerText = "-"; // Reset values to "-"
    });
}

// Attach event listeners
document.getElementById("height").addEventListener("input", calculateVolume);
document.getElementById("width").addEventListener("input", calculateVolume);
document.getElementById("depth").addEventListener("input", calculateVolume);
document.getElementById("unit").addEventListener("change", calculateVolume);
