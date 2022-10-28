import chalk from 'chalk'

const color = (hex, txt) => chalk.hex(hex).bold(txt)
const col1 = (txt) => color('#FDE047', txt)
const col2 = (txt) => color('#f87171', txt)
const col3 = (txt) => color('#9ca3af', txt)
const msg = `
  Belgian Endothelial Surgical Transplant of the Cornea
                  (BEST Cornea) Study
`

export const plainBanner = col1(
`
                    ___ ___ ___ _____ 
                   | _ ) __/ __|_   _|
                   | _ \\ _|\\__ \\ | |  
                __ |___/_ _|_ _/_|_|__ _
               / _/ _ \\ '_| ' \\/ -_) _\` |
               \\__\\___/_| |_||_\\___\\__,_|
${msg}`)
export const banner = col1(
`
                    ___ ___ ___ _____ 
                   | _ ) __/ __|_   _|
                   | _ \\ _|\\__ \\ | |  `)+"\n"
+col2(`                __ `)+col1(`|___/__|____/`)+col2(`_`)+col1(`|_|`)+col2(`__ _`)
+col2(`
               / _/ _ \\ '_| ' \\/ -_) _\` |
               \\__\\___/_| |_||_\\___\\__,_|
`)+col3(msg)

