---
name: weather
version: 1.0.0
description: Get current weather and forecasts via wttr.in or Open-Meteo. Use when: user asks about weather, temperature, or forecasts for any location. NOT for: historical weather data, severe weather alerts, or detailed meteorological analysis. No API key needed.
homepage: https://wttr.in/:help
metadata: { "openclaw": { "emoji": "🌤️", "requires": { "bins": ["curl"] } } }
---

# Weather Skill

Agent capable of providing weather information using [wttr.in](https://wttr.in/).

## 🛠 Usage Examples

### Current Weather
- "What's the weather like in Tokyo right now?"
- "Give me the current temperature in London."

### Forecast
- "Is it going to rain in Paris tomorrow?"
- "What's the weather forecast for New York for the next 3 days?"

### Specific Details
- "What's the wind speed in Chicago?"
- "Show me the weather in Hanoi with more details."

## ⚙️ Configuration
No API keys required. Uses the open-access wttr.in service.
