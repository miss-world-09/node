const os = require('os');

// Returns the amount of free system memory in bytes as an integer
console.log("Free Memory:", os.freemem());

// Returns the string path of the current user's home directory.
console.log(os.homedir());

// Returns the host name of the operating system as a string.
console.log(os.hostname());

// The load average is a measure of system activity calculated by the operating system and expressed as a fractional number.
console.log(os.loadavg());

// Returns the machine type as a string, such as arm, arm64, aarch64, mips, mips64, ppc64, ppc64le, s390, s390x, i386, i686, x86_64
console.log(os.machine());

// Returns an object containing network interfaces that have been assigned a network address
console.log(os.networkInterfaces());

// Returns a string identifying the operating system platform for which the Node.js binary was compiled. The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.
console.log(os.platform());

// Returns the total amount of system memory in bytes as an integer.
console.log(os.totalmem());

// Returns the operating system name as returned by uname(3). For example, it returns 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.
console.log(os.type());

// Returns the system uptime in number of seconds.
console.log(os.uptime());

// Returns a string identifying the kernel version.
console.log(os.version());
