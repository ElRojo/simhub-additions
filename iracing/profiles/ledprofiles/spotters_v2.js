//right

const ledCount = 30
const maxLights = 2
const aheadColor = "#ff00c5"
const behindColor = "#ff00c5"
const backgroundColor = "#00FFFFFF"

function mapRange(input, distanceMin, distanceMax, ledMin, ledMax) {
    return (input - distanceMin) * (ledMax - ledMin) / (distanceMax - distanceMin) + ledMin
}

function processLEDs(ledCount, ahead, behind) {
    const leds = new Array(ledCount).fill(backgroundColor)
    const halfCount = Math.floor(ledCount / 2)

    function applyColor(input, color, iStart, iEnd, rangeMin, rangeMax) {
        if (input === 0 || input < rangeMin || input > rangeMax) return;

        const position = Math.round(mapRange(input, rangeMin, rangeMax, iStart, iEnd - 1))
        const start = Math.max(iStart, position - Math.floor(maxLights / 2))
        const end = Math.min(iEnd, start + maxLights)

        for (let i = start; i < end; i++) {
            leds[i] = color
        }
    }

    if (!$prop('IRacingExtraProperties.iRacing_DriverAhead_00_IsInPit')) {
        applyColor(ahead, aheadColor, 0, halfCount, -5, 0)
    }
    if (!$prop('IRacingExtraProperties.iRacing_DriverBehind_00_IsInPit')) {
        applyColor(behind, behindColor, halfCount, ledCount, 0, 5)
    }

    return leds
}
const driverAhead = $prop('IRacingExtraProperties.iRacing_DriverAhead_00_Distance')
const driverBehind = $prop('IRacingExtraProperties.iRacing_DriverBehind_00_Distance')

return processLEDs(ledCount, driverAhead, driverBehind)

// Left

const ledCount = 30
const maxLights = 2
const aheadColor = "#ff00c5"
const behindColor = "#ff00c5"
const backgroundColor = "#00FFFFFF"

function mapRange(input, distanceMin, distanceMax, ledMin, ledMax) {
    return (input - distanceMin) * (ledMax - ledMin) / (distanceMax - distanceMin) + ledMin
}


function processLEDs(ledCount, ahead, behind) {
    const leds = new Array(ledCount).fill(backgroundColor)
    const halfCount = Math.floor(ledCount / 2)

    function applyColor(input, color, iStart, iEnd, rangeMin, rangeMax) {
        if (input === 0 || input > rangeMin || input < rangeMax) return;

        const position = Math.round(mapRange(input, rangeMin, rangeMax, iStart, iEnd - 1))
        const start = Math.max(iStart, position - Math.floor(maxLights / 2))
        const end = Math.min(iEnd, start + maxLights)

        for (let i = start; i < end; i++) {
            leds[i] = color
        }
    }

    if (!$prop('IRacingExtraProperties.iRacing_DriverAhead_00_IsInPit')) {
        applyColor(ahead, aheadColor, halfCount, ledCount, 0, -5)
    }
    if (!$prop('IRacingExtraProperties.iRacing_DriverBehind_00_IsInPit')) {
        applyColor(behind, behindColor, 0, halfCount, 5, 0)
    }
    return leds
}
const driverAhead = $prop('IRacingExtraProperties.iRacing_DriverAhead_00_Distance')
const driverBehind = $prop('IRacingExtraProperties.iRacing_DriverBehind_00_Distance')

return processLEDs(ledCount, driverAhead, driverBehind)

