import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const fileCreation = () => {
    rl.question('Enter the file name: ', (fileName) => {
        rl.question('Enter the content of the file: ', (content) => {
            fs.writeFile(`${fileName}.txt`, content, (err) => {
                if (err) throw err;
                console.log('File created successfully!');
                rl.close();
            });
        });
    });
}
fileCreation()


