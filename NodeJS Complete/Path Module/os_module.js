const os = require('os');


// 🔹 os.arch()
// ব্যাখ্যা: এটি CPU architecture রিটার্ন করে। যেমন 'x64', 'arm' ইত্যাদি।

// উদাহরণ:
// const os = require('os');
// console.log(os.arch()); // যেমনঃ 'x64'
// 🔹 os.platform()
// ব্যাখ্যা: এটি OS-এর platform রিটার্ন করে। যেমনঃ 'linux', 'win32', 'darwin' (macOS) ইত্যাদি।

// উদাহরণ:
// console.log(os.platform()); // যেমনঃ 'win32'
// 🔹 os.type()
// ব্যাখ্যা: এটি OS-এর টাইপ বলে দেয়। যেমন 'Linux', 'Windows_NT' ইত্যাদি।

// উদাহরণ:
// console.log(os.type()); // যেমনঃ 'Windows_NT'
// 🔹 os.hostname()
// ব্যাখ্যা: তোমার কম্পিউটারের নাম (hostname) বলে দেয়।

// উদাহরণ:
// console.log(os.hostname()); // যেমনঃ 'DESKTOP-ABC123'
// 🔹 os.totalmem()
// ব্যাখ্যা: পুরো সিস্টেমে মোট কত RAM আছে, তা bytes এ রিটার্ন করে।

// উদাহরণ:
// console.log(os.totalmem()); // যেমনঃ 8589934592 (8 GB)
// 🔹 os.freemem()
// ব্যাখ্যা: বর্তমানে ফ্রি (available) RAM কত আছে, তা bytes এ দেয়।

// উদাহরণ:
// console.log(os.freemem());
// 🔹 os.uptime()
// ব্যাখ্যা: তোমার কম্পিউটার চালু থাকার সময় (seconds এ) বলে দেয়।

// উদাহরণ:
// console.log(os.uptime()); // যেমনঃ 123456 (seconds)
// 🔹 os.userInfo()
// ব্যাখ্যা: বর্তমানে logged-in ইউজারের তথ্য দেয়। যেমন username, home directory ইত্যাদি।

// উদাহরণ:
// console.log(os.userInfo());
// 🔹 os.homedir()
// ব্যাখ্যা: ইউজারের home directory কোথায় সেটা বলে।

// উদাহরণ:
// console.log(os.homedir()); // যেমনঃ 'C:\\Users\\Username'
// 🔹 os.tmpdir()
// ব্যাখ্যা: Temporary files রাখার directory কোথায়, সেটা বলে দেয়।

// উদাহরণ:
// console.log(os.tmpdir()); // যেমনঃ 'C:\\Users\\Username\\AppData\\Local\\Temp'
// 🔹 os.endianness()
// ব্যাখ্যা: CPU কীভাবে data store করে তা বলে — 'BE' (Big Endian) বা 'LE' (Little Endian)।

// উদাহরণ:
// console.log(os.endianness()); // যেমনঃ 'LE'
// 🔹 os.networkInterfaces()
// ব্যাখ্যা: তোমার সিস্টেমের সব network interfaces এর details দেয় (IP address, MAC address ইত্যাদি)।

// উদাহরণ:
// console.log(os.networkInterfaces());
// 🔹 os.cpus()
// ব্যাখ্যা: CPU এর প্রতিটি core এর details দেয় (speed, model ইত্যাদি)।

// উদাহরণ:
// console.log(os.cpus());
// 🔹 os.loadavg()
// ব্যাখ্যা: CPU এর load (১, ৫, ও ১৫ মিনিটের জন্য) জানায়। Linux/Unix এ কাজ করে।

// উদাহরণ:
// console.log(os.loadavg());
// 🔹 os.release()
// ব্যাখ্যা: OS-এর release version বলে।

// উদাহরণ:
// console.log(os.release()); // যেমনঃ '10.0.19044'
// 🔹 os.version()
// ব্যাখ্যা: OS-এর version string দেয়।

// উদাহরণ:
// console.log(os.version());
// 🔹 os.constants
// ব্যাখ্যা: এটি বিভিন্ন constant value দেয় যেমন signals, error codes ইত্যাদি।

// উদাহরণ:
// console.log(os.constants);
// 🔹 os.machine()
// ব্যাখ্যা: CPU architecture-এর আরও specific version জানায় (Node.js v18+ থেকে)।

// উদাহরণ:
// console.log(os.machine()); // যেমনঃ 'x86_64'
// 🔹 os.devNull
// ব্যাখ্যা: এটি এমন একটি path, যেখানে output দিলে সেটা discard হয়। যেমন Linux এর /dev/null এর মত।

// উদাহরণ:
// console.log(os.devNull); // যেমনঃ '/dev/null'