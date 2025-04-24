const os = require('os');

// Function to get the server's IP address
function getServerIP() {
    const networkInterfaces = os.networkInterfaces();
    
    // Look for non-internal IPv4 addresses
    for (const interfaceName in networkInterfaces) {
        const interfaces = networkInterfaces[interfaceName];
        for (const iface of interfaces) {
            // Skip internal and non-IPv4 addresses
            if (!iface.internal && iface.family === 'IPv4') {
                return iface.address;
            }
        }
    }
    
    // Fallback to localhost if no suitable IP is found
    return 'localhost';
}

module.exports = {
    getServerIP
};