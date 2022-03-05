const {rename, readdirSync, mkdir} = require('fs')
const {promisify} = require('util');
const renameAsync = promisify(rename);

const dir = './dist/code';

(async () => {
	const files = readdirSync(dir)

	const promises = files.map((oldName) => {
		const newName = oldName.replace('.ts','.ts.txt')
		console.log(`Renaming ${dir}/${oldName} to ${dir}/${newName}`);
		return renameAsync(`${dir}/${oldName}`, `${dir}/${newName}`)
	})

	await Promise.all(promises)
})()
