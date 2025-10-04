#!/usr/bin/env node
const { spawnSync } = require('child_process')
const { readdirSync, statSync } = require('fs')
const path = require('path')


const packagesDir = path.join(__dirname, '..', 'packages')
const packages = readdirSync(packagesDir).filter(name => {
const p = path.join(packagesDir, name)
return statSync(p).isDirectory()
})


let failed = false
for (const pkg of packages) {
    console.log('\n----')
    console.log(`Running tests for: ${pkg}`)
    const res = spawnSync('npm', ['test'], { cwd: path.join(packagesDir, pkg), stdio: 'inherit' })
    if (res.status !== 0) failed = true
}


process.exit(failed ? 1 : 0)