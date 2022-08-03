export const generateRandomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).toUpperCase()}`;

export const hexToRgb = (hex) => {
    const [, r, g, b] = hex.match(/([A-Z0-9]{2})([A-Z0-9]{2})([A-Z0-9]{2})/)
    console.log(hex, r, g, b)
    return {
        r: parseInt(r, 16),
        g: parseInt(g, 16),
        b: parseInt(b, 16),
        toString() {
            return `rgb(${this.r}, ${this.g}, ${this.b})`
        }
    }
}
